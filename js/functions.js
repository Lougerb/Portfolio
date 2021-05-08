"use strict";
import * as portfolioElem from "./variables.js";

//Function to toggle add and remove some certain class from a certain elements
export const navDisplay = (
  elementAdd,
  addMClass,
  elementRemove,
  removeMClass
) => {
  if (elementAdd == null && addMClass == null) {
    elementRemove.classList.remove(removeMClass);
  } else if (elementRemove == null && removeMClass == null) {
    elementAdd.classList.add(addMClass);
  } else {
    elementAdd.classList.add(addMClass);
    elementRemove.classList.remove(removeMClass);
  }
};

export const beTouching = function (elemID) {
  elemID.forEach((entry) => {
    if (entry.isIntersecting) {
      // To show Main Nav
      navDisplay(
        portfolioElem.navBar,
        "nav-desktop",
        portfolioElem.navBar,
        "nav-mobile"
      );

      // To hide Navbutger  and Nav List
      navDisplay(
        portfolioElem.navBurger,
        "nav-burger-hide",
        portfolioElem.navList,
        "nav-list-mobile"
      );
      navDisplay(null, null, portfolioElem.navBurger, "nav-expandBurger");
      navDisplay(null, null, portfolioElem.navList, "nav-list-show");
      // To hide Go to Top button
      navDisplay(portfolioElem.goToTop, "nav-burger-hide", null, null);
    } else {
      //To show NavBurger
      navDisplay(
        portfolioElem.navBar,
        "nav-mobile",
        portfolioElem.navBar,
        "nav-desktop"
      );
      // To show Go to top Button

      navDisplay(null, null, portfolioElem.goToTop, "nav-burger-hide");

      navDisplay(
        portfolioElem.navList,
        "nav-list-mobile",
        portfolioElem.navBurger,
        "nav-burger-hide"
      );
    }
  });
};

export const toggleShowFloatNav = () => {
  portfolioElem.navBurger.classList.toggle("nav-expandBurger");
  portfolioElem.navList.classList.toggle("nav-list-show");
  portfolioElem.goToTop.classList.toggle("nav-burger-hide");
};

export const closeBurgerNavList = () => {
  portfolioElem.navBurger.classList.remove("nav-expandBurger");
  portfolioElem.navList.classList.remove("nav-list-show");
  portfolioElem.goToTop.classList.remove("nav-burger-hide");
};

export const closeBurgerOutside = (e) => {
  if (portfolioElem.navBar.contains(e.target)) {
    return null;
  } else {
    closeBurgerNavList();

    portfolioElem.navList.classList.contains("nav-list-show")
      ? portfolioElem.goToTop.classList.add("nav-burger-hide")
      : null;
  }
};

export const reloadPage = () => {
  document.location.hash = "";
};
