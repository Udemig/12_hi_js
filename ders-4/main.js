// * Javascript Templates Literal (Backtick):

// Javascript'de şimdiye kadar değişkenleri ve string ifadeleri bir arada kullanmak için string ve değişkenleri , yada + ile birleştirdik.Fakat bu kullanım bizim için çık zahmetli.İşte bu noktada 'ES6' ile birlikte gelen 'TEMPLATES Literal' kullanımıyla bu işlemi daha kolay bir şekilde halledebiliriz.

// Templates Literal(backtick) maclerde (option+,) windowslarda (altgr+,) ile oluşturulur.Bu yapı içerisinde değişkenler ve string ifadeler çok kolay bir şekilde yönetilir.Eğer değişken yazıcaksak bunu ${} içerisinde eğer string ifade yazacaksak bunu direkt `` içerisinde yazarız.

const isim = "Selin";
const soyisim = "Çelik";

document.write(
  isim +
    " ismindeki öğrencimizin soyadı:" +
    soyisim +
    " dir.Ve kendisi geleceğin başarılı yazılımcılarındadır." +
    "<br/>"
);

document.write(
  `${isim} ismindeki öğrencimizin soyadı: ${soyisim} dir.Ve kendisi geleceğin başarılı yazılımcılarındadır. <br/> `
);

document.write(`Veri tipi: ${typeof 44} <br/>`);

// * Javascript Arrow Functions

// ES6 ile birlikte gelen arrow function ile daha modern bir şekilde fonksiyonlar tanımlayabiliriz.

// ? Bir arrow function tanımlarken let veya const anahtar kelimelerinden biri yazıldıktan sonra fonksiyona bir isim verilir.Sonrasında =()=>{} yapısı oluşturulur.Buradaki {} içerisinde fonksiyonun yapması istenen işlev kodlanır.

// Arrow function tanımlandı
const hesapla = () => {
  let sayı1 = 10;
  let sayı2 = 16;

  let toplam = sayı1 + sayı2;

  document.write(`Toplam sonuç: ${toplam} <br/>`);
};

// Arrow function çağırıldı
hesapla();

// * arrow funcitionlarda paramtere kullanımı

let hesapla2 = (s1, s2) => {
  let toplam = s1 + s2;

  document.write(`Toplam sonuç: ${toplam} <br/>`);
};

hesapla2(32, 56);

// todo: Bir adet arrow function oluşturunuz.Bu fonksiyon dışarıdan alınan iki adet sayının çarpımını hesaplayıp ekrana yazdırsın.

// * arrow functionlarda return kullanımı

// const çarpmaİşlemi = (a, b) => {
//   let çarpım = a * b;

//   return çarpım;
// };

// * Arrow function tanımlandı
const çarpmaİşlemi = (a, b, c) => a * b * c;

// ! Arrow functionlar eğer fonksiyonun yapacağı return işlemi tek satırda halledilebiliyorsa bunu {} kullanmadan yapmamıza olanak tanır.

// * Arrow function çağırıldı
document.write(`Çarpım sonuç: ${çarpmaİşlemi(5, 6, 4)}  <br/> `);

// * Callback function:

const kullanıcılar = [
  { id: 1, isim: "Selin Çevik", puan: 3300 },
  { id: 2, isim: "Nazik Öztürk", puan: 2300 },
  { id: 3, isim: "Muhammed Fatih Karaaslan", puan: 5300 },
  { id: 4, isim: "Esra Akgündoğdu", puan: 6300 },
];

console.table(kullanıcılar);

// Kullanıcı puanı 4000'den büyük olan kullanıcıları filtrele

// const puanlıKullanıcılar = kullanıcılar.filter(function (kullanıcı) {
//   return kullanıcı.puan > 4000;
// });

const puanlıKullanıcılar = kullanıcılar.filter(
  (kullanıcı) => kullanıcı.puan > 4000
);

// console.table(puanlıKullanıcılar);

// Kullanıcı id'si 1 olan kullanıcıyı bul

// const idliKullanıcı = kullanıcılar.find(function (kişi) {
//   return kişi.id === 1;
// });

const idliKullanıcı = kullanıcılar.find((kişi) => kişi.id === 1);

console.log(idliKullanıcı);

document.write(
  `Kullanıcı adı: ${idliKullanıcı.isim} Kullanıcı puan: ${idliKullanıcı.puan} <br/>`
);

// * Javascript Koşullu Yapıları (if-else)

// Javascript'de koşullu yapıları if else ile sağlanır.

// todo: Kullanıcı yaşı 18'den büyükse ehliyet alabilir değilse alamaz code scrpitini kodlayınız.

const yaş = 17;

if (yaş > 18) {
  document.write(`Ehliyet alabilir :) <br/>`);
} else {
  document.write(`Ehliyet alamaz  <br/>`);
}

// todo: Kullanıcı kredi notu 70'den büyükse 'Kredi çekebilir' değilse 'Kredi çekemez ' yazdıran codescripti oluşturunuz.

const krediNotu = 59;

if (krediNotu > 70) {
  document.write(`Kredi çekebilirsiniz :) <br/>`);
} else {
  document.write(`Kredi çekemezsiniz  <br/>`);
}
document.write(`----------------------------------  <br/>`);

let ortalama = 89;

if (ortalama < 50) {
  document.write(`Dersten kaldınız <br/>`);
} else if (ortalama >= 50 && ortalama < 64) {
  document.write(`Dersten geçtiniz ama belge alamadınız. <br/>`);
} else if (ortalama >= 65 && ortalama <= 84) {
  document.write(`Dersten geçtiniz ve Teşekkür belgesi aldınız <br/>`);
} else {
  document.write(`Dersten geçtiniz ve Takdir belgesi aldınız !!! <br/>`);
}

