// Function to toggle the navigation menu
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    var menuIcon = document.querySelector('.menu-icon i');
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

// Event listeners for the carousel controls
document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);

// Initialize the carousel
showSlide(currentSlide);
