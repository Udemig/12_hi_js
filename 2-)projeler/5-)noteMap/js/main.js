/*
* Başlangıçta kullanıcının konuma erişmeliyiz.Bu sayede haritanın başlangıç konumunu belirleyeceğiz.




*/

import { personIcon } from "./constants.js";
import elements from "./ui.js";

// Global Değişkenler
var map;
let clickedCoords;

// window içerisindeki navigator objesi içerisinde kullanıcının açmış olduğu sekme ile alakalı birçok veriyi bulundurur.(kordinat,tarayıcı ile alakalı veriler,pc ile alakalı veriler)Bizde bu yapı içerisindeki geolocation yapısıyla kordinat verisine eriştik.geolocation içerisindeki  getCurrentPosition kullanıcının  mevcut konumunu almak için kullanılır.Bu fonksiyon içerisine iki adet callBack fonksiyon ister.Birincisi kullanıcının konum bilgisini paylaşması durumunda çalışır ikincisi ise konum bilgisini paylaşmaması durumunda çalışır.
window.navigator.geolocation.getCurrentPosition(
  (e) => {
    // Konum bilgisi paylaşıldığında
    loadMap([e.coords.latitude, e.coords.longitude], "Mevcut Konum");
  },
  (e) => {
    // Konum bilgisi paylaşılmadığında
    loadMap([39.925143, 32.837528], "Varsayılan Konum");
  }
);

// ! Haritayı oluşturan fonksiyon
function loadMap(currentPosition, msg) {
  map = L.map("map", {
    zoomControl: false,
  }).setView(currentPosition, 12);

  // Haritayı render eder
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Zoom araçlarının konumunu belirle
  L.control
    .zoom({
      position: "bottomright",
    })
    .addTo(map);

  // Ekrana basılacak bir katman oluştur
  let layer = L.layerGroup().addTo(map);

  // Kullanıcın başlangıç konumuna bir tane marker ekle
  L.marker(currentPosition, { icon: personIcon }).addTo(map).bindPopup(msg);

  // Harita üzerindeki tıklama olaylarını izle

  map.on("click", onMapClick);
}

// ! Haritaya tıklanıldığında çalışacak fonksiyon
function onMapClick(e) {
  // Tıklanılan yerin kordinatlarına eriş
  clickedCoords = [e.latlng.lat, e.latlng.lng];
}

// ! Form gönderildiğinde çalışacak fonksiyon
elements.form.addEventListener("submit", (e) => {
  // Sayfa yenilemeyi engelle
  e.preventDefault();

  // Form içerisindeki değerlere eriş
  const title = e.target[0].value;
  const date = e.target[1].value;
  const status = e.target[2].value;

  // Bir tane not objesi oluştur

  const newNote = {
    id: new Date().getTime(),
    title,
    date,
    status,
    coords: clickedCoords,
  };
});