// todo: Kullanıcının yaşı 18'den büyükse ve parası 100.000 tl den fazlaysa motor alabilir değilse alamaz yazdıran codescript'i oluşturunuz.

let age = 17;

let money = 100000;

if (age >= 18 && money >= 100000) {
  document.write(`Tebrikler motor alabilirisiniz. <br/>`);
} else {
  document.write(`Motor alamazsınız. <br/>`);
}

let renk = "Sarı";

if (renk === "Kırmızı") {
  document.write(`Dur. <br/>`);
} else if (renk === "Sarı") {
  document.write(`Hazırlan. <br/>`);
} else if (renk === "Yeşil") {
  document.write(`Geç. <br/>`);
}

document.write(`----------------------------------  <br/>`);

// * Javascript Switch-case yapısı

// Javascript'de bir değişkenin alacağı sınırlı sayıdaki değere bağlı olarak kontroller switch-case ile yapılır.

let haftanınGünü = 3;

switch (haftanınGünü) {
  case 1:
    document.write(`Pazartesi <br/>`);
    break;
  case 2:
    document.write(`Salı <br/>`);
    break;
  case 3:
    document.write(`Çarşamba <br/>`);
    break;
  case 4:
    document.write(`Perşembe <br/>`);
    break;
  case 5:
    document.write(`Cuma <br/>`);
    break;
  case 6:
    document.write(`Cumartesi <br/>`);
    break;
  case 7:
    document.write(`Pazar <br/>`);
    break;
  default:
    document.write(`Tanımsız gün`);
}
document.write(`----------------------------------  <br/>`);

// todo: Kullanıcıdan alınan bir sayıya göre kurs adlarını ekrana yazdıran codescripti oluşturunuz.(1 için 'Frontend' 2 için 'Backend' 3 için 'React Native' 4 için 'İngilizce' 5 için 'Swift-İos' bunun haricindeki değerler için tanımsız değer yazdırınız) [ Switch case kullanınız]

// const kursNumarası = parseInt(prompt("Bir sayı giriniz"));

// switch (kursNumarası) {
//   case 1:
//     document.write(`Frontend Kursu <br/>`);
//     break;
//   case 2:
//     document.write(`Backend Kursu <br/>`);
//     break;
//   case 3:
//     document.write(`React Native Kursu <br/>`);
//     break;
//   case 4:
//     document.write(`İngilizce Kursu <br/>`);
//     break;
//   case 5:
//     document.write(`Swift-İos Kursu <br/>`);
//     break;
//   default:
//     document.write(`Tanımsız Kurs <br/>`);
// }

// * Javascript Döngüler

// Javascript'de tekrar gerektiren durumları yönetmek için döngüler kullanılır.

document.write(`Selamlar Dünya <br/>`);

let sayı = 10;

document.write(`Sayı: ${sayı} <br/>`);

// sayı = sayı + 1;

sayı++;

document.write(`Sayı: ${sayı} <br/>`);

sayı = sayı * 5;

document.write(`Sayı: ${sayı} <br/>`);

sayı += 3;

document.write(`Sayı: ${sayı} <br/>`);

document.write(`----------------------------------  <br/>`);

// * For Döngüsü

for (let sayaç = 0; sayaç < 5; sayaç++) {
  document.write(`Selamlar Dünya <br/>`);
}
document.write(`----------------------------------  <br/>`);

// Döngüler tekrar gerektiren durumlarda kullanılır.Bu döngülerden bir tanesi for döngüsüdür.For döngüsü  sayaç,bu sayacın kontrol şartı ve sayacı nasıl güncelleneceğini  belirtmemizi ister.Sayacın kontrol şartı sağlanırsa {} içerisinde yer alan kod çalışır.

// todo: 1 'den 10' a kadar olan sayıları ekrana döngü kullanarak yazdırınız.

for (var sayı1 = 1; sayı1 <= 10; sayı1++) {
  document.write(`${sayı1} <br/>`);
}
document.write(`----------------------------------  <br/>`);

// todo: 0'den 50' ye kadar olan çift sayıları ekrana yazdırınız.

for (let sayı2 = 0; sayı2 <= 50; sayı2 += 2) {
  document.write(`${sayı2} <br/>`);
}

document.write(`----------------------------------  <br/>`);

// * While Döngüsü

// While döngüsü bir şarta bağlı olarak işlemler yapmak için kullanılır.

let sayı3 = 3;

while (sayı3 < 10) {
  document.write(`Selamlar Trump !! <br/>`);

  sayı3++;
}

document.write(`----------------------------------  <br/>`);

// todo: While döngüsü kullanarak 1,2,3,...20 . şınav şeklinde çıktı veren codescript i oluşturunuz.

let şınavSayacı = 1;

while (şınavSayacı <= 20) {
  document.write(`${şınavSayacı}. şınav <br/>`);

  şınavSayacı++;
}

// * Do-While Döngüsü

// Do-While döngüsü while a benzerdir.Fakat do-while'ın while a göre  farkı do-while'da eğer şart sağlanmazsa dahi bir defa kod çalışır.

let coinFiyat = 105;

do {
  document.write(`Coin Fiyat: ${coinFiyat} <br/>`);

  coinFiyat--;
} while (coinFiyat > 100);

document.write(`----------------------------------  <br/>`);

// todo: 1'den 10 a kadar olan sayıları do-while kullanarak ekrana yazdırınız.

let sayı4 = 10;

do {
  document.write(`${sayı4} <br/>`);

  sayı4--;
} while (sayı4 > 0);
