/**
 * Form Loading Animation
 * Creates staggered fade-in effect for form elements
 */
const form = document.querySelector('.form');
if (form) {
    const formChildren = [...form.children];
    formChildren.forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = 1;
        }, i * 100);
    });
}

/**
 * Redirect Authenticated Users
 * Redirects users who are already logged in away from auth pages
 */
window.onload = () => {
    if (sessionStorage.name) {
        location.href = 'index.html';
    }
};

/**
 * Google Credential Response Handler
 * Handles successful Google Sign-In authentication
 */
function handleCredentialResponse(response) {
    try {
        // Decode the JWT token to get user information
        const credential = response.credential;
        const decodedToken = JSON.parse(atob(credential.split('.')[1]));

        // Extract user information
        const userName = decodedToken.name;
        const userEmail = decodedToken.email;
        const userPicture = decodedToken.picture;

        // Store user info in sessionStorage
        sessionStorage.name = userName;
        sessionStorage.email = userEmail;
        sessionStorage.picture = userPicture;
        sessionStorage.authMethod = 'google';

        // Show success message and redirect
        alertBox('Login successful! Redirecting...', 'success');
        setTimeout(() => {
            // Check if we're on the booking page
            if (window.location.pathname.includes('booking.html')) {
                // Call showBookingForm function if it exists (defined in booking.html)
                if (typeof showBookingForm === 'function') {
                    showBookingForm();
                }
            } else {
                location.href = 'index.html';
            }
        }, 1000);

    } catch (error) {
        console.error('Error handling Google credential:', error);
        alertBox('Google login failed. Please try again.', 'error');
    }
}

// Form validation and authentication
const nameField = document.querySelector('.name') || null;
const emailField = document.querySelector('.email');
const passwordField = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates password strength
 * @param {string} password - Password to validate
 * @returns {boolean} - True if password is strong enough
 */
function validatePassword(password) {
    return password && password.length >= 6;
}

// --- Register Page Logic ---
if (nameField) {
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            // Enhanced validation for registration
            if (!nameField || !nameField.value.trim()) {
                alertBox('Please enter your name');
                return;
            }

            if (!emailField || !emailField.value.trim()) {
                alertBox('Please enter your email address');
                return;
            }

            if (!validateEmail(emailField.value.trim())) {
                alertBox('Please enter a valid email address');
                return;
            }

            if (!passwordField || !passwordField.value) {
                alertBox('Please enter a password');
                return;
            }

            if (!validatePassword(passwordField.value)) {
                alertBox('Password must be at least 6 characters long');
                return;
            }

            // Simulate registration process
            submitBtn.textContent = 'Registering...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alertBox('Registration successful! Redirecting to login...');
                setTimeout(() => {
                    location.href = 'login.html';
                }, 1000);
            }, 500);
        });
    }
// --- Login Page Logic ---
} else {
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            // Enhanced validation for login
            if (!emailField || !emailField.value.trim()) {
                alertBox('Please enter your email address');
                return;
            }

            if (!validateEmail(emailField.value.trim())) {
                alertBox('Please enter a valid email address');
                return;
            }

            if (!passwordField || !passwordField.value) {
                alertBox('Please enter your password');
                return;
            }

            // Simulate login process
            submitBtn.textContent = 'Logging in...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Store user info in sessionStorage for demo
                sessionStorage.name = emailField.value.trim().split('@')[0];
                sessionStorage.email = emailField.value.trim();
                alertBox('Login successful! Redirecting...');
                setTimeout(() => {
                    location.href = 'index.html';
                }, 1000);
            }, 500);
        });
    }
}

/**
 * Display Alert Messages
 * Shows notification messages to users
 * @param {string} message - Message to display
 * @param {string} type - Type of alert (success, error, info)
 */
const alertBox = (message, type = 'info') => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');

    if (alertContainer && alertMsg) {
        // Clear previous content and add type class
        alertMsg.innerHTML = '';
        alertMsg.textContent = message;
        alertMsg.className = `alert ${type}`;

        // Show alert
        alertContainer.style.top = '5%';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            alertContainer.style.top = null;
        }, 5000);
    } else {
        // Fallback to browser alert if custom alert not available
        alert(message);
    }
};