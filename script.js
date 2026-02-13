// 1. Reveal Animation on Scroll
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    reveals.forEach(window_section => {
        const windowHeight = window.innerHeight;
        const revealTop = window_section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            window_section.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Jalankan sekali saat load

// 2. Carousel Sertifikat
const track = document.querySelector('.sertifikat-track');
const nextBtn = document.querySelector('.sertifikat-btn.next');
const prevBtn = document.querySelector('.sertifikat-btn.prev');

let index = 0;

nextBtn.addEventListener('click', () => {
    const images = document.querySelectorAll('.sertifikat-img');
    const moveAmount = images[0].clientWidth + 20;
    index = (index + 1) % images.length;
    track.style.transform = `translateX(-${index * moveAmount}px)`;
});

prevBtn.addEventListener('click', () => {
    const images = document.querySelectorAll('.sertifikat-img');
    const moveAmount = images[0].clientWidth + 20;
    index = (index - 1 + images.length) % images.length;
    track.style.transform = `translateX(-${index * moveAmount}px)`;
});

// 3. Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.right = '8%';
    navLinks.style.background = '#0f0f0f';
    navLinks.style.padding = '20px';
});