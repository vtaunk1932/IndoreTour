/**
 * Mobile Navigation Toggle Functionality
 * Handles the mobile menu open/close functionality
 */
let navbar = document.querySelector('.header .navbar');

// Ensure navbar exists before adding event listeners
if (navbar) {
    const menuBtn = document.querySelector('#menu-btn');
    const navClose = document.querySelector('#nav-close');

    if (menuBtn) {
        menuBtn.onclick = () => {
            navbar.classList.add('active');
        };
    }

    if (navClose) {
        navClose.onclick = () => {
            navbar.classList.remove('active');
        };
    }
}

/**
 * Header Scroll Behavior
 * Adds active class to header when scrolling and removes mobile menu
 */
window.onscroll = () => {
    // Remove mobile menu when scrolling
    if (navbar) {
        navbar.classList.remove('active');
    }

    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
};

/**
 * Initialize Header State on Page Load
 */
window.onload = () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
};

// const logOut = document.querySelector('.logout');

// logOut.onclick = () => {
//     sessionStorage.clear();
//     location.reload();
// }
/**
 * Logout Functionality
 * Clears user session and reloads the page
 */
function logout() {
    try {
        sessionStorage.clear();
        location.reload();
    } catch (error) {
        console.error('Error during logout:', error);
    }
}

/**
 * Initialize Application on DOM Content Loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Load hotels (currently static content)
    loadHotels();

    // Initialize events functionality
    initializeEvents();

    // Initialize contact form
    initializeContactForm();

    // Initialize login/logout visibility
    const loginLink = document.querySelector('#loginLink');
    const logoutLink = document.querySelector('#logout');

    if (loginLink && logoutLink) {
        if (sessionStorage.name) {
            loginLink.style.display = 'none';
            logoutLink.style.display = 'inline-block';
        } else {
            loginLink.style.display = 'inline-block';
            logoutLink.style.display = 'none';
        }
    }
});

/**
 * Load Hotels Function
 * Currently loads static content, prepared for future API integration
 * @async
 */
async function loadHotels() {
    try {
        // Hotels are currently loaded statically in HTML
        // This function is prepared for future API integration
        console.log('Hotels loaded from static HTML content');

        // Future API implementation:
        // const response = await fetch('/api/hotels');
        // const hotels = await response.json();
        // Update DOM with dynamic content

    } catch (error) {
        console.error('Error loading hotels:', error);
    }
}

/**
 * Initialize Events Functionality
 * Adds search and filtering capabilities to events
 */
function initializeEvents() {
    const searchInput = document.getElementById('eventSearch');
    const eventsContainer = document.getElementById('eventsContainer');
    const eventCount = document.getElementById('eventCount');

    if (!searchInput || !eventsContainer) return;

    // Event data (could be loaded from API in the future)
    const eventsData = [
        {
            title: 'Indore Food Festival 2025',
            date: 'March 15-20, 2025',
            location: 'Nehru Stadium, Indore',
            description: 'Experience the rich culinary heritage of Indore with street food, traditional dishes, and local delicacies from across Madhya Pradesh.',
            link: 'https://www.indorefoodfestival.com',
            category: 'food'
        },
        {
            title: 'Malayalam Cinema Week',
            date: 'March 25-30, 2025',
            location: 'Inox Cinema, Indore',
            description: 'Celebrating the best of Malayalam cinema with screenings of classic and contemporary films from Kerala.',
            link: 'https://www.malayalamcinemaweek.com',
            category: 'entertainment'
        },
        {
            title: 'Indore Startup Conclave 2025',
            date: 'April 5-7, 2025',
            location: 'Brilliant Convention Centre',
            description: 'A premier gathering of entrepreneurs, investors, and innovators shaping the future of business in Central India.',
            link: 'https://www.indorestartup.com',
            category: 'business'
        }
    ];

    // Debug: Log events data to console
    console.log('Events data loaded:', eventsData);

    // Update event count
    function updateEventCount(count) {
        if (eventCount) {
            eventCount.textContent = `${count} Event${count !== 1 ? 's' : ''}`;
        }
    }

    // Filter events based on search term
    function filterEvents(searchTerm = '') {
        const filteredEvents = eventsData.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase())
        );

        updateEventCount(filteredEvents.length);
        return filteredEvents;
    }

    // Render events
    function renderEvents(events) {
        if (!eventsContainer) {
            console.error('Events container not found');
            return;
        }

        console.log('Rendering events:', events);

        eventsContainer.innerHTML = events.map((event, index) => `
            <div class="event-card" data-category="${event.category}">
                <img src="https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=${encodeURIComponent(event.title)}" alt="${event.title}" loading="lazy">
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p class="event-date"><i class="fas fa-calendar"></i> ${event.date}</p>
                    <p>${event.description}</p>
                    <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                    <a href="${event.link}" target="_blank" class="btn">Learn More</a>
                </div>
            </div>
        `).join('');

        console.log(`Rendered ${events.length} events`);
    }

    // Initial render
    renderEvents(eventsData);
    updateEventCount(eventsData.length);

    // Add search functionality
    searchInput.addEventListener('input', function() {
        const filteredEvents = filterEvents(this.value);
        renderEvents(filteredEvents);
    });

    // Add enter key support for search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const filteredEvents = filterEvents(this.value);
            renderEvents(filteredEvents);
        }
    });
}

