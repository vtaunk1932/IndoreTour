iTour
https://utka7sh.github.io/iTour/

Description:

This project is a tourism website dedicated to showcasing the various attractions, events, and accommodations available in Indore, Madhya Pradesh, India. The website provides comprehensive information about places to visit, local events, hotels, and contact details for inquiries. It is built using Node.js for server-side scripting, HTML for markup, CSS for styling, JavaScript for interactivity, and PostgreSQL for database management.


Features:

Navigation: The website features a responsive navigation bar allowing users to easily navigate between different sections such as Home, Places, City Map, Events, Hotels, and Contact.

Home Section: The home section presents an introductory message along with an enticing image inviting users to explore Indore.

Places Section: This section highlights the top tourist attractions in Indore, providing detailed information about each place along with external links for further exploration.

City Map Section: Users can access an embedded Google Map displaying the geographical layout of Indore, facilitating navigation for visitors.

Events Section: It showcases upcoming events in Indore with embedded event details or links to booking platforms for more information and ticket purchase.

Hotels Section: Users can explore and book accommodations in Indore through the website, with detailed descriptions, images, and booking links for each hotel.

Contact Section: Allows users to get in touch with the website administrators by filling out a contact form, providing their name, email, phone number, subject, and message.

Footer: The footer section contains quick links for easy access to various sections of the website, along with contact information and social media links.


Technologies Used:

Node.js: Backend scripting and server-side logic.
HTML: Markup language for structuring the website content.
CSS: Styling language for enhancing the visual appeal of the website.
JavaScript: Used for client-side interactivity and dynamic content loading.
PostgreSQL: Database management system for storing and retrieving data.
Google Maps API: Integrated for displaying interactive maps.
External APIs: Utilized for fetching event details and hotel booking information.
Setup Instructions:

## Quick Start:
1. **Clone the repository** to your local machine
2. **Navigate to the project directory**
3. **Run the application:**
   ```bash
   # Option 1: Using npm (recommended)
   npm run dev

   # Option 2: Using npx directly
   npx http-server . -p 8000 -o

   # Option 3: Using npm start (server only)
   npm start
   ```
4. **Open your browser** and go to `http://localhost:8000`

## For Production/Backend Setup:
- Ensure Node.js and PostgreSQL are installed
- Set up the PostgreSQL database according to the provided schema
- Update the database connection details in knexfile.js
- The application is designed to work with a backend API (currently runs in demo mode)

## New Features Added:
### ✅ Updated Events Section
- **Current Events**: Replaced old 2024 events with fresh 2025 events
- **Interactive Search**: Search events by name, description, or location
- **Event Counter**: Shows total number of events
- **Responsive Design**: Works perfectly on all devices

### ✅ Google Login Integration
- **Google OAuth**: Sign in with your Google account
- **Seamless Integration**: Works on both login and booking pages
- **Session Management**: Proper user session handling
- **Secure Authentication**: Uses Google's official OAuth library

### ✅ Dedicated Booking Page
- **Complete Booking System**: Full hotel booking interface
- **Multi-step Process**: Authentication → Hotel Selection → Booking Confirmation
- **Date Validation**: Smart check-in/check-out date handling
- **Guest Management**: Number of guests selection
- **Special Requests**: Textarea for special requirements

### ✅ Enhanced User Experience
- **Improved Navigation**: Added "Book Now" links throughout the site
- **Better Styling**: Modern, responsive design improvements
- **Error Handling**: Comprehensive error messages and validation
- **Mobile Friendly**: Optimized for all screen sizes


Acknowledgements:

Special thanks to all contributors and open-source libraries used in this project.
Inspired by the vibrant culture and beauty of Indore, Madhya Pradesh.

Contact Information:

For inquiries or support, please contact:

Email: utka7sh@gmail.com
