"use strict";

// * Javascript Dizilerde Döngüler

// Dizilerin her elemanı için bir işlev tetikleyebilmek için döngüler kullanılır.Bu noktada karşımıza forEach ve map döngüleri çıkar.

// ForEach:

// foreach bir dizinin tüm elemanları için birer işlev tetiklemek için kullanılır.

const şehirler = ["Malatya", "Ankara", "İzmir", "Hatay", "Kütahya"];

// document.write(`Selamlar Malatya <br/>`);
// document.write(`Selamlar Ankara <br/>`);
// document.write(`Selamlar İzmir <br/>`);
// document.write(`Selamlar Hatay <br/>`);

şehirler.forEach((şehir) => {
  document.write(`Selamlar ${şehir} <br/>`);
});

// Foreach belirtilen dizinin  elemanları üzerinde döner ve belirtilen işlev her neyse bunun çalıştırılmasını sağlar.

// Map:

// Map bir dizinin her elemanı için bir işlev tetiklemek için kullanılır ve bir yeni dizi oluşturur.

const sayılar = [1, 2, 3, 4, 5];

const yeniSayılar = sayılar.map((sayı) => sayı * 2 + 1);

document.write(sayılar, "<br/>");

document.write(yeniSayılar, "<br/>");

// ! Not: map ve forEach arasındaki fark map bir dizi üzerinde dönüldüğünde geriye yeni bir dizi oluşturduğundan map ile bir dizinin elemanlarına müdahele yapabiliriz.Fakat foreach ile sadece dizi elemanları üzerinde dönerek bir işlev gerçekleştiririz.

// todo: Bir kullanıcı dizi içerisindeki her kullanıcı için 1.kullanıcı:(kullanıcı adı),2.kullanıcı:(kullanıcı adı) ,... şeklinde ekrana çıktı veren codescript'i oluşturunuz.

const users = ["Esra", "Abdullah", "Ali", "Helin", "Seçil"];

users.forEach((user, index) => {
  document.write(`${index + 1} . kullanıc: ${user} <br/>`);
});

// * Javascript Try-Catch Yapısı

// Javascript'de try-catch yapısı programın belirli bir kısmında bir hata olması durumunda bu hatayı yakalayıp programın çökmesini engellemek için kullanılır.try bloğunda bir işlem gerçekleştirilir ve bu kısımda bir hata alınması durumunda bu hata catch bloğunda yakalanır.Tüm işlem sonunda çalışacak kodlar ise finally bloğunda yazılır.

try {
  // throw elle hata fırlatmak için kullanılır.
  throw new Error(`İşlem gerçekleştirilirken bir hata oluştu.`);
  document.write(`İşlem gerçekleştirildi <br/>`);
} catch (error) {
  document.write(`Hataaaa: ${error} <br/>`);
} finally {
  document.write(`İşlem sonlandırıldı <br/>`);
}

// * Javascript Scope Kavramı

// Scope bir ifadenin erişilebildiği alanı temsil eder.Javascript'deki scopelar:

// 1-) Global Scope:

// Global scope sahip bir değişken program içerisinde her yerden erişilebilir.

// 2-) Function Scope:

// Function scope sahip bir değişken program içerisinde sadece tanımlandığı fonksiyon içerisinde erişilebilir.

// 3-) Block Scope:

// Es6 ile birlikte gelen let ve const ile bir kapsam içerisinde tanımlanan değişkenlere sadece bu noktada erişilebilir.

const age = 22;

const writeToDocument = (yaş) => {
  document.write(`Kullanıcı yaşı: ${yaş} <br/>`);
};

writeToDocument(age);

function hesapla() {
  let sayı = 2024 - 2020;
  // sayı değişkeni bir function scope a sahip bu yüzden bu değere ilgili function dışarısında erişemeyiz.
  document.write(`Sayı: ${sayı} <br/>`);
}
hesapla();

