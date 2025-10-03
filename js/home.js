/**
 * Home Page Script
 * Handles authentication check and user greeting
 */

const greeting = document.querySelector('.greeting');
const logoutBtn = document.querySelector('.logout');

/**
 * Initialize Home Page
 * Checks authentication and displays user greeting
 */
window.onload = () => {
    if (!sessionStorage.name) {
        // Redirect to login if not authenticated
        location.href = 'login.html';
    } else if (greeting) {
        // Display personalized greeting
        greeting.innerHTML = `Hello ${sessionStorage.name}`;
    }
};

/**
 * Logout Button Event Handler
 */
if (logoutBtn) {
    logoutBtn.onclick = () => {
        try {
            sessionStorage.clear();
            location.reload();
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };
}