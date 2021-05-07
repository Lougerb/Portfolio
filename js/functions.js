"use strict";
import * as porfolioElem from "./variables.js";

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
      navDisplay(
        porfolioElem.navBar,
        "nav-desktop",
        porfolioElem.navBar,
        "nav-mobile"
      );

      // To hide Navbutger  and Nav List
      navDisplay(
        porfolioElem.navBurger,
        "nav-burger-hide",
        porfolioElem.navList,
        "nav-list-mobile"
      );
      navDisplay(null, null, porfolioElem.navBurger, "nav-expandBurger");
      navDisplay(null, null, porfolioElem.navList, "nav-list-show");
    } else {
      //To show NavBurger
      navDisplay(
        porfolioElem.navBar,
        "nav-mobile",
        porfolioElem.navBar,
        "nav-desktop"
      );

      navDisplay(
        porfolioElem.navList,
        "nav-list-mobile",
        porfolioElem.navBurger,
        "nav-burger-hide"
      );
    }
  });
};

export const toggleShowBurger = () => {
  porfolioElem.navBurger.classList.toggle("nav-expandBurger");
  porfolioElem.navList.classList.toggle("nav-list-show");
};

export const closeBurgerNav = () => {
  porfolioElem.navBurger.classList.remove("nav-expandBurger");
  porfolioElem.navList.classList.remove("nav-list-show");
};

export const closeBurgerOutside = (e) => {
  if (porfolioElem.navBar.contains(e.target)) {
    return null;
  } else {
    closeBurgerNav();
  }
};
