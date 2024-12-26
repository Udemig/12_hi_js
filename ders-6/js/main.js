// import { users, student } from "./constants.js";

// import { tanıtım } from "./helper.js";

// import course from "./course.js";
// import { name } from "./student.js";

// console.log(name);

// * Javascript Modüler Dosya Yönetimi

// Javascriptle yapılan bir projede proje boyutunun artmasına bağlı olarak js kodlarını tek javascript dosyasında yönetmek bizim için zor olacaktır.Bu noktada javascriptde modüler dosya yönetimini kullanırız.

// Bu yöntemde bir tane ana js dosyası bulunur bu dosya html dosyasına script tagi ile bağlanır.Diğer dosyalardaki gerekli değişke,obje,fonksiyon,dizi kısacası gerekli veri dosya dışına çıkarılıp kullanılır.

// ? Peki bu işlem nasıl yapılır.

// 1-) Ana javascript dosyasının diğer javascript dosyalarının yöneticisi olduğunu html kısmında script ile bağlantı yaparken type'module' ibaresiyle belirtiriz.

// 2-) Diğer dosyalarda oluşturulan veriler export edilir.

// ! Bir veriyi import ederken kullanılan tek yönyem bu {} içerisinde yazmak değildir.Verileri export default yöntemiylede dosya dışarısına çıkarabiliriz.Bu export default yönteminde export a göre iki fark bulunur.

// 1-) Bir dosya içerisinde sadece bir tane export default hakkımız  vardır.Bu yüzden bir dosyadan bir veriyi export default ile dosya dışarısına çıkarırken {} içerisine yazmayız.

// 2-) Export default ile dosya dışarısına çıkarılan bir veri import edilirken {} kullanılmadan import edilir.

//  3-) Export ile dosya dışarısına çıkarılan veriler gerekli dosyada import edilir.

// console.table(users);

// console.log(student);

// tanıtım();

// console.log(course);

// * Javascript Object Get-Set Yapısı

// Javascript'de bir değişkene dolaylı şekilde değer atamak ve alamk için get ve set yapıları kullanılır.

let personInfo = {
  name: "Fatmanur",
  surname: "Çağlar",
};

Object.defineProperty(personInfo, "Name", {
  get: function () {
    return `Kişi adı*: ${this.name}`;
  },
  set: function (value) {
    this.name = value;
  },
});

document.write(personInfo.Name, "<br/>");

personInfo.Name = "Mehmet";

document.write(personInfo.Name, "<br/>");

document.write(personInfo.name, "<br/>");

let car = {
  brand: "BMW",
  model: "M3",
};

Object.defineProperty(car, "info", {
  get: function () {
    return `Araba marka: ${this.brand} Araba model: ${this.model}`;
  },
  set: function (newBrand) {
    this.brand = newBrand;
  },
});

car.info = "Mercedes";

document.write(car.info, "<br/>");

let person = {
  name: "Ali",
  surname: "Ağa",
  _age: 30, // Bir key değeri başına '_' konulursa bu değere dışarıdan erişilemez.
};

document.write(person.age, "<br/>");

Object.defineProperty(person, "Age", {
  get: function () {
    return `Kişi Yaş: ${this.age}`;
  },

  set: function (value) {
    if (value > 0) {
      this.age = value;
    } else {
      alert("Yaş pozitif olmalıdır.");
    }
  },
  configurable: false,
});

person.Age = 44;

// * Javascript Objelerde Call && Bind && Apply

// * Javascript'de call,bind ve apply ile bir objeye ait özellikleri başka bir obje üzerinde kullanabiliriz.

// call:

// call metodu bir fonksiyonu bağlam belirterek başka bir obje üzerinden  çalıştırmamızı sağlar

const kişi = {
  name: "Bedirhan",
  surname: "Koca",
  writeToDocument: function (age, country) {
    document.write(
      `Kişi ad: ${this.name} Kişi soyad: ${this.surname} Kişi yaş: ${age} Kişi Ülke: ${country} <br/>`
    );
  },
};

const kişi1 = {
  name: "Nefel",
  surname: "Baksi",
  //   writeToDocument: function (age, country) {
  //               document.write(`Kişi ad: ${this.name} Kişi soyad: ${this.surname} `);
  //             },
};

kişi.writeToDocument.call(kişi1, 25, "Hollanda");

// kişi1 içerisinde sanki writeToDocument varmış gibi bir kullanım yaptık

// apply:

// Apply metodu call ile aynı işlemi yapar.Ancak apply argümanlarını call'un aksine bir dizi şeklinde alır.

const kişi2 = {
  name: "Fırat",
  surname: "Şabahat",
};

kişi.writeToDocument.apply(kişi2, [30, "Türkiye"]);

// bind:

// Bind tıpkı call gibi tüm argümanları virgülle alır.Fakat call ve apply'ın aksine  bu metodun çalıştırılabilmesi için yeni bir fonksiyona atanması ve bu şekilde kullanılması gerekir.

const kişi3 = {
  name: "Ali",
  surname: "Ağa",
};

const yeniKişiYazdır = kişi.writeToDocument.bind(kişi3, 35, "Almanya");

yeniKişiYazdır();

document.write(
  "-------------------------------------------------------------------------------",
  "<br/>"
);

// * JSON

// Json verileri yapılandırmak ve depolamak için kullanılan bir veri formatıdır.Json verileri hem kişiler hemde makineler tarafından okunup anlaşılabilir.

