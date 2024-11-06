import "../css/style.css";
import "../css/variables.css";
import { products } from "./products.js";
import { DOMSelectors } from "./dom.js";

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

function changeTheme() {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
}

function filterBurgers() {
  products.filter((product) => product.category === "burger");
}

DOMSelectors.button.addEventListener("click", function () {
  changeTheme();
  if (document.button.id("burger")) {
    // If button id = burger, call filterBurgers()
    filterBurgers();
  }
});
