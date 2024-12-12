document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const navMenu = document.querySelector('.nav-menu');
    const navContent = document.querySelector('.nav-content');
    
    navContent.appendChild(navToggle);
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});