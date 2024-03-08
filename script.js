const bntNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

bntNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const currentYearEl = document.querySelector(".year");
const year = new Date().getFullYear();
currentYearEl.innerHTML = year;

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "25px",
  }
);
obs.observe(header);
