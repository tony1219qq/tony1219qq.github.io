
// Theme switcher logic
(() => {
    'use strict'

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
            return storedTheme
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = theme => {
        document.documentElement.setAttribute('data-bs-theme', theme)
    }

    setTheme(getPreferredTheme())

    window.addEventListener('DOMContentLoaded', () => {
        const themeSwitcher = document.querySelector('#theme-switcher');
        if (themeSwitcher) {
            themeSwitcher.addEventListener('click', () => {
                const currentTheme = getStoredTheme() || getPreferredTheme();
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                setStoredTheme(newTheme)
                setTheme(newTheme)
            })
        }
    })
})()

// Add scrolled class to navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
});
