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
const toggleMobileNavDisplay = function (
  elementAdd,
  addMClass,
  elementRemove,
  removeMClass
) {
  elementAdd.classList.add(addMClass);
  elementRemove.classList.remove(removeMClass);
};

const options = {
  root: null,
  threshold: 0.0,
  rootMargin: "20px 20px 0px 20px",
};
const beTouching = function (elemID) {
  elemID.forEach((entry) => {
    if (entry.isIntersecting) {
      toggleNavDisplay("nav-desktop", "nav-mobile");

      navBurger.classList.remove("nav-expandBurger");
      navList.classList.remove("nav-list-show");

      toggleMobileNavDisplay(
        navBurger,
        "nav-burger-hide",
        navList,
        "nav-list-mobile"
      );
    } else {
      toggleNavDisplay("nav-mobile", "nav-desktop");

      toggleMobileNavDisplay(
        navList,
        "nav-list-mobile",
        navBurger,
        "nav-burger-hide"
      );
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

document.addEventListener("click", function (e) {
  if (navBar.contains(e.target)) {
    return null;
  } else {
    navBurger.classList.remove("nav-expandBurger");
    navList.classList.remove("nav-list-show");
  }
});
