// * Javascript Number Metotları

let ondalıklıSayı = 143.76554;

document.write("Ondalıklı sayı:", ondalıklıSayı, "<br/>");

// ! toFixed ==> Ondalıklı sayılarda noktadan sonra gelen basamak sayısını belirlemek için kullanılır.

document.write(
  "Ondalıklı sayının noktadan sonra 2 basamaklı hali:",
  ondalıklıSayı.toFixed(2),
  "<br/>"
);

// ! Math.round ==> Bir sayıyı en yakın tam sayıya yuvarlamak için kullanılır.

document.write(
  "Ondalıklı sayının yuvarlanmış hali:",
  Math.round(ondalıklıSayı),
  "<br/>"
);

// ! Math.floor ==> Bir sayıyı en yakın bir alt tam sayıya yuvarlar.

document.write(
  "Ondalıklı sayının yuvarlanmış hali-1:",
  Math.floor(ondalıklıSayı),
  "<br/>"
);

// ! Math.ceil ==> Bir sayıyı en yakın bir üst tam sayıya yuvarlar.

document.write(
  "Ondalıklı sayının yuvarlanmış hali-1:",
  Math.ceil(12.3),
  "<br/>"
);

// ! Math.random ==> Bu metot 0-1 arasında rastgele bir sayı oluşturur.

document.write("Rastgele sayı:", Math.random(), "<br/>");

document.write(
  "Rastgele sayı 10 a kadar :",
  Math.round(Math.random() * 10),
  "<br/>"
);

let sayı = "10";

document.write("Sayı:", sayı, "<br/>");

document.write("Sayının tipi:", typeof sayı, "<br/>");

// ! Number.parseInt ==> Bir stringi sayıya çevirmek için kullanılır.

document.write("Sayının tipi:", typeof Number.parseInt(sayı), "<br/>");

// ! Number.toString ==> Bir sayıyı stringe çevirmek için kullanılır.

document.write("Sayının tipi:", typeof Number.toString(12), "<br/>");

document.write("------------------------", "<br/>");

// * Javascript Diziler

// let kişi1 = "Esra";
// let kişi2 = "Rümeysa";

// ? Javascript'de birden fazla verileri yönetmek için diziler kullanılır.Diziler hem verileri kolay bir şekilde depolama hemde sahip olduğu metotlar sayesinde verilerimizi kolay bir şekilde yönetme imkanı sunar.Diziler içerisinde verileri tutmak için önce bu diziyi tanımlamalı sonrasındaysa bu diziye değer ataması yapmalıyız.

// * Bir dizi let ve const anahtar kelimelerinden biri seçildikten sonra diziye bir isim verilir.Bu isminden sonra '=' konulur devamında [] içerisinde dizinin elemanları yazılır.

let kişiler = ["Esra", "Rümeysa", "Ahmet", "Ali", "Adnan", "Fatma"];

document.write("Dizi: ", kişiler, "<br/>");

document.write("Dizinin 1 .elemanı: ", kişiler[0], "<br/>");
document.write("Dizinin 5 .elemanı: ", kişiler[4], "<br/>");

document.write("------------------------", "<br/>");

// ! Diziler içerisinde tutulan elemanlar toplu bir şekilde erişebildiğimiz gibi istediğimiz spesifik bir elemanada erişebiliriz.Bu işlemi dizi içerisinde erişilmek istenen elemanın sırasını belirterek yapabiliriz.Fakat js dizileri dizi içerisindeki elemanları saymaya 0 dan başlar.Bundan dolayı biz erişmemiz gereken elemanın 1 eksik sırasını belirtmek durumundayız.

// * Javascript Dizi Metotları

// Javascript'de bir diziye eleman ekleme,çıkarma,güncelleme işlemleri belirli metotlar sayesinde yapılır.

let şehirler = ["Malatya", "Ankara", "Istanbul", "İzmir", "Antalya", "Bursa"];

document.write("Şehir dizisi:", şehirler, "<br/>");

// ! push ==> Bir dizinin sonuna eleman eklemek için kullanılır.Bu metot dizinin sonuna eklenecek elemanı () içerisinde belirtmemizi ister.

şehirler.push("Konya");
şehirler.push("Erzurum");

document.write("Şehir dizisi-1:", şehirler, "<br/>");

// ! pop ==> Bir dizinin son elemanını diziden kaldırmak için kullanılır.

şehirler.pop();
şehirler.pop();

document.write("Şehir dizisi-2:", şehirler, "<br/>");

// ! unshift ==> Bir dizinin başına eleman eklemek için kullanılır.Bu metot eklenecek elemanı () içerisinde belirtmemizi ister.

şehirler.unshift("Kütahya");

document.write("Şehir dizisi-3:", şehirler, "<br/>");

// ! shift ==> Bir dizinin başından eleman çıkarmak için kullanılır.

şehirler.shift();

document.write("Şehir dizisi-4:", şehirler, "<br/>");

şehirler.push("Van");
şehirler.push("Trabzon");
şehirler.push("Trabzon");
şehirler.push("Trabzon");

