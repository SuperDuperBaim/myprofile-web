// ambil elemen hamburger dan nav menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// saat hamburger di klik
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// auto close menu saat link diklik
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        // Cek dulu apakah menu aktif (untuk mobile)
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});

/// ===== Carousel Sertifikat =====
const track = document.querySelector('.sertifikat-track');
const images = document.querySelectorAll('.sertifikat-img');
const prevBtn = document.querySelector('.sertifikat-btn.prev');
const nextBtn = document.querySelector('.sertifikat-btn.next');

let posisi = 0;
const gambarWidth = 250 + 20; // width gambar + gap

nextBtn.addEventListener('click', () => {
    // Hitung berapa gambar yang bisa ditampilkan
    const containerWidth = document.querySelector('.sertifikat-wrapper').offsetWidth;
    const totalWidth = images.length * gambarWidth;
    
    // Jika masih ada gambar di kanan, geser ke kanan
    if (Math.abs(posisi) < totalWidth - containerWidth) {
        posisi -= gambarWidth;
        track.style.transform = `translateX(${posisi}px)`;
    } else {
        // Jika sudah di ujung, balik ke awal
        posisi = 0;
        track.style.transform = `translateX(0px)`;
    }
});

prevBtn.addEventListener('click', () => {
    // Jika masih ada gambar di kiri, geser ke kiri
    if (posisi < 0) {
        posisi += gambarWidth;
        track.style.transform = `translateX(${posisi}px)`;
    } else {
        // Jika sudah di awal, ke ujung
        const containerWidth = document.querySelector('.sertifikat-wrapper').offsetWidth;
        const totalWidth = images.length * gambarWidth;
        posisi = -(totalWidth - containerWidth);
        track.style.transform = `translateX(${posisi}px)`;
    }
});