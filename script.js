// 1. Custom AutoCAD Cursor Logic
const cursor = document.querySelector('.cursor-crosshair');
const cursorLabel = document.querySelector('.cursor-label');

// Only run cursor logic if the element exists and is visible (not on mobile)
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        // Move the cursor div to mouse position
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Update the coordinates text (X: 100 Y: 200)
        cursorLabel.textContent = `X:${Math.round(e.clientX)} Y:${Math.round(e.clientY)}`;
    });
}

// 2. Mobile Menu Logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
    });
});

// 3. Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// 4. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});