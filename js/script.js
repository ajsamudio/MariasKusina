document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Card hover effect (already handled by Tailwind, but a good place for more complex JS)
    const cards = document.querySelectorAll('.transform');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.03)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Menu Modal functionality
    const seeMenuButton = document.getElementById('see-menu-button');
    const viewMenuButton = document.getElementById('view-menu-button');
    const menuModal = document.getElementById('menu-modal');
    const closeMenuModal = document.getElementById('close-menu-modal');

    if (menuModal && closeMenuModal) {
        if (seeMenuButton) {
            seeMenuButton.addEventListener('click', () => {
                menuModal.classList.remove('hidden');
            });
        }

        if (viewMenuButton) {
            viewMenuButton.addEventListener('click', () => {
                menuModal.classList.remove('hidden');
            });
        }

        closeMenuModal.addEventListener('click', () => {
            menuModal.classList.add('hidden');
        });

        menuModal.addEventListener('click', (e) => {
            if (e.target === menuModal) {
                menuModal.classList.add('hidden');
            }
        });
    }
});
