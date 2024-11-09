import "../css/style.css";
import "../css/variables.css";
import { products } from "./products.js";
import { DOMSelectors } from "./dom.js";

function createProducts(category) {
  products
    .filter((product) => product.category.includes(category))
    .forEach((product) => {
      const cardHTML = `<div class="card">
      <h2 class="card-header">${product.name}</h2>
      <img class="card-image" src="${product.image}" alt="${product.alt}"/>
      <h3 class="card-price">Price: ${product.price}</h3>
    </div>`;
      DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);
    });
}
createProducts(""); // Will accept anything if the parameter is ""

// Functions for buttons
function changeTheme() {
  // Should change light mode to dark mode, and dark mode to light mode with the click of a button
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
}

// Functions to filter menu items (Use sort, includes, or sum)
function filterBurgers() {
  DOMSelectors.container.innerHTML = "";
  createProducts("burger");
}

function filterSalads() {
  DOMSelectors.container.innerHTML = "";
  createProducts("salad");
}

function filterSides() {
  DOMSelectors.container.innerHTML = "";
  createProducts("side");
}

function filterDrinks() {
  DOMSelectors.container.innerHTML = "";
  createProducts("drink");
}

function resetFilters() {
  DOMSelectors.container.innerHTML = "";
  createProducts("");
}

// Event listeners for functions
DOMSelectors.themeButton.addEventListener("click", function () {
  changeTheme();
});

DOMSelectors.burgerButton.addEventListener("click", function () {
  filterBurgers();
});

DOMSelectors.saladButton.addEventListener("click", function () {
  filterSalads();
});

DOMSelectors.sideButton.addEventListener("click", function () {
  filterSides();
});

DOMSelectors.drinkButton.addEventListener("click", function () {
  filterDrinks();
});

DOMSelectors.filterResetButton.addEventListener("click", function () {
  resetFilters();
});
