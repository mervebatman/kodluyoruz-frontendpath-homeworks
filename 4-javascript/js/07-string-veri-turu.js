// ** String Veri Turu Islemleri
//https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "mervebatman58@gmail.com";
let firstName = "merve";
let lastName = "BATMAN";

//String karakter sayisi -->length
console.log(email.length);

//Ilk karakteri bulmak -->[0]
console.log(firstName[0]);
console.log(firstName.charAt(1));

//buyuk harf / kucuk harf
console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

// String icinde istedigimiz bilgiyi aramak ve yerini bulmak --> search
console.log(email.search("@"));
console.log(email[13]);
console.log(email.search("fgjldfkh")); // -1 gelir cunku icinde olmayan degeri arattik

//belli bir yere kadar al --> slice
console.log(email.slice(14,23)); //domain bilgisini getirttik

let DOMAIN = email.slice(email.search("@") +1);
console.log(DOMAIN);

console.log(DOMAIN.indexOf("."));
console.log(DOMAIN.slice(0,5));
console.log(DOMAIN.slice(0, DOMAIN.indexOf("."))); //Sadece gmail kismini aldik

// bilgiyi degistir --> replace
email = email.replace("gmail.com","kodluyoruz.org");
console.log(email);

//istedigimiz bilgi var mi --> includes
//email = email.includes("@");
//email = email.includes("fdgjdfg");
//email = email.indexOf("@"); //kacinci indexte oldugunu verir
console.log(email);

//istedigim bilgiyle basladi mi bitti mi --> startsWidth, endsWith
//email = email.endsWith("@");
//email = email.endsWith("kodluyoruz.org");
console.log(email);

email = email.startsWith("e");
console.log(email);

//Ilk harflerini buyuk yapmak
firstName = "FIRSTNAME";
lastName = "LASTNAME";
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`;
console.log(fullName)