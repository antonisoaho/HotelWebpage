const menuList = document.getElementById("menu");
let storedCross = false;

const visible = "0.85";
const hidden = "0.0";

function turnVisible(listItem) {
  if (window.innerWidth < "475") {
    menuList.style.height = "10rem";
    console.log(`dope`);
  } else {
    menuList.style.height = "3.125rem";
  }

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
  console.log(`${storedCross}` + window.innerWidth);
  return storedCross;
}

function screenWidthChange(mediaQuery, message) {
  if (mediaQuery.matches) {
    if (
      message == "Min-width" ||
      ((message == "Max-width" || message == "Ltl-width") && storedCross)
    ) {
      turnVisible(menuList);
    } else {
      turnHidden(menuList);
    }
    console.log(`${message}`);
  }
}

const mediaQueryMin = window.matchMedia("(min-width: 600px)");
const mediaQueryMax = window.matchMedia("(max-width: 599px)");
const mediaQueryLtl = window.matchMedia("(max-width: 475px)");

screenWidthChange(mediaQueryMin, "Min-width");
screenWidthChange(mediaQueryMax, "Max-width");
screenWidthChange(mediaQueryLtl, "Ltl-width");
mediaQueryMin.addListener(() => screenWidthChange(mediaQueryMin, "Min-width"));
mediaQueryMax.addListener(() => screenWidthChange(mediaQueryMax, "Max-width"));
mediaQueryLtl.addListener(() => screenWidthChange(mediaQueryLtl, "Ltl-width"));
