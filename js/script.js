// ═══════════════════════════════════════════════════════
// MARIA'S KUSINA — Interactive Enhancements
// ═══════════════════════════════════════════════════════

// ── Sticky Navbar with smooth transition ──
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const navHeight = navbar.offsetHeight;
            const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
    });
});

// ── Intersection Observer for fade-in animations ──
const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe sections, cards, menu items, and CTA banners
document.querySelectorAll(
    'section, .cta-banner, .menu-item, .card, .contact-info-block, .story-grid, .family-feast-banner'
).forEach(element => {
    element.classList.add('hidden-fade');
    observer.observe(element);
});

// ── Hamburger menu with animation ──
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close mobile menu on scroll
window.addEventListener('scroll', () => {
    if (navLinks.classList.contains('active')) {
        hamburgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ── Active nav link highlight based on scroll position ──
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function highlightNav() {
    const scrollY = window.pageYOffset + navbar.offsetHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.style.opacity = '0.7';
                if (item.getAttribute('href') === '#' + sectionId) {
                    item.style.opacity = '1';
                    item.style.color = '';
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ── Infinite testimonial scroll — duplicate cards for seamless loop ──
const track = document.querySelector('.testimonials-track');
if (track) {
    const cards = track.innerHTML;
    track.innerHTML += cards;
}

// ── Parallax-like effect for hero on scroll ──
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
        const offset = window.scrollY * 0.3;
        heroContent.style.transform = `translateY(${offset}px)`;
        heroContent.style.opacity = 1 - (window.scrollY / window.innerHeight) * 0.8;
    }
});
