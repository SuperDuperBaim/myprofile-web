// Carousel Sertifikat
const track = document.querySelector('.sertifikat-track');
const nextBtn = document.querySelector('.sertifikat-btn.next');
const prevBtn = document.querySelector('.sertifikat-btn.prev');

let index = 0;

function updateSlider() {
    const images = document.querySelectorAll('.sertifikat-img');
    if (images.length === 0) return;
    
    // 320 adalah min-width gambar, 20 adalah gap di CSS
    const moveAmount = 320 + 20; 
    track.style.transform = `translateX(-${index * moveAmount}px)`;
}

nextBtn.addEventListener('click', () => {
    const images = document.querySelectorAll('.sertifikat-img');
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    const images = document.querySelectorAll('.sertifikat-img');
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1;
    }
    updateSlider();
});