const DOMSelectors = {
  button: document.querySelectorAll(".btn"), // . for class, # for id
  themeButton: document.querySelector("#theme"),
  burgerButton: document.querySelector("#burger"),
  saladButton: document.querySelector("#salad"),
  sideButton: document.querySelector("#side"),
  drinkButton: document.querySelector("#drink"),
  filterResetButton: document.querySelector("#reset"),
  container: document.querySelector(".container"),
  card: document.querySelector(".card"),
  cardheader: document.querySelector(".card-header"),
  cardimage: document.querySelector(".card-image"),
  cardprice: document.querySelector(".card-price"),
};

export { DOMSelectors };
