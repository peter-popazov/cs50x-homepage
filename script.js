const bntNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

bntNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const currentYearEl = document.querySelector(".year");
const year = new Date().getFullYear();
currentYearEl.innerHTML = year;

const sectionCards = document.querySelector(".obeserver-target");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    console.log(entries);
  },
  {
    root: null,
    threshold: 1,
  }
);
obs.observe(sectionCards);
