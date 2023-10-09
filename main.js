function burgerExpansion(snus) {
  const menuList = document.getElementById("menu");
  const menuListStyle = menuList.style.display;

  snus.classList.toggle("change");

  if (menuListStyle == "flex") {
    menuList.style.display = "none";
    let storedCross = false;
  } else {
    menuList.style.display = "flex";
    let storedCross = true;
  }
}

function screenWidthChange(mediaQuery) {
  if (mediaQuery.matches || storedCross) {
    menuList.style.display = "flex";
  }
}

let storedCross = true;

const menuList = document.getElementById("menu");
const menuListStyle = menuList.style.display;

const mediaQueryMin = window.matchMedia("(min-width: 520px)");
const mediaQueryMax = window.matchMedia("(max-width: 519px)");

screenWidthChange(mediaQueryMin);
mediaQueryMin.addListener(screenWidthChange);
screenWidthChange(mediaQueryMax);
mediaQueryMax.addListener(screenWidthChange);