// document.write(`${sayı}`); bu kullanımda =>sayı is not defined hatası alırız.Yani sayı değişkenini bulamaz

let doğruMu = true;

if (doğruMu) {
  const userMessage = `İşlem başarılı`;

  document.write(`Mesaj: ${userMessage} <br/>`);
}

// document.write(`Kullanıcı mesajı: ${userMessage} <br/>`); bu kullanımda ==> userMessage is not defined hatası verir çünkü userMessage block scope a sahip bir değişkendir ve sadece bu scope içerisinde erişilebilir.

// * Javascript Set-Map Yapısı

// * Set yapısı javascript'de benzersiz değerleri tutamak için kullanılır.

//  *Set yapısı oluşturulurken new Set() kullanılır.Bu yapı set oluştururken bir değere atanarak kullanılmalıdır.

let userSet = new Set();

userSet.add("Ali"); // Set yapısına eleman eklendi
userSet.add("Adnan"); // Set yapısına eleman eklendi
// userSet.add("Ali"); Set yapısına Ali önceden bulunduğundan bunu eklemedi
userSet.add("Fırat");
userSet.add("Didem");
userSet.add("Muhammed");

userSet.delete("Didem"); // Set yapısıdaki eleman silindi

// userSet.clear(); Set yapısındaki elemanları silmek için kulllanılır.

// console.log(userSet.has("Ahmet"));

// console.log(userSet);

// console.log(userSet[0]); Set yapısı içerisinde indexleme yapılamaz.

// ! Set yapısını diziye çevirmek için Array.from() kullanılır.

const userArray = Array.from(userSet);

// console.log(userArray);

// console.log(userArray[0]);

// ! Bir diziyi set e çevirmek için new Set() kullanılır.Buradaki() içerisinde dizi verilir sonrasında bu yapı bir değişkene aktarılır.Aktarılan eleman bir set yapısı olacaktır.

const meslekler = [
  "Frontend Developer",
  "Backend Developer",
  "Mobile Developer",
];

const meslekSet = new Set(meslekler);

// console.log(meslekler);

// console.log(meslekSet);

// * Map yapısı key-value(anahtar-değer) çiftleri halinde değerler tutan veri yapılarıdır.

// * Map yapısı oluşturulurken new Map() kullanılır.Bu yapı map oluştururken bir değere atanarak kullanılmalıdır.

let personMap = new Map();

// Key'ler string,number gibi veri tiplerinden oluşabilir.

personMap.set("isim", "Selin");
personMap.set("soyisim", "Çelik");
personMap.set(3, "Meslek");

// ! Bir map yapısındaki mevcut key tekrar kullanılırsa bu key değeri güncellenir.

personMap.set("isim", "Muhammed");

// console.log(personMap);

// * Map yapısındaki bir değeri almak için `get` kullanılır.

// console.log(personMap.get("isim"));
// console.log(personMap.get("soyisim"));

// * Map yapısında bir değer varmı bunu kontrol etmek için `has` kullanılır.

// console.log(personMap.has("şehir"));

// * Map yapısındaki bir değeri silmek için `delete` kullanılır.

personMap.delete("isim");

// console.log(personMap);

// ! Özetle set yapısı benzersiz değerleri saklar.Map ise içerisinde key-value değer çiftlerini saklar.

// * useStrict

// * useStrict javascript içerisinde daha katı kurallar ile kod yazmamızı sağlar.

function hesapla1(number) {
  return number * number;
}

// console.log(hesapla1(4));

// * Javascript Hoisting

// Javascript'de hoisting değişken ve fonksiyonların tanımlanırken en yukarıya taşınmasıdır.Kodu derlerken sanki bu ifadeler yukarıda tanımlanmış gibi davranır sonrasında değerlerini atar

let kulllanıcıAdı;

document.write(`Aktif kullanıcı adı: ${kulllanıcıAdı}'dır. <br/>`);

