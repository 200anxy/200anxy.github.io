document.addEventListener('DOMContentLoaded', () => {

    // --- LOGO SCROLLER SCRIPT ---
    const scroller = document.querySelector('.logos-slide');
    if (scroller) {
        // Clone the logos to create a seamless loop
        const logos = Array.from(scroller.children);
        logos.forEach(logo => {
            const duplicateLogo = logo.cloneNode(true);
            duplicateLogo.setAttribute('aria-hidden', true);
            scroller.appendChild(duplicateLogo);
        });
    }

    // --- SCROLL ANIMATION SCRIPT ---
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is intersecting the viewport, add the 'is-visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    scrollElements.forEach(element => {
        observer.observe(element);
    });
});