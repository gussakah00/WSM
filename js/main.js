window.alert("Selamat Datang");

// JS SLIDER
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  if (i < 0) {
    index = images.length - 1;
  } else if (i >= images.length) {
    index = 0;
  } else {
    index = i;
  }

  slides.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  showSlide(index - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(index + 1);
});

// Auto slide tiap 5 detik
setInterval(() => {
  showSlide(index + 1);
}, 5000);
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-list");
const closeBtn = document.querySelector(".close-menu");

if (hamburger && navMenu && closeBtn) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.add("open");
    hamburger.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburger.classList.remove("open");
  });
}
