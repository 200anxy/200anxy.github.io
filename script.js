document.addEventListener('DOMContentLoaded', (event) => {

    // --- LOGO SCROLLER SCRIPT ---
    const scroller = document.querySelector('.logos-slide');
    if (scroller) {
        // Clone the logos and append them to make the loop seamless
        const logos = Array.from(scroller.children);
        logos.forEach(logo => {
            const duplicateLogo = logo.cloneNode(true);
            duplicateLogo.setAttribute('aria-hidden', true); // Hide from screen readers
            scroller.appendChild(duplicateLogo);
        });
    }

    // --- SCROLL FADE-IN SCRIPT ---
    const fadeElems = document.querySelectorAll('.scroll-fade');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElems.forEach(elem => {
        observer.observe(elem);
    });
});
