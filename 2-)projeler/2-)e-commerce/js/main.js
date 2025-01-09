import { fetchProducts } from "./product.js";

const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".navbar");

// MenuIcon'a tıklanınca menu'ye bir class ekle-çıkar
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("/cart.html")) {
    console.log(`Cart sayfası`);
  } else {
    // Eğer anasayfadaysak api'a istek at ve verileri al
    const products = await fetchProducts();
    console.log(products);
    // Api'dan gelen verileri ekrana render et
  }
});
