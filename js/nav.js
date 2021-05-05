"use strict";
const navBar = document.getElementById("nav-opt");
const headerSec = document.getElementById("header-portfolio"),
  skillSec = document.getElementById("section-skills"),
  projectSec = document.getElementById("section-project"),
  aboutSec = document.getElementById("section-about"),
  contactSec = document.getElementById("section-contact");
const secArray = [skillSec, projectSec, aboutSec, contactSec];

const options = {
  root: null,
  threshold: 0.8,
  rootMargin: "0px",
};
const beTouching = function (elemID) {
  elemID.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("This is header");
      navBar.classList.remove("mobileNav");
    } else {
      navBar.classList.add("mobileNav");
      console.log("This is not header");
    }
  });
};

const observeNav = new IntersectionObserver(beTouching, options);

// secArray.forEach((arrEntries) => {
//   observeNav.observe(arrEntries);
// });
observeNav.observe(headerSec);
