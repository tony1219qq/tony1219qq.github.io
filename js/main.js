(() => {
    "use strict";

    const getStoredTheme = () => localStorage.getItem("theme");
    const setStoredTheme = theme => localStorage.setItem("theme", theme);

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();
        if (storedTheme) return storedTheme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const setTheme = theme => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    };

    const navbar = document.querySelector(".navbar");

    const onScroll = () => {
        if (!navbar) return;
        navbar.classList.toggle("scrolled", window.scrollY > 32);
    };

    const initReveal = () => {
        const elements = document.querySelectorAll(".reveal");
        if (!elements.length) return;

        if (!("IntersectionObserver" in window)) {
            elements.forEach(el => el.classList.add("in"));
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        elements.forEach((el, idx) => {
            el.style.transitionDelay = `${Math.min(idx * 70, 280)}ms`;
            observer.observe(el);
        });
    };

    setTheme(getPreferredTheme());

    window.addEventListener("DOMContentLoaded", () => {
        const themeSwitcher = document.querySelector("#theme-switcher");
        if (themeSwitcher) {
            themeSwitcher.addEventListener("click", () => {
                const currentTheme = getStoredTheme() || getPreferredTheme();
                const newTheme = currentTheme === "dark" ? "light" : "dark";
                setStoredTheme(newTheme);
                setTheme(newTheme);
            });
        }

        onScroll();
        initReveal();
    });

    window.addEventListener("scroll", onScroll, { passive: true });
})();
