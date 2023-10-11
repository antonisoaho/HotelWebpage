// EventListeners for AI-companion

const slider = document.getElementById("priceSlider");
const maxPriceDisplay = document.getElementById("sliderValue");
const roomCards = document.querySelectorAll(".section__figure--room");
const specialCheckbox = document.getElementById("specialCheckbox");

function updateItemVisibility() {
  const maxPrice = parseInt(slider.value);
  const showSpecial = specialCheckbox.checked;

  roomCards.forEach((card) => {
    const cardPrice = parseInt(card.getAttribute("data-price"));
    const meetsPrice = cardPrice <= maxPrice;
    const meetsSpecial =
      !showSpecial || card.classList.contains("room--special");
    if (meetsPrice && meetsSpecial) {
      card.style.opacity = "1";
      card.style.order = "";
      card.style.pointerEvents = "";
    } else {
      card.style.opacity = "0";
      card.style.order = "100";
      card.style.pointerEvents = "none";
    }
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
