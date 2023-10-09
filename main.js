const menuList = document.getElementById("menu");
const menuListStyle = menuList.style.display;
let storedCross = true;

function burgerExpansion(snus) {
  const menuListStyle = menuList.style.opacity;

  snus.classList.toggle("change");

  if (menuListStyle == "0.75") {
    menuList.style.height = "0";
    menuList.style.opacity = "0";
    storedCross = false;
  } else {
    menuList.style.height = "3.125rem";
    menuList.style.opacity = "0.75";
    storedCross = true;
  }

  return storedCross;
}

function screenWidthChange(mediaQuery, message) {
  if (mediaQuery.matches) {
    if (message == "Min-width" || (message == "Max-width" && storedCross)) {
      menuList.style.height = "3.125rem";
      menuList.style.opacity = "0.75";
    } else {
      menuList.style.height = "0";
      menuList.style.opacity = "0";
    }
  }
}

const mediaQueryMin = window.matchMedia("(min-width: 600px)");
const mediaQueryMax = window.matchMedia("(max-width: 599px)");

screenWidthChange(mediaQueryMin, "Min-width");
screenWidthChange(mediaQueryMax, "Max-width");
mediaQueryMin.addListener(() => screenWidthChange(mediaQueryMin, "Min-width"));
mediaQueryMin.addListener(() => screenWidthChange(mediaQueryMax, "Max-width"));
