import headerFunc from "./header.js";
import productsFunc from "./products.js";








//! add product to localStorage
(async function() {
  const photos = await fetch("../data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc();
})();








const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length: "0";


