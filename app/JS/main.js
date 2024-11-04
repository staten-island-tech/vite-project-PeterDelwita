import "../css/style.css";
import "../css/variables.css";
import { products } from "./products.js";
import { DOMSelectors } from "./dom.js";

products.forEach((product) =>
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class="card-header">${product.name}</h2>
      <img class="card-image" src="${product.image}" alt="${product.alt}/>
      <h3 class="card-price">${product.price}</h3>
    </div>
`
  )
);
