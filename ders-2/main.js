// alert("Js ders-2 den selamlar");

// * Javascript Veri Tipleri

let kullanıcıAdı = "Seçil Vergili";

document.write("Kullanıcı Adı:", kullanıcıAdı, "<br/>");

document.write("Veri Tipi:", typeof kullanıcıAdı, "<br/>");

// Number:

// Javascript'de sayıların veri tipleri number'dır.Değeri sayı olan değişkenler atama operatöründen sonra direkt olarak yazılır.

let plakaNo = 44;

let plakaNoAçıklama = "44";

document.write("Plaka No: ", plakaNo, "<br/>");

document.write("Veri Tipi: ", typeof plakaNo, "<br/>");

document.write("Veri Tipi: ", typeof plakaNoAçıklama, "<br/>");

// ! Eğer bir sayı '' içerisinde tanımlanırsa bunun veri tipi string olur.

// Boolean

// True (doğru) yada false (yanlış) değerler alan ifadelerin veri tipi boolean'dır.

let isAdmin = true;
let isStudent = true;

document.write("Admin mi ? :", isAdmin, "<br/>");

document.write("Veri tipi :", typeof isAdmin, "<br/>");

document.write("Veri tipi :", typeof isStudent, "<br/>");

document.write("-----------------------------------------", "<br/>");

// * Javascript Aritmetik Operatörler

let sayı1 = 34;
let sayı2 = 12;

// Toplama (+):

// sayı1 ve sayı2 yi topla:

document.write("İki sayının toplamı:", sayı1 + sayı2, "<br/>");

// ! Buradaki + operatörünün toplama işlemi yanında bir işlevide 'birleştirme' işlemidir.

let krediNotu = 89;

document.write("Zeynep in kredi notu:" + krediNotu + "<br/>");

// ? Soru:

let number1 = 18;
let number2 = "40";

document.write("Toplam sonuç:" + number1 + number2 + "<br/>");

// Çıkarma (-):

document.write("İki sayının farkı:" + (sayı1 - sayı2) + "<br/>");

// Çarpma (*):

document.write("İki sayının çarpımı:" + sayı1 * sayı2 + "<br/>");

let sayı4 = 4;
let sayı5 = 8;

let çarpım = sayı4 * sayı5;

document.write("Çarpım sonuç:🥳 " + çarpım + "<br/>");

// Bölme (/):

document.write("44 ün 11 e bölümü:" + 44 / 11 + "<br/>");

// Mod (%):

document.write("44 ün 12 e modu:" + (44 % 12) + "<br/>");

document.write("-----------------------------------------", "<br/>");

// ! document.write("Number:", kSayı, "<br/>"); Sabit bir ifadenin değeri doğrudan güncellenemez

const kSayı = 33;

// kSayı = kSayı + 1;

document.write("Number:", kSayı, "<br/>");

document.write("-----------------------------------------", "<br/>");

// ! Bonus:

let number3 = 55;

document.write("Number-3:", number3, "<br/>");

// number3 = number3 + 1;

number3++;

document.write("Number-3:", number3, "<br/>");

// number3 = number3 + 3;

number3 += 3;

document.write("Number-3:", number3, "<br/>");

// number3 = number3 - 5;

number3 -= 5;

document.write("Number-3:", number3, "<br/>");

// number3 = number3 * 10;

number3 *= 10;

document.write("Number-3:", number3, "<br/>");

number3 += 3;

document.write("Number-3:", number3, "<br/>");

document.write("-----------------------------------------", "<br/>");

// * Javascript Karşılaştıma Operatörleri

let sayı6 = 32;
let sayı7 = 38;

// Küçüktür(<)
document.write("32 38 den küçükmüdür? :" + (sayı6 < sayı7) + "<br/>");

// Küçük eşittir(<=)

document.write("32 32 den küçük eşitmidir? :" + (sayı6 <= 32) + "<br/>");

// Büyüktür(>)

document.write("38 32 den büyükmüdür? :" + (sayı7 > sayı6) + "<br/>");

// Büyük eşittir(>=)

