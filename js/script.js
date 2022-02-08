///////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");

const currentYear = new Date().getFullYear();
// const currentMonth = new Date().getMonth() + 1;
yearEl.textContent = `${currentYear}`;

///////////////////////////////////
// Make Mobile navigation work

const headerEl = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");

btnNav.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////
// Smooth Scrolling
const allLinksEL = document.querySelectorAll("a:link");

allLinksEL.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      // console.log(href);
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

////////////////////////////////////////////
//Sticky
const sectionHeroEl = document.querySelector(".hero--section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
