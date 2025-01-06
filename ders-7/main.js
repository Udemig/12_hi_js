const textInput = document.querySelector("#text-input");

// const handleChange = () => {
//   console.log(`İnput değişti`);
// };

// textInput.addEventListener("onchange", handleChange());

// 1-) Butona tıklanınca bir fonksiyon çalıştır.

// i-) butonu js kısmına çek
const createBtn = document.querySelector(".create-btn");
const container = document.querySelector(".container");

// ii-) butona bir olay izleyicisi ekle
createBtn.addEventListener("click", createDiv);

// iii-) butona tıklanınca çalışacak bir fonksiyon yaz.

function createDiv() {
  // i-)Bir tane div oluştur
  // ! document.createElement==> Bu metot sayesinde js içerisinde html elemanları oluşturabiliriz.
  const newDiv = document.createElement("div");

  // ii-) Oluşturulan elemanın içeriğini belirle
  newDiv.textContent = "Yeni Div";

  console.log(newDiv);

  // iii-) Oluşturulan bu elemana bir class ekle
  newDiv.classList.add("container-eleman");

  // iv-) Bu oluşturulan div'i html deki container içerisine ekle

  // ! Bir eleman içerisine başka bir elemanı eklemek için appendChild metodu kullanılır.
  container.appendChild(newDiv);
}

const themaBtn = document.querySelector(".theme-btn");

themaBtn.addEventListener("click", () => {
  // ! classList.toggle metodu bir elemana class ekleyip çıkarmak için kullanılır.Eğer class varsa bunu kaldırır eğer yoksa bunu ekler
  form.classList.toggle("form");
});

// todo: Html kısmında bir tane buton oluşturunuz.Bu butona tıklanınca dark-light mode özelliğini aktif etsin.

const temaButon = document.querySelector(".tema-buttonu");

temaButon.addEventListener("click", () => {
  document.body.classList.toggle("dark-tema");
});

// todo: Bir form oluşturunuz.Bu form gönderildiğinde inputlardaki isim ve şifre bilgisini console'a yazdırınız.

// i-) Forma Js kısmında eriş
const form = document.querySelector("form");
// ii-) Forma olay izleyicisi ekle
form.addEventListener("submit", (e) => {
  // Sayfa yenilmesini engelle
  e.preventDefault();
  // iii-) Inputlar içerisindeki değerlere eriş
  const name = e.target[0].value;
  const password = e.target[1].value;
  // iv-) console a yazdır
  console.log(`Name: ${name}`);
  console.log(`Password: ${password}`);
});

// * Javascript Class Yapısı

// Javascript class yapıları içerisinde fonksiyonlar bulundurabilen değişkenler tutabilen bir js özelliğidir.

class Person {
  // Kurucu metot'dur
  constructor(name) {
    // Name dışarıdan parametre olarak geliyor
    this.name = name;
    // Yaşı biz class içerisinde tanımladık
    this.yaş = 22;
  }

  yazdır() {
    console.log(`Kişi ismi: ${this.name}; Kişi Yaş:${this.yaş}`);
  }
}

const kişi = new Person("Yusuf");

console.log(kişi);

kişi.yazdır();

// Miras Alma

class Hayvan {
  constructor(isim) {
    this.isim = isim;
  }

  tanit() {
    console.log(`Hayvan isim: ${this.isim}`);
  }
}

const hayvan = new Hayvan("Tekir");

console.log(hayvan);

class Kedi extends Hayvan {}
// Kedi classı hayvandan özellikleri miras aldığı için Hayvan classının shaip olduğu hangi özellik varsa bunu kullanabilir.

const kediClass = new Kedi("Pamuk");

console.log(kediClass);

kediClass.tanit();

class Çalışan {
  constructor(isim, yaş) {
    this.isim = isim;
    this.yaş = yaş;
  }

  çalış() {
    console.log(
      `${this.isim} isimli çalışan ${this.yaş}'ındadır ve gayet başarılıdır.`
    );
  }
}
class Mühendis extends Çalışan {
  constructor(isim, yaş, ülke) {
    // Super miras alınan classın constructor'ını kullanmamızı sağlar
    super(isim, yaş);
    this.ülke = ülke;
  }

  tanit() {
    super.çalış();
  }
}

const mühendis = new Mühendis("Helin", 25, "Amerika");

console.log(mühendis);

mühendis.tanit();

// * LocalStorage

// Localstorage locale imizde verileri tutmak için kullanılır.

// Bu yapı bizden verileri alırken bir key birde value talep eder.Key ve value değerleri 'string' olmalıdır.
const users = [
  {
    name: "Muhammed",
    surname: "Karaaslan",
    age: 25,
    city: "Malatya",
  },
  {
    name: "Seçil",
    surname: "Vergili",
    age: 30,
    city: "Ankara",
  },
];

//localStorage'a eleman eklemek için localStorage.setItem() metodu kullanılır
localStorage.setItem("user", JSON.stringify(users));

const kullanıcılar = ["Yusuf", "Fırat"];

const isim = "Ömer";

const mevcut = 44;

localStorage.setItem("kullanıcılar", JSON.stringify(kullanıcılar));

localStorage.setItem("kullanıcı", JSON.stringify(isim));

localStorage.setItem("mevcut", JSON.stringify(mevcut));

// localStorage'dan elemanları almak için localStorage.getItem() metodu kullanılır

const kullanıcılar1 = JSON.parse(localStorage.getItem("kullanıcılar"));

console.log(kullanıcılar1);

// localStorage'dan bir eleman kaldırmak için localStorage.removeItem() metodu kullanılır.

localStorage.removeItem("kullanıcı");

// localStorage'ı temizlemek için localStorage.clear() metodu kullanılır.

localStorage.clear();