// Json Temel kuralları

// Js nesnelerinden farklı olarak key'lerin başına '' konulur.
// Nesne tabanlıdır
// Js'deki tüm veri tiplerini içerisinde bulundurur

// {
//               'ad':'Yusuf',
//               'soyad':'Yaman'
//               'mevzunOlduMu':'false'
// }

// * Json verisini işleme

// JSON.parse() ==> Json verisini js nesnesine çevirmek için kullanılır.

const jsonData = '{"ad":"Selin","soyad":"Çelik","yaş":25}';

// console.log(jsonData);

const jsObject = JSON.parse(jsonData);

// console.log(jsObject);

const jsKişiNesnesi = { ad: "Ali", soyad: "Ağa", yaş: 25 };

// console.log(jsKişiNesnesi);

// JSON.stringify() ==> Js nesnesini json a çevirmek için kullanılır.

// const jsonKişiNesnesi = JSON.stringify(jsKişiNesnesi);

// console.log(jsonKişiNesnesi);

// * Api Nedir

// Api (Application Programming Interface) , bir programın diğer programlarla iletişim kurmak için kullanılan bir arayüzdür. Api'ler ile bir programın diğer programlarla iletişim kurup, verileri alma, gönderme, veya başka işlemler yapma gibi işlemleri gerçekleştirebilir.

//  * Api'dan verileri alma ==> fetch

// fetch("https://jsonplaceholder.typicode.com/users") // Api'a istek at
//   .then((res) => res.json()) // Apidan gelen veriyi js nesnesine çevir
//   .then((data) => console.log(data)); // Çevrilen veriyi console a yazdır

// Async-Await

// Asekron

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await res.json();

  console.log(users);
}

// getData();

// todo: Bir fonksiyon oluşturunuz.Bu fonksiyon kendisine paramtere verilen id ye sahip kullanıcıyı api'dan alsın.

const getUser = async (data) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${data}`);

  const user = await res.json();

  console.log(user);
};

// const randomUserId = Math.round(Math.random() * 9 + 1);

// getUser(randomUserId);

// * Javascript DOM (Document Object Modal)

// Javascriptde html kısmında bulunan elemanlara erişmek için DOM kulllanılır.

// Eğer js den Htmldeki bir elemana müdahele etmek istersek bunun için şu sırayı takip etmemiz gerekir:

// 1-) Html'den elemanlara eriş

// i-) document.getElementsByTagName() ==> Bu metot Htmlde bulunan elemanlara tag adına göre erişmek için kullanılır.

const title1 = document.getElementsByTagName("h1");

// console.log(title1);

// ii-) document.getElementsByClassName() ==> Bu metot Htmlde bulunan elemanlara class adına göre erişmek için kullanılır.

const title2 = document.getElementsByClassName("title-2");

// console.log(title2);

// iii-) document.getElementById() ==> Bu metot Htmlde bulunan elemanlara id sine göre erişmek için kullanılır.

const title3 = document.getElementById("title-3");

// console.log(title3);

// iv-) document.querySellector() ==> Bu metot şimdiye kadar gördüğümüz tüm eleman seçici metotların işlevini yapan bir metotdur.Fakat bu metot kullanılırken belirtilen seçici class mı id mi bunu belirtmemiz gerekir.

const title4 = document.querySelector("#title-4");

// console.log(title4);

// const title5 = document.querySelectorAll(".title-5");

const title5 = document.querySelector(".title-5");

// document.querySelectorAll() ==> Eğer belirtilen seçicide birden fazla eleman varsa bunların hepsini almak için kullanılır.

// console.log(title5);

// 2-) Erişilen elemanı js kısmında kullan

// title4.style.backgroundColor = "red";
// title4.style.padding = "20px";
// title4.style.fontSize = "40px";
// title4.style.fontFamily = "sans-serif";

// Yukarıdaki tüm still özelliklerini bir class altında topladık ve bunu bu elemana aktaracağız

// Bir elemana class eklemek çıkarmak gibi işlemleri elemanAdı.classList ile sağlarız.

title4.classList.add("başlık"); // Bir elemana class ekleme

title5.classList.remove("başlık-1"); // Bir elemandan class çıkarma

// Bir elemanın İçeriğini belirleme

// * Bir elemanın yazı içeriğini belirlemek için innerText kullanılır.

title4.innerText = "Selamlar nasılsınız ??";

// * Bir elemanın Html içeriğini belirlemek için innerHTML kullanılır.

title5.innerHTML = `<img src='https://picsum.photos/200'/>`;

// * Bir elemanın yazı içeriğini belirlemek için textContent kullanılır.

title3.textContent = "Javascript çok eğlenceli bir programlama dilidir.";

// * Olay İzleyicileri

// Javascript'de bir elemanın üzerinde gerçekleşecek bir olayla birlikte bir tetikleme yapmak için addEventListener yapısı kullanılır.

// * Bu metot bizden şunları talep eder:

// 1-) Hangi eleman üzerinde gerçekleşecek olay izlenecek

// 2-) Bu olay nedir ?

// 3-) Bu olayın gerçekleşme durumunda hangi fonksiyon yada işlev tetiklenecek

const alertBtn = document.querySelector(".give-alert");

alertBtn.addEventListener("click", () => {
  alert("Bu butona tıklandı");
});
