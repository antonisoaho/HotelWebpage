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
    const meetsSpecial = !showSpecial || card.classList.contains("special");
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
