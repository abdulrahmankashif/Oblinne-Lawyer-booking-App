// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Language Toggle
function toggleLanguage() {
    const toggleSwitch = document.querySelector('.toggle-switch');
    const langEn = document.querySelector('.lang-en');
    const langUr = document.querySelector('.lang-ur');
    
    if (toggleSwitch && langEn && langUr) {
        toggleSwitch.classList.toggle('active');
        langEn.classList.toggle('active');
        langUr.classList.toggle('active');
    }
}

// Get URL Parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Search Lawyers (from home page)
function searchLawyers() {
    const serviceType = document.getElementById('serviceType')?.value || '';
    const city = document.getElementById('city')?.value || '';
    
    let url = 'lawyers.html';
    const params = [];
    
    if (serviceType) params.push(`specialization=${serviceType}`);
    if (city) params.push(`location=${city}`);
    
    if (params.length > 0) {
        url += '?' + params.join('&');
    }
    
    window.location.href = url;
}

// Render Featured Lawyers on Home Page
function renderFeaturedLawyers() {
    const container = document.getElementById('featuredLawyers');
    if (!container) return;
    
    const featured = lawyers.slice(0, 3);
    
    container.innerHTML = featured.map(lawyer => `
        <div class="lawyer-card">
            <div class="lawyer-header">
                <div class="lawyer-avatar">${lawyer.name.charAt(0)}</div>
                <div class="lawyer-info">
                    <div class="lawyer-name">${lawyer.name}</div>
                    <div class="lawyer-title">${lawyer.title}</div>
                    <div class="lawyer-rating">
                        <span class="stars">★★★★★</span>
                        <span class="rating-text">${lawyer.rating} (${lawyer.reviewCount} reviews)</span>
                    </div>
                </div>
            </div>
            <div class="lawyer-details">
                <div class="detail-item">📍 ${lawyer.location}</div>
                <div class="detail-item">💼 ${lawyer.experience} years experience</div>
                <div class="detail-item">💰 Rs. ${lawyer.consultationFee.toLocaleString()} consultation</div>
            </div>
            <div class="lawyer-specialties">
                ${lawyer.specializations.map(spec => `<span class="specialty-badge">${spec}</span>`).join('')}
            </div>
            <div class="lawyer-actions">
                <button class="btn-book" onclick="window.location.href='booking.html?id=${lawyer.id}'">Book Now</button>
                <button class="btn-view" onclick="window.location.href='lawyer-profile.html?id=${lawyer.id}'">View Profile</button>
            </div>
        </div>
    `).join('');
}

// Filter Lawyers
function filterLawyers() {
    const specializationFilter = document.getElementById('filterSpecialization')?.value || '';
    const cityFilter = document.getElementById('filterCity')?.value || '';
    const experienceFilter = document.getElementById('filterExperience')?.value || '';
    
    let filtered = lawyers;
    
    if (specializationFilter) {
        filtered = filtered.filter(lawyer => 
            lawyer.specializations.some(spec => 
                spec.toLowerCase().includes(specializationFilter.toLowerCase())
            )
        );
    }
    
    if (cityFilter) {
        filtered = filtered.filter(lawyer => 
            lawyer.location.toLowerCase() === cityFilter.toLowerCase()
        );
    }
    
    if (experienceFilter) {
        const minExp = parseInt(experienceFilter);
        filtered = filtered.filter(lawyer => lawyer.experience >= minExp);
    }
    
    renderLawyersGrid(filtered);
}

