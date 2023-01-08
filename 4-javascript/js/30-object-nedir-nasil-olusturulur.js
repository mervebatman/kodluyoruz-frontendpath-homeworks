// Object(Nesne) nedir nasil olusturulur
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

let arrayObj = [1, 2, 3]
let object1 = {obj: 1}

console.log("arrayOb: ", typeof(arrayObj));
console.log("object1: ", typeof(object1));

let item1 = new Object()
let item2 = {}
console.log("item1: ", typeof(item1));
console.log("item2: ", typeof(item2));


// Object olusturmak
let item3 = {}
let item4 = new Object()

console.log("object1", object1);

let artist = {
    name: "Zoe",
    album: {
        title: "Reptilectric",
        year: 2008
    },
};

// ayni degerlere sahip 2 primitve veri tipi
let mesaj = "merhaba";
let baskabirmesaj = "merhaba";
console.log(mesaj == baskabirmesaj); // true alır

// ayni degerlere, farkli memory adreslerine sahip 2 obje
let obje = {
    mesaj: "merhaba"
}

let baskabirobje = {
    mesaj: "merhaba"
}

console.log(obje == baskabirobje); // false alır “obje” ve “baskabirobje” isimli objeler de bire bir aynı değerleri barındırmalarına rağmen eşit kabul edilmiyorlar. Çünkü bu iki obje, arka planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar, bu yüzden içerikleri aynı olsa da farklı kabul ediliyorlar.

// Object Literals 
let countryTalk = {
    country: "Turkiye",
    language: "Turkce"
}; // degisken tanimladiktan sonra süslü parantez açılır ve icine özellikleri ile beraber degerleri girilir haliyle object olusturulur

console.log(countryTalk);

// new Object();
let countryTalk2 = new Object();
countryTalk2.country = "Turkiye";
countryTalk2.language = "Turkçe";

console.log(countryTalk2);

// Object.create()
let noInheritence = Object.create(null); // herhangi bir kalıtım(inheritence) almaz
console.log(noInheritence);

let standartObject = Object.create(Object.prototype); // standart obje kalıtımı alır. 
console.log(standartObject); 

let country = Object.create(countryTalk); // bu obje countryTalk isimli object literals den kalıtım alacağı için aynı property lere sahip olur.
country.country = "İngiltere";
console.log(country);