document.write("Şehir dizisi-5:", şehirler, "<br/>");

// ! slice ==> Bir dizi içerisinde belirtilen aralıktaki elemanları almak için kullanılır.Bu metot bir başlangıç birde bitiş değeri talep eder.Başlangıç değeri zorunludur.Fakat bitiş değeri opsiyoneldir.

// ! 2-5 aralığı denilince bizim için dizi içerisindeki 2,3,4 değerleri alır.Yani bitiş değerine kadar alır.
document.write(
  "Şehir dizisinin 2-5 arasındaki elemanları:",
  şehirler.slice(2, 5),
  "<br/>"
);

// ! length ==> Bir dizinin uzunluğunu ölçmek için kullanılır.
document.write("Şehir dizisinin uzunluğu:", şehirler.length, "<br/>");

// ! indexOf ==> Bir dizi içerisindeki bir elemanın kaçıncı sırada olduğunu bulmak için kullanılır.

document.write(
  "Şehir dizisinin içerisinde İzmir :",
  şehirler.indexOf("İzmir") + 1,
  "<br/>"
);

// ! lastIndexOf ==> Bir dizi içerisinde birden fazla bulunan elemanlardan sonuncusunun sırasını  bulmak için kullanılır.

document.write(
  "Şehir dizisinin içerisinde Trabzon :",
  şehirler.lastIndexOf("Trabzon") + 1,
  "<br/>"
);

document.write("------------------------------", "<br/>");

// ! reverse ==> Bir dizinin elemanlarını ters çevirmek için kullanılır.

şehirler.reverse();

document.write("Şehir dizisinin ters hali :", şehirler, "<br/>");

// ! concat ==> İki yada daha fazla diziyi birleştirmek için kullanılır.

let öğrenciNotları = [1, 2, 3, 4, 5, 5, 3, 3, 3, 4, 4, 4];

let karmaDizi = şehirler.concat(öğrenciNotları);

document.write("Karma Dizi:", karmaDizi, "<br/>");

// ! join ==> Bir dizinin elemanlarını belirtilen ayıraca göre bölerek geriye tek bir string ifade döndürür.

let yeniDizi = karmaDizi.join("//");

document.write("Yeni Dizi:", yeniDizi, "<br/>");

şehirler.reverse();

document.write("------------------------------", "<br/>");

document.write("Şehirler Dizisi:", şehirler, "<br/>");

// ! splice ==> Bu metot dizilerin isveç çakısıdır.Bu metot sayesinde bir diziden eleman kaldırabilir,eleman ekleyebilir,bir dizinin elemanlarını güncelleyebiliriz.

// ? splice ile eleman kaldırma

//  * Şehirler dizisi içerisinde 3 indexten itibaren 2 eleman kaldırıldı
const kaldırılanlar = şehirler.splice(3, 2);

// Şehirler dizisinin güncel hali

document.write("Şehirler Dizisi-1:", şehirler, "<br/>");

// Şehirler dizisinden kaldırılan elemanlar
document.write("Kaldırılanlar:", kaldırılanlar, "<br/>");

// splice ile bir diziden eleman kaldırırken bu metoda iki adet değer verilir.Birincisi bu diziden kaçıncı elemandan itibaren elemanlar kaldırılacak ikincisi kaç adet eleman kaldıırılacak.

// splice metodu diziden kaldırılan elemanları geriye döndürür.

// ? splice ile diziye eleman ekleme

// Splice ile bir diziye eleman eklerken hangi index'ten itibaren eleman ekleyeceğimizi belirtikten sonra 0 yazar ve eklenecek elemanı belirtiriz.

şehirler.splice(2, 0, "Yozgat");

document.write("Şehirler Dizisi-2:", şehirler, "<br/>");

// ? splice ile bir elemanı güncelleme

// splice ile bir dizi içerisinde güncelleme yaparken hangi indexten itibaren eleman güncellemesi yapılacağı belirtildikten sonra güncel değerler yazılır.

şehirler.splice(4, 3, "Muş", "Kars", "Amasya");

document.write("Şehirler Dizisi-3:", şehirler, "<br/>");

// ! sort ==> Bir dizi içerisinde yer alan elemanları sıralamak için kullanılır.

şehirler.sort();

document.write("Şehirler Dizisi-4:", şehirler, "<br/>");

const puanlar = [100, 234, 12, 678, 1001];

document.write("Puanlar:", puanlar, "<br/>");

puanlar.sort(function (a, b) {
  return b - a;
});

// sort metodu metin ifadeler üzerinde işlemler yaparken sıkıntısız çalışır.Fakat sayılar ile işlem yapılırken hatalı çalışır.Bunu düzeltmek için bir tane fonksiyon yazılır.Bu fonksiyon bizim için düzgün sıralama yapar.
document.write("Puanlar-1:", puanlar, "<br/>");

document.write("----------------------------------", "<br/>");

