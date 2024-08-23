// script.js

// Function to load content into the iframe
function loadContent(page) {
    document.getElementById('content-iframe').src = page;
}

// Toggle the main dropdown menu
function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.parentElement;
    dropdown.classList.toggle('active');
}

// Toggle the subdropdown menu
function toggleDropdownsub(event) {
    event.preventDefault();
    const dropdownsub = event.target.parentElement;
    dropdownsub.classList.toggle('active');
}

// Event listener for the menu toggle button
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.side-nav').classList.toggle('active');
});
