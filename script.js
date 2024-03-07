const bntNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

console.log(bntNav);

bntNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