/**
 * Initialize Contact Form
 * Handles contact form submission with validation and feedback
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            alertBox('Please fill in all required fields', 'error');
            return;
        }

        if (!validateEmail(email)) {
            alertBox('Please enter a valid Gmail address', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = 'Sending... <i class="uil uil-spinner"></i>';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Show success message
            showContactSuccessMessage();

            // Reset form
            contactForm.reset();

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

        }, 1500);
    });
}

/**
 * Show Contact Success Message
 * Displays a beautiful success overlay
 */
function showContactSuccessMessage() {
    // Create success overlay
    const overlay = document.createElement('div');
    overlay.className = 'contact-success-overlay';
    overlay.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h2>Message Sent Successfully!</h2>
            <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
            <button onclick="closeSuccessOverlay()">Continue Exploring</button>
        </div>
    `;

    // Add styles
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    // Add CSS for success content
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .success-content {
            background: white;
            padding: 3rem;
            border-radius: 2rem;
            text-align: center;
            max-width: 40rem;
            animation: slideUp 0.3s ease;
        }
        .success-content i {
            font-size: 6rem;
            color: #27ae60;
            margin-bottom: 2rem;
        }
        .success-content h2 {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-size: 2.5rem;
        }
        .success-content p {
            color: #7f8c8d;
            margin-bottom: 2rem;
            font-size: 1.6rem;
            line-height: 1.6;
        }
        .success-content button {
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 3rem;
            font-size: 1.6rem;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        .success-content button:hover {
            transform: translateY(-0.2rem);
        }
        @keyframes slideUp {
            from { transform: translateY(3rem); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(overlay);

    // Add close function to window
    window.closeSuccessOverlay = function() {
        overlay.remove();
        style.remove();
    };
}

/**
 * Handle Contact Form Submission
 * @param {Event} event - Form submit event
 * @returns {boolean} - Always returns false to prevent default submission
 */
function handleContactSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    // Validation
    if (!name || !email || !subject || !message) {
        alertBox('Please fill in all required fields', 'error');
        return false;
    }

    if (!validateEmail(email)) {
        alertBox('Please enter a valid Gmail address', 'error');
        return false;
    }

    // Simulate form submission
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = 'Sending... <i class="uil uil-spinner"></i>';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Show success message
        showContactSuccessMessage();

        // Reset form
        event.target.reset();

        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

    }, 1500);

    return false;
}
// Login/Logout visibility management
document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.querySelector('#loginLink');
    const logoutLink = document.querySelector('#logout');

    if (sessionStorage.name) {
        loginLink.style.display = 'none';
        logoutLink.style.display = 'inline-block';
    } else {
        loginLink.style.display = 'inline-block';
        logoutLink.style.display = 'none';
    }
});