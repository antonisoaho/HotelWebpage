const menuList = document.getElementById("menu");
let storedCross = false;

const visible = "0.85";
const hidden = "0.0";

function turnVisible(listItem) {
  if (window.innerWidth < "475") {
    menuList.style.height = "10rem";
    menuList.style.opacity = "1";
    console.log(`dope`);
  } else {
    menuList.style.height = "3.125rem";
    menuList.style.opacity = visible;
  }

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

  if (menuListStyle == visible || menuListStyle == "1") {
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

// EventListeners for AI-companion

const slider = document.getElementById("priceSlider");
const maxPriceDisplay = document.getElementById("sliderValue");
const roomCards = document.querySelectorAll(".section__figure.room");
const specialCheckbox = document.getElementById("specialCheckbox");
const items = document.querySelectorAll(".room");

function updateItemVisibility() {
  const maxPrice = parseInt(slider.value);
  const showSpecial = specialCheckbox.checked;

  roomCards.forEach((card) => {
    const cardPrice = parseInt(card.getAttribute("data-price"));
    const meetsPrice = cardPrice <= maxPrice;
    const meetsSpecial = showSpecial
      ? card.classList.contains("special")
      : true;
    card.style.display = meetsPrice && meetsSpecial ? "inline-block" : "none";
  });
}

updateItemVisibility();

slider.addEventListener("input", () => {
  maxPriceDisplay.innerHTML = slider.value;
  updateItemVisibility();
});

specialCheckbox.addEventListener("change", () => {
  updateItemVisibility();
});
