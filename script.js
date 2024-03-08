const bntNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

bntNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const currentYearEl = document.querySelector(".year");
const year = new Date().getFullYear();
currentYearEl.innerHTML = year;