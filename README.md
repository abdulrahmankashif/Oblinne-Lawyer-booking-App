# Oblinne - Pakistani Legal Services Platform

A lightweight, responsive prototype for connecting clients with qualified lawyers in Pakistan. Built with pure HTML, CSS, and JavaScript for simplicity and fast deployment.

## Features

### Core Functionality
- **Browse Lawyers** - View qualified legal professionals by specialty and location
- **Advanced Filtering** - Search by specialization, city, and years of experience
- **Detailed Profiles** - Complete lawyer information including education, achievements, and ratings
- **Online Booking** - Schedule consultations with preferred date, time, and consultation type
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices

### Design
- **Pakistani Theme** - Styled with national colors (Green #01611C, Blue #00509E)
- **Bilingual Support** - Language toggle for English and Urdu (structure ready)
- **Mobile-First** - Touch-friendly interface with hamburger menu on small screens
- **Modern UI** - Clean, professional design with smooth interactions

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5000`

## Project Structure

```
server/
├── public/              # Static website files
│   ├── index.html       # Homepage with search and featured lawyers
│   ├── lawyers.html     # Lawyers listing page with filters
│   ├── lawyer-profile.html  # Individual lawyer profile page
│   ├── booking.html     # Appointment booking form
│   ├── confirmation.html    # Booking confirmation page
│   ├── styles.css       # Main stylesheet with Pakistani theme
│   ├── data.js          # Sample lawyer and service data
│   └── script.js        # Interactive functionality
├── index.ts             # Express server configuration
└── vite.ts              # Static file serving setup
```

## Sample Data

The prototype includes 8 sample lawyers with:
- Specializations (Family Law, Corporate Law, Criminal Law, etc.)
- Complete profiles with experience, education, and achievements
- Ratings and review counts
- Location and contact information
- Consultation fees

Legal service categories:
- Family Law
- Corporate Law
- Criminal Law
- Property Law
- Civil Litigation
- Tax Law

## How It Works

### User Journey

1. **Homepage** - Users search for lawyers by legal service and location
2. **Browse Lawyers** - View filtered results with key information
3. **View Profile** - See detailed lawyer information and credentials
4. **Book Consultation** - Fill out booking form with case details
5. **Confirmation** - Receive booking confirmation with summary

### Technical Implementation

- **No Build Process** - Pure HTML/CSS/JS files served directly
- **URL Parameters** - Pass data between pages (e.g., `?id=1`)
- **LocalStorage** - Store booking data for confirmation page
- **Vanilla JavaScript** - No frameworks or dependencies on frontend
- **Express Server** - Simple static file server

## Customization

### Colors
Edit `server/public/styles.css` to change the color scheme:
```css
:root {
  --primary-green: #01611C;
  --primary-blue: #00509E;
  /* Add your custom colors */
}
```

### Lawyer Data
Edit `server/public/data.js` to add or modify lawyers:
```javascript
const lawyers = [
  {
    id: 1,
    name: "Your Lawyer Name",
    specializations: ["Corporate Law"],
    // Add more fields
  }
];
```

### Languages
The language toggle is ready for implementation. Add translations by:
1. Creating language-specific content in `data.js`
2. Updating the `toggleLanguage()` function in `script.js`
3. Adding Urdu text alternatives for all content

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

Since this is a static website with a simple Express server, you can deploy to:

- **Replit** - Already configured (click "Publish" button)
- **Vercel/Netlify** - Deploy the `server/public` folder
- **Any Node.js Hosting** - Upload and run `npm run dev`
- **Static Hosting** - Upload `server/public` contents to any web server

## Future Enhancements

Potential features for a production version:
- Real database integration (PostgreSQL, MongoDB)
- User authentication and accounts
- Payment processing for consultation fees
- Video call integration
- Email notifications
- Admin panel for lawyer management
- Review and rating system
- Multi-language content (full Urdu translation)
- SMS/WhatsApp notifications

## License

This is a prototype project. Customize and use as needed for your legal services platform.

## Support

For questions or issues with this prototype, please refer to the code comments or contact the development team.

---

Built with ❤️ for the Pakistani legal community
