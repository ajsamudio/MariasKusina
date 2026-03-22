// Sticky Navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Subtle fade-in on scroll for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            // Optional: remove the class if you want the animation to re-run on scroll
            // entry.target.classList.remove('fade-in');
        }
    });
}, { threshold: 0.1 }); // The animation triggers when 10% of the element is visible

document.querySelectorAll('section, .cta-banner, .menu-item').forEach(element => {
    element.classList.add('hidden-fade');
    observer.observe(element);
});

// Hamburger menu functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Deactivate hamburger menu on scroll
window.addEventListener('scroll', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});
