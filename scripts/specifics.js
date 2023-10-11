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

    let price = dayDiff * selectedDataPrice + dayDiff * 199;
    totalPrice.innerHTML = price;
  }
}

function setArticlePackageHeight(selectedFigure) {
  const packageDeals = document.querySelector(".section__article-packagedeals");

  if (!selectedFigure) {
    packageDeals.style.height = "auto";
    return;
  }

  const selectedFigureHeight = selectedFigure.clientHeight;
  const extraHeight = 64;

  packageDeals.style.height = `${selectedFigureHeight + extraHeight}px`;
}

const fromDateInput = document.getElementById("fromdate");
const toDateInput = document.getElementById("todate");
const dropdownList = document.getElementById("dropdownList");
const packageFigures = document.querySelectorAll(
  ".section__article-packagedeals figure"
);

fromDateInput.addEventListener("change", () => {
  fromDate = new Date(fromDateInput.value);
  calculatePrice();
});

toDateInput.addEventListener("change", () => {
  toDate = new Date(toDateInput.value);
  calculatePrice();
});

dropdownList.addEventListener("change", function () {
  const selectedOption = this.value;

  packageFigures.forEach((figure) => {
    figure.style.opacity = "0";
  });

  const selectedFigure = document.querySelector(
    `.section__figure-package.${selectedOption}`
  );
  if (selectedFigure) {
    selectedFigure.style.opacity = ".8";
    selectedDataPrice = parseFloat(selectedFigure.getAttribute("data-price"));
    calculatePrice();
    setArticlePackageHeight(selectedFigure);
  } else {
    setArticlePackageHeight(null);
  }
});

window.addEventListener("resize", () => {
  const selectedOption = dropdownList.value;
  const selectedFigure = document.querySelector(
    `.section__figure-package.${selectedOption}`
  );
  setArticlePackageHeight(selectedFigure);
});
