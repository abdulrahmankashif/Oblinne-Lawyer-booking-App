# Oblinne - Pakistani Legal Services Platform

## Overview

Oblinne is a **pure HTML, CSS, and JavaScript prototype** that connects clients with qualified lawyers in Pakistan. The platform enables users to browse lawyers by specialty and location, view detailed lawyer profiles, and book consultations. The application features a modern, responsive interface with Pakistani colors (green and blue) and support for bilingual content (English and Urdu).

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (November 2024)

**Converted to Pure HTML/CSS/JS Prototype**: The application was rebuilt as a static website using vanilla HTML, CSS, and JavaScript to create a simple, lightweight prototype without the complexity of React and build tools.

## System Architecture

### Frontend Architecture

The frontend is built as a **static multi-page website** using pure web technologies:

- **Pages**: Static HTML files (index.html, lawyers.html, lawyer-profile.html, booking.html, confirmation.html)
- **Styling**: Custom CSS with Pakistani color scheme (Green: #01611C, Blue: #00509E)
- **JavaScript**: Vanilla JS for interactivity and data rendering
- **Fonts**: Google Fonts (Roboto, Open Sans, Noto Nastaliq Urdu)
- **Data**: Sample lawyer data stored in data.js
- **State Management**: URL parameters and localStorage for data passing between pages

**Design Decisions**:
- Simple, static files for easy deployment and fast loading
- No build process required - files are served directly
- Responsive design with mobile menu
- Pakistani color scheme throughout
- Bilingual support with language toggle (English/Urdu)

### Backend Architecture

The backend is a simple **static file server** using Express.js:

- **Framework**: Express.js on Node.js
- **Purpose**: Serves static HTML, CSS, and JavaScript files
- **Location**: All static files are in `server/public/` directory
- **Port**: Application runs on port 5000

**Design Decisions**:
- Minimal server setup - just serves static files
- No API endpoints required for prototype
- No database - all data is in JavaScript files

### Data Storage

**Current Implementation**: Static JavaScript data

**Data Files**:
- `server/public/data.js`: Contains sample lawyer data and legal services
- 8 sample lawyers with complete profiles (name, specializations, experience, location, ratings, etc.)
- Legal service categories (Family Law, Corporate Law, Criminal Law, Property Law, Civil Litigation, Tax Law)

**Data Flow**:
- Lawyer data loaded on page load via script tag
- URL parameters pass data between pages (e.g., lawyer ID)
- localStorage stores booking information for confirmation page

## File Structure

```
server/
├── public/              # Static files served to users
│   ├── index.html       # Homepage with search and featured lawyers
│   ├── lawyers.html     # Lawyers listing with filters
│   ├── lawyer-profile.html  # Individual lawyer profile
│   ├── booking.html     # Booking form
│   ├── confirmation.html    # Booking confirmation
│   ├── styles.css       # Main stylesheet with Pakistani theme
│   ├── data.js          # Lawyer and service data
│   └── script.js        # Interactive functionality
├── index.ts             # Express server (serves static files)
└── vite.ts              # Static file serving configuration
```

## Key Features

1. **Homepage**
   - Hero section with search functionality
   - Legal services overview
   - Featured lawyers showcase
   - Statistics section

2. **Lawyers Listing**
   - Filter by specialization, city, and experience
   - Responsive lawyer cards with ratings and details
   - Direct booking and profile viewing

3. **Lawyer Profiles**
   - Detailed lawyer information
   - Specializations and achievements
   - Education and bar council details
   - Direct booking button

4. **Booking Flow**
   - Multi-field booking form
   - Date and time selection
   - Case category and consultation type
   - Confirmation page with booking summary

5. **Responsive Design**
   - Mobile-first approach
   - Tablet and desktop layouts
   - Mobile hamburger menu
   - Touch-friendly interfaces

## External Dependencies

**Minimal Dependencies**: The prototype uses mostly vanilla web technologies

- **Google Fonts**: Roboto, Open Sans, Noto Nastaliq Urdu (for bilingual support)
- **Express.js**: Simple static file server
- **No build tools required**: Direct file serving