const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved user preference on load
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.textContent = '☀️'; // Switch to sun icon
}

themeToggle.addEventListener('click', () => {
    // Toggle the class
    body.classList.toggle('light-mode');
    
    // Check which mode is active
    let theme = 'dark';
    if (body.classList.contains('light-mode')) {
        theme = 'light';
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
    
    // Save preference to Local Storage
    localStorage.setItem('theme', theme);
});