document.write("38 38 den büyük eşitmidir? :" + (sayı7 >= 38) + "<br/>");

// ! Büyük eşittir,küçük eşittir gibi yapılarda 2 şart kontrol edilir.Bu iki şarttan bir tanesi doğruysa true döndürür.

// Eşittir(==)

let sayı8 = 45;
let sayı9 = "45";

document.write("Eşitler mi? :" + (sayı8 == sayı9) + "<br/>");

// Denktir(===)

document.write("Denkler mi? :" + (sayı8 === sayı9) + "<br/>");

let sayı10 = "46";
let sayı11 = "44";

document.write("Denkler mi? :" + (sayı10 === sayı11) + "<br/>");

document.write("Denkler mi-1? :" + (sayı10 === "46") + "<br/>");

// ! Javascript eşitlik kontrolü yaparken sadece değerleri kontrol eder.Ama denklik kontrol edilirken değerlerin eşitliğinin yanı sıra tip kontrolü de yapar.

document.write("Büyük mü?  :" + (44 > "42") + "<br/>");

// Eşit değildir(!=)

document.write("Eşit değil mi ?  :" + (44 != 42) + "<br/>");

// * Ve ve Veya Bağlaçları

// ! Ve(&&) ==> İki ifadenin doğru olması durumunda true aksi halde false döner.

document.write(true && true, "<br/>");
document.write(true && false, "<br/>");
document.write(false && false, "<br/>");
document.write("------------------------------", "<br/>");

// ! Veya(||) ==> Bir tane true olması durumunda true aksi halde false döner

document.write(true || true, "<br/>");
document.write(true || false, "<br/>");
document.write(false || false, "<br/>");
document.write("------------------------------", "<br/>");

document.write(44 > 22 || 44 < 22, "<br/>");

document.write(44 > 22 && 44 < 22, "<br/>");

document.write("------------------------------", "<br/>");

// * Javascript Fonksiyonlar

// Fonsiyonlar bir işlevi gerçekleştirmek için özelleştirilmiş kod parçacıklarıdır.Bir fonksiyonu kullanabilmek için önce bu fonksiyonu tanımlamalı sonrasında bu fonksiyonu çağırmalıyız.

// ? Bir fonksiyon nasıl tanımlanır ?

// Bir fonksiyon tanımlanırken  'function' anahtar kelimesi kullanılır.Sonrasında bu fonksiyona bir isim verilir.Verilen bu ismin yanına sırasıyla () ve {} konulur.Bu sayede bir fonksiyon tanımlanır.Bu fonksiyon {} içerisinde tanımlanan işlemleri yapar.

function toplama() {
  let toplamaSayı1 = 13;
  let toplamaSayı2 = 45;

  let sonuç = toplamaSayı1 + toplamaSayı2;

  document.write("İki sayının toplamı:" + sonuç + "<br/>");
}

// Bir fonksiyonun çağırılması:

// Tanımlanan bir fonksiyonun işlevini yapabilmesi için çağırılması gerekir

toplama();

// Bir fonksiyonun belirlenen işlevi gerçekleştirmesi için önce tanımlanması sonra çağırılması gerekir.Bu arabalarda bulunan gaz pedalı örneğiyle ilişkilendirilebilir.

// Arabada bulunan gaz pedalı aracın hareket etmesini sağlar.Fakat bu pedala basmazsanız iligli işlev gerçekleşmez.Tanımlanan bir fonksiyonunda çalışması için çağırılması gerekir.
document.write("------------------------------", "<br/>");

function selamla() {
  document.write("Udemig akademi javascript dersinden selamlar.", "<br/>");
}

selamla();

// toplama();
// toplama();

// ? Oluşturulan fonksiyonlar statik bir çıktı veriyor.Javascript dinamik işlemler yapmamıza olanak sağlıyordu peki nasıl bir fonksiyonu dinamik çıktı verecek hale getiririz ?

// Bir fonksiyonun dinamik işlemler yapabilmesi için 'Paramtre' kullanılması gerekir.Bir fonksiyonun parametreyle bir işlem yapabilmesi için önce bu parametreleri fonksiyona geçmemiz gerekir.Bir fonksiyona paramtere fonksiyonun adının yanında yer alan  () içerisinde geçilir.Sonrasında fonksiyon içerisinde bu değerler kullanılabilir.

