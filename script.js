const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#navLinks');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menutup menu otomatis saat link diklik (di HP)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});