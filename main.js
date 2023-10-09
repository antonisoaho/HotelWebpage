const menuList = document.getElementById("menu");
let storedCross = false;

const visible = "0.85";
const hidden = "0.0";

function turnVisible(listItem) {
  menuList.style.height = "3.125rem";
  menuList.style.opacity = visible;

  return storedCross;
}

function turnHidden(listItem) {
  menuList.style.height = hidden;
  menuList.style.opacity = hidden;

  return storedCross;
}

function burgerExpansion(snus) {
  const menuListStyle = menuList.style.opacity;

  snus.classList.toggle("change");

  if (menuListStyle == visible) {
    turnHidden(menuList);
    storedCross = false;
  } else {
    turnVisible(menuList);
    storedCross = true;
  }
  // console.log(`${storedCross}`);
  return storedCross;
}

function screenWidthChange(mediaQuery, message) {
  if (mediaQuery.matches) {
    if (message == "Min-width" || (message == "Max-width" && storedCross)) {
      turnVisible(menuList);
    } else {
      turnHidden(menuList);
    }
    // console.log(`${storedCross}`);
  }
}

const mediaQueryMin = window.matchMedia("(min-width: 600px)");
const mediaQueryMax = window.matchMedia("(max-width: 599px)");

screenWidthChange(mediaQueryMin, "Min-width");
screenWidthChange(mediaQueryMax, "Max-width");
mediaQueryMin.addListener(() => screenWidthChange(mediaQueryMin, "Min-width"));
mediaQueryMin.addListener(() => screenWidthChange(mediaQueryMax, "Max-width"));