function parametreliToplama(toplanacaksayı1, toplanacaksayı2) {
  let sonuç = toplanacaksayı1 + toplanacaksayı2;

  document.write("Toplama işlemi sonuç:", sonuç, "<br/>");
}

document.write("------------------------------", "<br/>");

// parametreliToplama(); Parametrei bir fonksiyonun çalışabilmesi için bu fonksiyonun çağırıldığı yerde kendisine parametre verilmesi zorunludur.Aksi halde istenilen şekilde çalışmaz.

parametreliToplama(12, 43);
parametreliToplama(123, 43);
parametreliToplama(31, 43);

document.write("------------------------------", "<br/>");

function kişiTanıtım(a) {
  document.write("Selamlar ", a, "<br/>");
}

kişiTanıtım("Ömer");
kişiTanıtım("Esra");
kişiTanıtım("Muhammed");
kişiTanıtım("Ali");

document.write("------------------------------", "<br/>");

function stokToplam(x, y, z, t) {
  let sonuç = x + y + z + t;

  document.write("Stok toplam:", sonuç, "<br/>");
}

stokToplam(3, 4, 5, 6);

// Şimdiye kadar oluşturulan fonksiyonlar bir işlem yapma üzerine özelleşitirildi.Peki bir fonksiyonun nasıl değer döndürmesi sağlanır ?

// Fonksiyonların değer döndürme işlemi return anahtar kelimesiyle sağlanır.

function ortalamaHesapla(a, b) {
  let ortalama = (a + b) / 2;

  return ortalama;
}

document.write("Ortalama:", ortalamaHesapla(95, 80), "<br/>");

let sonuç = ortalamaHesapla(100, 90);

document.write("Returnlü sonuç:", sonuç, "<br/>");

// ! return satırı bir fonksiyonun dışarıya değer döndürmesini sağlar.

function ortalamaYazdır() {
  let ortalamaSonuç = ortalamaHesapla(100, 80);
  document.write("Ortalama Sonuç🤩:", ortalamaSonuç, "<br/>");
}

ortalamaYazdır();

// * Javascript Girdi Metotları

// 1-)prompt() ==> Javascript'de açılan bir popup ile kullanıcıdan değer alamamızı sağlar.Alınan bu değeri bir değişkene aktararak program içerisinde kullanabiliriz.

// let userName = prompt("Kullanıcı ismi:");
// let userPhoneNumber = prompt("Telefon Numarası Giriniz:");

// document.write("Kullanıcı:", userName, "<br/>");
// document.write("Kullanıcı:", userPhoneNumber, "<br/>");

// 2-)confirm()==> Kullanıcıdan 'tamam' yada 'iptal' şeklinde onay alma imkanı sunar.Onay durumunda 'true' red durumunda 'false' döndürür

// const response = confirm("Silme işlemini onaylıyormusunuz?");

// document.write("Kullanıcı tercihi:", response, "<br/>");

// console.log("Yusuf YAMAN");
// console.log(44);

// const telefonNumarası = parseInt(prompt("Telefon numaranızı giriniz:"));

// console.log(telefonNumarası);

// * parseInt==> Verileri number tipine çevirmek için kullanılır.

document.write("------------------------------", "<br/>");

// todo: Kullanıcıdan alınan iki adet sayının toplamınını,farkını,çarpımını ve bölümünü yazdıran bir code-script yazınız.

// // önce sayıları al

// alert("Girilecek birinci sayı ikinciden büyük olmalıdır !!");

// const s1 = parseInt(prompt("Birinci sayıyı giriniz:"));

// const s2 = parseInt(prompt("İkinci sayıyı giriniz:"));

// // console.log(s1);
// // console.log(s2);

// // bu sayıları topla,çıkart,çarp ve böl

// let toplamaSonuç = s1 + s2;

// let çıkarmaSonuç = s1 - s2;

// let çarpmaSonuç = s1 * s2;

