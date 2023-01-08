/*  *** var let ve const ile Degisken tanimlama */

//var ile tanımlama:
/*var serverName = "api.kodluyoruz.org";
console.log(serverName); */

//let ile degiskeni bos tanimlama
let serverName;
console.log(serverName);

//let ile degiskene bilgi atayarak tanıma
serverName = "https://kodluyoruz.org";
console.log(serverName);

let password = "1234";
console.log(password);

//degisken atamasi yapmadan once kullanmaya calismak
/* HATALI KULLANIM
console.log(fullName);
let fullName = "Merve Batman"; */
let fullName = "Merve Batman";

//let ile tanimlanan degiskenin icindeki bilgiyi degistirmek
fullName = "Lorem Ipsum Dolor";
console.log(fullName);

//birlestirme islemi
fullName + "Deneme";
console.log(fullName + " Test Bilgisi");
fullName = fullName + "Yeni Bilgi";
fullName = "2. Yeni Bilgi" + fullName;
fullName = "Sifirlandi";
fullName += "ve yeni bilgi eklendi.";
console.log(fullName);

//const ile degiskeni bos tanimlamak
//const serverPassword; //hata verir bos tanimlanamaz

//const ile degisken tanimlama
const SERVER_PASSWORD = "oouıhfkdj1256";
console.log(SERVER_PASSWORD);
//SERVER_PASSWORD = "1234";
//console.log(SERVER_PASSWORD);