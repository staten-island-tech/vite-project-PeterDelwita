import "../css/style.css";
import "../css/variables.css";
import { products } from "./products.js";
import { DOMSelectors } from "./dom.js";

function createProducts() {
  products.forEach((product) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-header">${product.name}</h2>
        <img class="card-image" src="${product.image}" alt="${product.alt}"/>
        <h3 class="card-price">Price: ${product.price}</h3>
      </div>
  `
    )
  );
}
createProducts();

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

function filterBurgers() {
  // This function should filter all burgers and make sure they are the only cards on the screen when you click the button
  products
    .filter((product) => product.category !== "burger") // No doubts about this line
    // Supposed to keep each burger card on the screen while the non-burgers are removed.
    .forEach((product) => product.remove()); // Supposed to remove non-burgers;
}

DOMSelectors.button.addEventListener("click", function () {
  changeTheme();
  if (document.button.textContent === "burger") {
    // Supposed to select the button with id "burger"
    // If button id = burger, call filterBurgers()
    filterBurgers();
  }
});
