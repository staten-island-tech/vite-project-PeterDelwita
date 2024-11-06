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
    .filter((product) => product.category !== "burger") // What should it do to non-burgers after I filter?
    .forEach((product) => remove(product)); // Supposed to remove the non-burgers while this is active. (Should be reversible) (Needs fixing)
}

DOMSelectors.button.addEventListener("click", function () {
  changeTheme();
  if (document.button.id("burger")) {
    // Supposed to select the button with id "burger"
    // If button id = burger, call filterBurgers()
    filterBurgers();
  }
});
