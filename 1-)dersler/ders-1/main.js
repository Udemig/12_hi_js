// * Javascript Çıktı Metotları

// Javascript'de kullanıcıya çıktı vermek için 3 adet metod bulunur:

// 1-) document.write(): Html'de body etiketinin arasında kalan kısmın tarayıcıdaki beyaz alana denk geldiğini söylemiştik.Bu beyaz alanın javascript'deki karşlığı document'dir.Bu alana çıktı vermek için document.write kullanılır.

document.write(
  "Merhaba,javascript dersinden selamlar.Udemig akademinin çalışkan öğrencileriyle javascript derslerine başladık.",
  "<br/>"
);

document.write("Javascript çıktı metotları.", "<br/>");
document.write("Javascript çıktı metotları.", "<br/>");

// 2-) console.log(): Tarayıcıda bulunan console kısımına çıktı vermek için kullanılan bu metot hem bağlantı hem veri kontrolü hemde program içersinde yer alan hataları inceleme imkanı sunar.

// ? Peki console kısmına nasıl ulaşılır ?

// Tarayıcıda sağ tık > incele denildikten sonra açılan pencerede bir console menüsü bulunur.

console.log("Selamlar Dünya !!");
console.log("Bağlantı kontrolü");

// 3-) alert(): Tarayıcıda açılır bir popup ile kulllanıcıya bir mesaj iletmek için kullanılır.

// alert("Dikkat hatalı işlem yaptınız !!!");

// * Javascript Değişkenler (Javascript Variables)

// Değeri değişebilen ifadelere değişkeler denir.Bu yapılar sayesinde program içerisinde verileri yönetiriz.

document.write("Yusuf,selamlar.", "<br/>");
document.write("Ali,selamlar.", "<br/>");
document.write("Ömer,selamlar.", "<br/>");
document.write("Selin,selamlar.", "<br/>");

// Program içerisinde bir değişken kullanabilmek için yapılması gerekenler:

// ! 1-) Değişkenin Tanımlanması

// Değişken tanımlarken 'var,let,const' anahtar kelimeleri kullanılır.Bu anahtar kelimelerden biri seçildikten sonra değişkene bir isim verilir.Bu isim değişkenin içeriğiyle bağıntılı olmalıdır.Yani kişi isminin tutulduğu bir değiken ismi name veya kişiİsmi olmalıdır.Bu yazılımcılar arasında ortak bir yapı oluşturmak içindir.Değişken ismi seçilirken javascript içerisinde yer alan bazı özel isimler seçilemez.(array,object,class,alert,...).Değişken isimlendirmesi yapılırken eğer değişken adı birden fazla kelimeden oluşuyorsa camelCase isimlendirme metodu kullanılır.Bu isimlendirme metodunda birinci kelimenin tüm harfleri küçük bunun haricinde bulunan tüm kelimelerin sadece ilk harfi büyük olur.

// ! Değişkene Değer Atama

// Bir değişkene değer ataması '=' ile yapılır.Bu yapı sağında bulunan değeri alıp solundaki ifadenin yeni değeri olarak atar.Eğer sağ kısımıda bir dizi işlem varsa önce bu işlemleri yapar sonra sonucu alıp solundaki ifadeye atar.

// ! Değişkenin Kullanılması

// Tanımlanan sonrasında değeri atanan değişkenler program içerisinde kullanılır.

var kullanıcıİsim = "Esra";

// document.write("Yusuf,selamlar.", "<br/>");
// document.write("Ali,selamlar.", "<br/>");
// document.write("Ömer,selamlar.", "<br/>");
// document.write("Selin,selamlar.", "<br/>");

document.write(kullanıcıİsim, ",selamlar.", "<br/>");

let sınıfMevcudu = 34;

document.write(
  "12 hi grubunda",
  sınıfMevcudu,
  "kişiyle js derslerine başladık.",
  "<br/>"
);

const yıl = 2024;

document.write(yıl, " yılından selamlar.", "<br/>");

// ? Peki neden 'var,let,const' anahtar kelimeleri kullanıyoruz ? Bir tanesi yetmiyor mu ?

// var ile değişken tanımlama güncel projelerde kullanılmaz.Bunun sebebi var ile tanımlanan değişkenlerde yeniden tanımlamaya izin verilmesidir.Bu program içerisinde güvenlik açığına sebep olduğundan yerini let ve const a bırakmıştır.

var şehir = "Malatya";
var şehir = "Konya";

document.write(şehir, "<br/>");

let kişiAdı = "Seçil Vergili";
// let kişiAdı = "Ali Aga"; Bu şekilde bir kullanımda syntax hatası fırlatır.

document.write(kişiAdı, "<br/>");

const ülke = "Türkiye";
// const ülke = "Almanya"; Bu şekilde bir kullanımda syntax hatası fırlatır.

// ? let ve const arasındaki fark nedir ?

// let ve const arasındaki fark let ile tanımlanan bir değişkenin içeriği güncellenebilirken const ile tanımlanan değişkenlerin içeriği değiştirilemez.

let yazılımDili = "C#";

yazılımDili = "Javascript";

document.write(yazılımDili, "<br/>");

const yaş = 22;

// yaş = 23; Bu şekilde bir kullanımda hata verir.

document.write(yaş, "<br/>");

// ! Not: const ile tanımlanan bir ifadenin referansı değiştirilemez.Fakat eğer bu ifade bir nesne yada diziyse içeriği doğrudan olmasada güncellenebilir.

// ! Değişkenler program içerisinde verilerimizi yönetmek için kullanılan yapılardır.Bu yapılar arasındaki fark var güncel projelerde kullanılmaz yerini let ve const a bırakır.let ve const arasındaysa let ile tanımlanan bir değişkenin içeriği güncellenebilirken const ile tanımlanan değişkenlerin içeriği doğrudan güncellenemez.

// * Javascript Veri Tipleri (Javascript Data Types)

// typeof ==> Javascript'de yer alan yapıların veri tiplerini kontrol etmek için kullanılır.

// Javascript içerisinde bulunan her yapının bir tipi vardır.

// string,number,boolean,null,undefined

// * String:

// Javascript'de metin ifadelerin tipi string olarak geçer.String ifadeler '' işareti içerisinde yazılmalıdır.

let isim = "Fevzi Emir";

// *  Number:

// Javascript'de sayıların veri tipi number'dır.

document.write(typeof isim, "<br/>");
document.write(typeof 44, "<br/>");
