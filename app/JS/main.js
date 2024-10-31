import "../css/style.css";
import { products } from "./products.js";
import { DOMSelectors } from "./dom.js";

products.forEach((product) =>
  insertAdjacentHTML(` 
  <div>
    <h1>Wendy's Menu</h1>
    <div class="container">
      <div class="card">
        <h2 class="card-header">${products.name}</h2>
        <img class="card-image" src="${products.image}" alt="${products.alt}/>
        <h3 class="card-price">${products.price}</h3>
      </div>
    </div>
  </div>
`)
);
