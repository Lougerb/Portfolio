"use strict";
import * as porfolioElem from "./variables.js";
import * as navFunc from "./functions.js";

const options = {
  root: null,
  threshold: 0.0,
  rootMargin: "20px 20px 0px 20px",
};

const observeNav = new IntersectionObserver(navFunc.beTouching, options);

observeNav.observe(porfolioElem.headerPolygon);

//When Borgar click, it will show the whole veggies
porfolioElem.navBurger.addEventListener("click", navFunc.toggleShowFloatNav);
// When user pick an option from the borgar, nav will close
porfolioElem.navList.addEventListener("click", navFunc.closeBurgerNavList);
// When user click outside the borgar, Nav will close
document.addEventListener("click", navFunc.closeBurgerOutside);

window.onload = navFunc.reloadPage;