// let bölmeSonuç = s1 / s2;

// // sonuçları ekrana yazdır

// document.write("Birinci sayı:", s1, "<br/>");

// document.write("İkinci sayı:", s2, "<br/>");

// document.write("Toplama Sonuç:", toplamaSonuç, "<br/>");

// document.write("Çıkarma Sonuç:", çıkarmaSonuç, "<br/>");

// document.write("Çarpma Sonuç:", çarpmaSonuç, "<br/>");

// document.write("Bölme Sonuç:", bölmeSonuç, "<br/>");

// * Javascript String Metotları

const metin =
  "   Javascript dersinden selamlar.Dünyanın en popüler yazılım dilini piyasanın en iyi yazılım akademisinde öğreniyoruz.Udemigin kaliteli eğitimleri sayesinde çok iyi seviyeye geleceğiz.   ";

document.write("Metin:", metin, "<br/>");

// length ==> Bir string ifadenin uzunluğunu belirlemek için kullanılır.

document.write("Metinin uzunluğu:", metin.length, "<br/>");

// toLocaleUpperCase ==> Bir string ifadenin tüm harflerini büyük harf yapmak için kullanılır.

document.write("Metin büyük harf:", metin.toLocaleUpperCase(), "<br/>");

// toLocaleLowerCase ==> Bir string ifadenin tüm harflerini küçük harf yapmak için kullanılır.

document.write("Metin küçük harf:", metin.toLocaleLowerCase(), "<br/>");

// indexOf ==> Bir string ifade içerisinde belirlenen kelimenin kaçıncı sırada olduğunu bulmak için kullanılır.Bu metot sırası bulunacak kelimenin belirtilmesini ister.

document.write("Metin içerisinde popüler:", metin.indexOf("popüler"), "<br/>");

document.write("Metin içerisinde en :", metin.indexOf("en"), "<br/>");

// lastIndexOf ==> Bir string ifade içerisinde tekrarlanan kelimelerden sonuncusunun sırasını bulmak için kullanılır.Bu metot sırası bulunacak kelimenin belirtilmesini ister.

document.write("Metin içerisinde en-1 :", metin.lastIndexOf("en"), "<br/>");

// slice ==> Bir string ifade içerisinde belirli bir aralığı almak için kullanılır.Bu metot bir aralığı kesip alacağından bir başlangıç birde bitiş değeri verilmesini ister.Başlangıç değeri zorunludur fakat bitiş değeri zorunlu değildir.Eğer bitiş değeri verilmezse string ifadenin sonunan kadar alacaktır.

document.write(
  "Metin içerisinde 44-78 aralığı :",
  metin.slice(44, 78),
  "<br/>"
);

// concat ==> Bir yada daha fazla string ifadeyi birleştirmek için kullanılır.Bu metot () içerisinde birleştirilmek istenen değerleri ister.

document.write(
  "Metin  :",
  metin.concat("Ankara", "İzmir", "Konya", "Antalya"),
  "<br/>"
);

// replace ==> Bir string ifade içerisinde yer alan bir değeri başka bir değerle değiştirmek için kullanılır.

document.write(
  "Metin içerisinde değişim  :",
  metin.replace("akademisinde", "kursunda"),
  "<br/>"
);

// includes ==> Bir string ifade içerisinde bir kelimenin olup olmadığını kontrol eder.

document.write("Metin içerisinde var mı  :", metin.includes("Ali"), "<br/>");

// trim  ==> Bir string ifade içerisinde yer alan baştaki ve sondaki boşlukları kaldırmak için kullanılır.

document.write(
  "Metin içerisinde boşlukların kaldırılması  :",
  metin.trim().length,
  "<br/>"
);

// split ==> Bir string ifadeyi belirtilen ayıraçlara göre böler.Ve geriye bir dizi döndürür

document.write("Metin içerisinde ayıraç  :", metin.split(" "), "<br/>");

let kelime = "Merhaba//Selamlar//Nasılsın//Çalışmalar Nasıl";

document.write("Metin içerisinde değişim  :", kelime.split("//"), "<br/>");
