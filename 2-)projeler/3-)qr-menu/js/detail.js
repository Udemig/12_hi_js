/*
Çok sayfalı projelerde eğer pek çok eleman için bir sayfayı render edeceksek bu noktada sayfa içeriği dinamik şekilde render ederiz.Bunu yaparken herbir eleman için url'e bir paramtre geçilir.Devamında bu parametreye sahip ürün verileriyle sayfa renderlanır.

*/

import fetchMenu from "./api.js";

// Js içerisindeki URLSearchParams classı parametreleri alıp kullanmas noktasında bize kolaylık sağlar
const params = new URLSearchParams(window.location.search);

// Url'den gelen id parametresini number a çevir
const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  // Sayfa yüklendiğinde Api'a istek at
  const data = await fetchMenu("../db.json");

  // Url'den alınan id'ye sahip ürünü bul
  const product = data.find((item) => item.id === id);

  console.log(product);
});