const kullanıcılar = [
  {
    id: 1,
    name: "Esra",
    surname: "Akgündoğdu",
    email: "esra@gmail.com",
    puan: 4000,
  },
  {
    id: 2,
    name: "Rümeysa",
    surname: "Baykal",
    email: "rümeysa@gmail.com",
    puan: 5000,
  },
  {
    id: 3,
    name: "Abdullah",
    surname: "Aydın",
    email: "abdullah@gmail.com",
    puan: 5000,
  },
  {
    id: 4,
    name: "Fatmanur",
    surname: "Çağlar",
    email: "fatma@gmail.com",
    puan: 54000,
  },
  {
    id: 5,
    name: "Ali",
    surname: "Ağa",
    email: "ali@gmail.com",
    puan: 400,
  },
  {
    id: 6,
    name: "Selin",
    surname: "Çevik",
    email: "selin@gmail.com",
    puan: 450,
  },
];

console.table(kullanıcılar);

document.write("----------------------------------", "<br/>");

// ! Objeler işlendikten sonra filter ve find metotları için buraya geri dönülecek.

// ! find ==> Bir dizi içerisindeki elemanları bir şarta bağlı olarak bulmak için kullanılır.Bu metot () içerisinde dizideki elemanların hangi şarta bağlı olarak bulunması isteniyorsa bunu belirtmemizi ister.

// ? Kullanıcılar dizi içerisinde id'si 3 olan kullanıcıyı bul

const kullanıcı3 = kullanıcılar.find(function (user) {
  return user.id === 3;
});

// console.log(kullanıcı3);

// ?  Kullanıcı adı fatmanur olan elemanı bul

const kullanıcıFatma = kullanıcılar.find(function (a) {
  return a.name == "Fatmanur";
});

// console.log(kullanıcıFatma);

// ? Kullanıcı puanı 5000 olan kullanıcıyı bul

const puanlıKullanıcı = kullanıcılar.find(function (kişi) {
  return kişi.puan === 5000;
});

// console.log(puanlıKullanıcı);

// ! filter ==> Bir dizi içerisindeki elemanları filterelemek için kullanılır.Bu metod bizden hangi şarta bağlı filtreleme yapılacaksa bunu belirtmemizi ister.

// ? Puanı 5000'den büyük olan kullanıcıları bul
const puanlıKullanıcılar = kullanıcılar.filter(function (kullanıcı) {
  return kullanıcı.puan >= 5000;
});

// console.log(puanlıKullanıcılar);

// ? Puanı 1000'den küçük kullanıcıları bul

const kullanıcılarYeni = kullanıcılar.filter(function (kullanıcı) {
  return kullanıcı.puan < 1000;
});

console.log(kullanıcılarYeni);

// * Javascript Objeler

// Objeler içerisinde değerleri key-value (anahtar-değer) çiftleri halinde tutan yapılardır.Bir objeyi tanımlarken önce değişken tanımlarken kullanılan anahtar kelimelerden biri seçildikten sonra objeye bir isim  verilir.Sonrasında '=' yazılıp sağında {} açılır.Buradaki {} içerisinde 'key:value' şeklinde değerler yazılır.

const öğrenci = {
  isim: "Esra",
  soyisim: "Akgündoğdu",
  yaş: 25,
  meslek: "Frontend Developer",
  mevzunOldumu: false,
  hobiler: ["yazılım", "müzik", "spor"],
  kişiTanıtım: function () {
    document.write(
      this.isim,
      " ismindeki ",
      this.meslek,
      " henüz mevzun olmadı ama o geleceğin başarılı yazılımcılarından biri olacak.",
      "<br/>"
    );
  },
};

// console.log(öğrenci); ==>  Objenin tamamına erişme

// console.log(öğrenci.isim); ==> Objenin içerisindeki değerlere erişme
// console.log(öğrenci.yaş); ==> Objenin içerisindeki değerlere erişme

// console.log(öğrenci.hobiler);==> Objenin içerisindeki diziye erişme

// console.log(öğrenci.hobiler[0]); ==> Objenin içerisindeki dizinin bir elemanına erişme
// console.log(öğrenci.hobiler[1]);

öğrenci.kişiTanıtım();

// todo: Bir obje oluşturunuz.Bu obje içerisinde bir adet string,bir adet number,bir adet boolean,bir adet array ve birde fonksiyon oluşturunuz.Sonrasında bu fonksiyonu çalışıtırınız.Obje içerisindeki değerlere erişiniz.

const araba = {
  marka: "BMW",
  model: "i7",
  renk: ["siyah", "beyaz", "mavi", "kırmızı"],
  yıl: 2020,
  tanıt: function () {
    document.write(
      "Araba adı:",
      this.marka,
      " Araba Model: ",
      this.model,
      "<br/>"
    );
  },
  künye: {
    durum: "ikinci el",
    dizi: [1, 2, 3, 4],
  },
};

// console.log(araba.renk);

// araba.tanıt();

document.write("Araba renk: ", araba.renk, "<br/>");

document.write("Araba renk: ", araba.renk[0], "<br/>");

// // Obje içerisindeki objenin içerisinde bulunan diziye erişme
// console.log(araba.künye.dizi[3]);