// Render Lawyers Grid
function renderLawyersGrid(lawyersToRender) {
    const container = document.getElementById('lawyersGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!container) return;
    
    if (resultsCount) {
        resultsCount.textContent = `Showing ${lawyersToRender.length} lawyer${lawyersToRender.length !== 1 ? 's' : ''}`;
    }
    
    if (lawyersToRender.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--pak-dark-gray);">No lawyers found matching your criteria. Please try different filters.</p>';
        return;
    }
    
    container.innerHTML = lawyersToRender.map(lawyer => `
        <div class="lawyer-card">
            <div class="lawyer-header">
                <div class="lawyer-avatar">${lawyer.name.charAt(0)}</div>
                <div class="lawyer-info">
                    <div class="lawyer-name">${lawyer.name}</div>
                    <div class="lawyer-title">${lawyer.title}</div>
                    <div class="lawyer-rating">
                        <span class="stars">★★★★★</span>
                        <span class="rating-text">${lawyer.rating} (${lawyer.reviewCount} reviews)</span>
                    </div>
                </div>
            </div>
            <div class="lawyer-details">
                <div class="detail-item">📍 ${lawyer.location}</div>
                <div class="detail-item">💼 ${lawyer.experience} years experience</div>
                <div class="detail-item">💰 Rs. ${lawyer.consultationFee.toLocaleString()} consultation</div>
            </div>
            <div class="lawyer-specialties">
                ${lawyer.specializations.map(spec => `<span class="specialty-badge">${spec}</span>`).join('')}
            </div>
            <div class="lawyer-actions">
                <button class="btn-book" onclick="window.location.href='booking.html?id=${lawyer.id}'">Book Now</button>
                <button class="btn-view" onclick="window.location.href='lawyer-profile.html?id=${lawyer.id}'">View Profile</button>
            </div>
        </div>
    `).join('');
}

// Initialize Lawyers Page
function initLawyersPage() {
    const specializationParam = getUrlParameter('specialization');
    const locationParam = getUrlParameter('location');
    
    if (specializationParam) {
        const select = document.getElementById('filterSpecialization');
        if (select) {
            select.value = specializationParam;
        }
    }
    
    if (locationParam) {
        const select = document.getElementById('filterCity');
        if (select) {
            select.value = locationParam.charAt(0).toUpperCase() + locationParam.slice(1);
        }
    }
    
    filterLawyers();
}

