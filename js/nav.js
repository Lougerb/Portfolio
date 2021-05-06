"use strict";
const navBar = document.getElementById("nav-opt"),
  navBurger = document.getElementById("nav-hamburger"),
  navList = document.getElementById("nav-list"),
  headerPolygon = document.getElementById("header-polygon");
const headerSec = document.getElementById("header-portfolio"),
  skillSec = document.getElementById("section-skills"),
  projectSec = document.getElementById("section-project"),
  aboutSec = document.getElementById("section-about"),
  contactSec = document.getElementById("section-contact");
const secArray = [skillSec, projectSec, aboutSec, contactSec];

const toggleNavDisplay = function (addClass, removeClass) {
  navBar.classList.remove(`${removeClass}`);
  navBar.classList.add(`${addClass}`);
};
const options = {
  root: null,
  threshold: 0.0,
  rootMargin: "20px 20px 0px 20px",
};
const beTouching = function (elemID) {
  elemID.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("This is header");
      toggleNavDisplay("nav-desktop", "nav-mobile");

      navBurger.classList.remove("nav-expandBurger");
      navList.classList.remove("nav-list-show");

      navList.classList.remove("nav-list-mobile");
      navBurger.classList.add("nav-burger-hide");
    } else {
      toggleNavDisplay("nav-mobile", "nav-desktop");

      navList.classList.add("nav-list-mobile");
      navBurger.classList.remove("nav-burger-hide");
      console.log("This is not header");
    }
  });
};

const observeNav = new IntersectionObserver(beTouching, options);

observeNav.observe(headerPolygon);

//Nav burger click
navBurger.addEventListener("click", function () {
  navBurger.classList.toggle("nav-expandBurger");
  navList.classList.toggle("nav-list-show");
});

navList.addEventListener("click", function () {
  navBurger.classList.remove("nav-expandBurger");
  navList.classList.remove("nav-list-show");
});
