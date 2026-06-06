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