// Render Lawyer Profile
function renderLawyerProfile() {
    const lawyerId = getUrlParameter('id');
    const container = document.getElementById('profileContainer');
    
    if (!container || !lawyerId) return;
    
    const lawyer = lawyers.find(l => l.id === lawyerId);
    
    if (!lawyer) {
        container.innerHTML = '<p>Lawyer not found.</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">${lawyer.name.charAt(0)}</div>
            <div class="profile-info">
                <h1 class="profile-name">${lawyer.name}</h1>
                <p class="profile-title">${lawyer.title}</p>
                <div class="lawyer-rating">
                    <span class="stars">★★★★★</span>
                    <span class="rating-text">${lawyer.rating} (${lawyer.reviewCount} reviews)</span>
                </div>
                <div style="margin-top: 1rem;">
                    <button class="btn-primary" onclick="window.location.href='booking.html?id=${lawyer.id}'" style="padding: 0.75rem 2rem;">
                        Book Consultation
                    </button>
                </div>
            </div>
        </div>
        
        <div class="profile-section">
            <h3>About</h3>
            <p>${lawyer.about}</p>
        </div>
        
        <div class="profile-section">
            <h3>Specializations</h3>
            <div class="lawyer-specialties">
                ${lawyer.specializations.map(spec => `<span class="specialty-badge">${spec}</span>`).join('')}
            </div>
        </div>
        
        <div class="profile-section">
            <h3>Professional Details</h3>
            <ul>
                <li><strong>Experience:</strong> ${lawyer.experience} years</li>
                <li><strong>Location:</strong> ${lawyer.location}</li>
                <li><strong>Bar Council:</strong> ${lawyer.barCouncil}</li>
                <li><strong>Languages:</strong> ${lawyer.languages.join(', ')}</li>
                <li><strong>Consultation Fee:</strong> Rs. ${lawyer.consultationFee.toLocaleString()}</li>
            </ul>
        </div>
        
        <div class="profile-section">
            <h3>Education</h3>
            <p>${lawyer.education}</p>
        </div>
        
        <div class="profile-section">
            <h3>Achievements</h3>
            <ul>
                ${lawyer.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Render Booking Lawyer Card
function renderBookingLawyerCard() {
    const lawyerId = getUrlParameter('id');
    const container = document.getElementById('bookingLawyerCard');
    const categorySelect = document.getElementById('caseCategory');
    
    if (!container || !lawyerId) return;
    
    const lawyer = lawyers.find(l => l.id === lawyerId);
    
    if (!lawyer) {
        container.innerHTML = '<p>Lawyer not found.</p>';
        return;
    }
    
    container.innerHTML = `
        <h3 style="margin-bottom: 1rem;">Selected Lawyer</h3>
        <div class="lawyer-header">
            <div class="lawyer-avatar">${lawyer.name.charAt(0)}</div>
            <div class="lawyer-info">
                <div class="lawyer-name">${lawyer.name}</div>
                <div class="lawyer-title">${lawyer.title}</div>
                <div class="detail-item" style="margin-top: 0.5rem;">💰 Rs. ${lawyer.consultationFee.toLocaleString()} consultation</div>
            </div>
        </div>
    `;
    
    // Populate case category options
    if (categorySelect) {
        categorySelect.innerHTML = '<option value="">Select case category</option>' +
            lawyer.specializations.map(spec => `<option value="${spec}">${spec}</option>`).join('');
    }
    
    // Set minimum date to today
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
}

// Submit Booking
function submitBooking(event) {
    event.preventDefault();
    
    const lawyerId = getUrlParameter('id');
    const lawyer = lawyers.find(l => l.id === lawyerId);
    
    if (!lawyer) return;
    
    const bookingData = {
        lawyer: lawyer.name,
        clientName: document.getElementById('clientName').value,
        clientEmail: document.getElementById('clientEmail').value,
        clientPhone: document.getElementById('clientPhone').value,
        appointmentDate: document.getElementById('appointmentDate').value,
        appointmentTime: document.getElementById('appointmentTime').value,
        caseCategory: document.getElementById('caseCategory').value,
        consultationType: document.getElementById('consultationType').value,
        caseDescription: document.getElementById('caseDescription').value,
        consultationFee: lawyer.consultationFee
    };
    
    // Save to localStorage
    localStorage.setItem('lastBooking', JSON.stringify(bookingData));
    
    // Redirect to confirmation
    window.location.href = 'confirmation.html';
}

// Render Confirmation Details
function renderConfirmationDetails() {
    const container = document.getElementById('confirmationDetails');
    
    if (!container) return;
    
    const bookingData = localStorage.getItem('lastBooking');
    
    if (!bookingData) {
        container.innerHTML = '<p>No booking information found.</p>';
        return;
    }
    
    const booking = JSON.parse(bookingData);
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-PK', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };
    
    const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        return `${displayHour}:${minutes} ${ampm}`;
    };
    
    container.innerHTML = `
        <div class="detail-row">
            <span class="detail-label">Lawyer:</span>
            <span class="detail-value">${booking.lawyer}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Client Name:</span>
            <span class="detail-value">${booking.clientName}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Email:</span>
            <span class="detail-value">${booking.clientEmail}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Phone:</span>
            <span class="detail-value">${booking.clientPhone}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Date:</span>
            <span class="detail-value">${formatDate(booking.appointmentDate)}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Time:</span>
            <span class="detail-value">${formatTime(booking.appointmentTime)}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Case Category:</span>
            <span class="detail-value">${booking.caseCategory}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Consultation Type:</span>
            <span class="detail-value">${booking.consultationType}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Consultation Fee:</span>
            <span class="detail-value">Rs. ${booking.consultationFee.toLocaleString()}</span>
        </div>
    `;
}

// Initialize page based on current URL
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/' || path === '') {
        renderFeaturedLawyers();
    } else if (path.includes('lawyers.html')) {
        initLawyersPage();
    } else if (path.includes('lawyer-profile.html')) {
        renderLawyerProfile();
    } else if (path.includes('booking.html')) {
        renderBookingLawyerCard();
    } else if (path.includes('confirmation.html')) {
        renderConfirmationDetails();
    }
});