kulllanıcıAdı = "Ömer";

document.write(`Aktif kullanıcı adı: ${kulllanıcıAdı}'dır. <br/>`);

// todo: Pc'den 0-100 arasında random sayı oluşturmasını isteyiniz.Sonrasında kulllanıcının bu sayıyı 3 hak ile tahmin etmesini isteyiniz.Eğer doğru bilirse 'Tebrikler doğru bildiniz' bilemezse ve hakkı varsa 'Daha büyük yada daha küçük sayı giriniz' diyerek kullanıcıyı yönlendiriniz.Kullanıcının hakkı bitti ve bilemediyse 'Hakkınız bitti bilemedeniz '  yazdıran codescript'i oluşturunuz.

// Random sayı oluştur

// While ile çözüm
// const randomSayı = Math.round(Math.random() * 100);

// console.log(randomSayı);

// let hak = 0;

// while (hak < 3) {
//   let tahmin = parseInt(prompt(`0-100 arasında  rastgele bir sayı giriniz:`));

//   if (!tahmin) {
//     alert(`Lütfen tahmin giriniz !!`);
//     continue; // Eğer tahmin girilmediyse sonraki adıma geç
//   } else if (tahmin == randomSayı) {
//     alert(`Tebrikler doğru bildiniz  :)`);
//     hak = 3;
//   } else if (tahmin > randomSayı) {
//     alert(`Lütfen daha küçük sayı giriniz`);
//   } else {
//     alert(`Lütfen daha büyük sayı giriniz`);
//   }

//   hak++;

//   if (hak == 3) {
//     alert(`Hakkınız bitti randomSayı: ${randomSayı}`);
//   }
// }

// For ile çözüm

// const randomSayı = Math.round(Math.random() * 100);

// console.log(randomSayı);

// for (let hak = 1; hak <= 3; hak++) {
//   let tahmin = parseInt(prompt(`0-100 arasında  rastgele bir sayı giriniz:`));

//   if (!tahmin) {
//     alert(`Lütfen tahmin giriniz !!`);
//     hak--;
//     continue;
//   }

//   if (tahmin == randomSayı) {
//     alert(`Tebrikler doğru bildiniz  :)`);
//     break;
//   } else if (tahmin > randomSayı) {
//     alert(`Daha küçük sayı giriniz`);
//   } else {
//     alert(`Daha büyük sayı giriniz `);
//   }

//   if (hak == 3) {
//     alert(`Hakkınız bitti randomSayı: ${randomSayı}`);
//   }
// }

document.write(`------------------------------------ <br/>`);

// * Javascript Date Objesi

// Javascript içerisinde bulunan Date objesiyle güncel tarih verilerine erişebiliriz.

const date = new Date();

// Gün

const day = date.getDate();

document.write(`Gün: ${day} <br/>`);

// Ay
const month = date.getMonth();

document.write(`Ay: ${month + 1} <br/>`);

// Yıl

const year = date.getFullYear();

document.write(`Yıl: ${year} <br/>`);

// Saat

const hours = date.getHours();

document.write(`Saat: ${hours} <br/>`);

// Dakika

const minutes = date.getMinutes();

document.write(`Dakika: ${minutes} <br/>`);

// Saniye

const second = date.getSeconds();

document.write(`Saniye: ${second} <br/>`);

// Haftanın günü

const dayOfWeek = date.getDay();

document.write(`Haftanın günü: ${dayOfWeek} <br/>`);

//  1970'den itibaren milisaniye alma

const değer = date.getTime();

document.write(`Değer: ${değer} <br/>`);

// *  toLocaleDateString ==> Belirtilen dilde tarih verisi döndürmek için kullanılır.
const turkishDate = date.toLocaleDateString("tr-TR", {
  year: "2-digit",
  month: "short",
  day: "numeric",
});
document.write(`Tarih: ${turkishDate} `);
