document.addEventListener('DOMContentLoaded', () => {
    // 1. Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '5%';
            navLinks.style.background = '#1a1a1a';
            navLinks.style.padding = '20px';
            navLinks.style.borderRadius = '10px';
        });
    }

    // 2. Reveal Animation (Failsafe Version)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Jalankan sekali saat start
    setTimeout(revealOnScroll, 100); 

    // 3. Carousel Sertifikat Logic
    const track = document.querySelector('.sertifikat-track');
    const nextBtn = document.querySelector('.sertifikat-btn.next');
    const prevBtn = document.querySelector('.sertifikat-btn.prev');
    let index = 0;

    if (nextBtn && prevBtn && track) {
        const updateSlider = () => {
            const images = document.querySelectorAll('.sertifikat-img');
            if (images.length === 0) return;
            const moveAmount = images[0].offsetWidth + 20; 
            track.style.transform = `translateX(-${index * moveAmount}px)`;
        };

        nextBtn.addEventListener('click', () => {
            const images = document.querySelectorAll('.sertifikat-img');
            index = (index + 1) % images.length;
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            const images = document.querySelectorAll('.sertifikat-img');
            index = (index - 1 + images.length) % images.length;
            updateSlider();
        });

        // Re-calculate kalau layar di resize
        window.addEventListener('resize', updateSlider);
    }
});