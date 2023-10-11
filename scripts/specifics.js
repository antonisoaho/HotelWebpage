const checkbox = document.getElementById("galleryCheckbox");
const pictures = document.querySelectorAll(".section__footer--picture");

checkbox.addEventListener("change", () => {
  pictures.forEach((picture) => {
    picture.style.opacity = checkbox.checked ? "0" : "1";
  });
});

let fromDate, toDate;
let selectedDataPrice = 0;

function calculatePrice() {
  const days = document.getElementById("totaldays");
  const totalPrice = document.getElementById("totalamount");

  if (fromDate && toDate) {
    const diffMilliSec = toDate - fromDate;
    const dayDiff = diffMilliSec / (1000 * 3600 * 24);
    days.innerHTML = dayDiff;

    let price = dayDiff * selectedDataPrice;
    totalPrice.innerHTML = price;
  }
}

const fromDateInput = document.getElementById("fromdate");
const toDateInput = document.getElementById("todate");

fromDateInput.addEventListener("change", () => {
  fromDate = new Date(fromDateInput.value);
  calculatePrice();
});

toDateInput.addEventListener("change", () => {
  toDate = new Date(toDateInput.value);
  calculatePrice();
});

const dropdownList = document.getElementById("dropdownList");
const packageFigures = document.querySelectorAll(
  ".section__article-packagedeals figure"
);

dropdownList.addEventListener("change", function () {
  const selectedOption = this.value;

  packageFigures.forEach((figure) => {
    figure.style.display = "none";
  });

  const selectedFigure = document.querySelector(
    `.section__figure-package.${selectedOption}`
  );
  if (selectedFigure) {
    selectedFigure.style.display = "flex";

    selectedDataPrice = parseFloat(selectedFigure.getAttribute("data-price")); // Update selectedDataPrice
    calculatePrice();
  }
});
