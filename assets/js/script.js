////////////// smooth scroll//////////////////
const headerLinks = ".navbar-nav";
const brand = ".brand-container";

function smoothScroll(el) {
  document.querySelector(el).addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
}

smoothScroll(brand);
smoothScroll(headerLinks);

//////////////////// mobile navbar toggler //////////////////
const hamburger = document.querySelector(".navbar-toggler");
const navBarCollapse = document.querySelector(".navbar-collapse");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const portfolio = document.querySelector("#portfolio");
const contact = document.querySelector("#contact");
const homeLink = document.getElementById("nav-home");
const aboutLink = document.getElementById("nav-about");
const portfolioLink = document.getElementById("nav-portfolio");
const contactLink = document.getElementById("nav-contact");
const navRefs = [home, about, portfolio, contact];
const navLinks = [
  homeLink,
  aboutLink,
  portfolioLink,
  contactLink,
];

let collapsed = true;
let extraOffSet = 0;

const extraOffSetter = function () {
  if (collapsed) {
    extraOffSet = 0;
  } else {
    extraOffSet = 270;
  }
};

function toggleCollapse() {
  collapsed = !collapsed;
  extraOffSetter();
  setTimeout(() => {
    navBarCollapse.classList.toggle("show");
  }, 150);
}

hamburger.addEventListener("click", toggleCollapse);

window.addEventListener("scroll", function () {
  let scroll = window.scrollY + extraOffSet;

  const removeActive = function () {
    navLinks.forEach((el) => {
      el.classList.remove("active-link");
    });
  };

  if (scroll >= home.offsetTop && scroll < about.offsetTop) {
    removeActive();
    homeLink.classList.add("active-link");
  }else if(scroll >= about.offsetTop && scroll <= portfolio.offsetTop){
    removeActive();
    aboutLink.classList.add("active-link"); 
  }else if (scroll >= portfolio.offsetTop && scroll <= contact.offsetTop) {
    removeActive();
    portfolioLink.classList.add("active-link");
  } else if (scroll >= contact.offsetTop) {
    removeActive();
    contactLink.classList.add("active-link");
  }
});

homeLink.addEventListener("click", toggleCollapse);
//////////////////// Change header based on scroll position //////////////////
let sectionTwo = document.querySelector("#header-carousel");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (scroll > sectionTwo.offsetTop) {
    navbar.classList.add("bg-light");
  } else {
    navbar.classList.remove("bg-light");
  }
});
