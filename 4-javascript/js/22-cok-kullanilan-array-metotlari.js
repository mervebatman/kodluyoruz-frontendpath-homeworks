// Cok kullanilan Array metotları ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5];

// Array icinde Array
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);

items.push(maleUsers);

console.log(items);

console.log(items.length);
console.log(items[0].length); // array icindeki istedigimiz Array'in length bilgisiini aldik
console.log(items[0][0]); // Ayse bilgisine ulastik

// Array icerisinde oge ayirmak -> splice(pos, item?)
let newItems = items.splice(1,5);

console.log("newItems: ", newItems);
console.log("items", items);

// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf("ipsum"));

// Array kopyalamak -> slice, [...ES6]
let copyItems = items;
console.log(items);

copyItems.pop(); //son ogeyi cikarttik
console.log("copyItems: ",copyItems);
console.log("items: ", items);

console.log("Kopyalandıktan sonraki hali")
copyItems = items.slice(); // kopyalama yapti
copyItems.pop(); //son ogeyi cikarttik
console.log("copyItems: ",copyItems);
console.log("items: ", items);

let es6Items = [...items]; //es6 ve sonrasdinde gelen kopyalama islemi
console.log(es6Items);

// Iki Array bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers,...maleUsers]; //es6 birden fazla array yapisini birlestirmek
console.log(allUsers);

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

//Istedigimiz Index bilgisine oge eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length, 0, "Melissa");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem");
console.log(allUsers);

/* Soru 1;
let dizi = [2,5,8,11,15,17];

 Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
 */

let dizi = [2, 5, 8, 11, 15, 17];
let filtreSayi = dizi.filter(function(sayi) {
    return sayi > 10;
});
let sayiCarpim = filtreSayi.map(function(sayi){
    return sayi*5;
});

console.log(`Soru 1; ${dizi} tanımlanmış olan dizide 10 dan büyük olanları sırala; ${filtreSayi};
Daha sonra ise bu sayıları 5 ile çarpılmış hali: ${sayiCarpim}`);

/* Soru 2;
let dizi = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi){
// Kodunuzu buraya yazın.
}

myFunction(dizi); */

/* Soru 3;
let dizi = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız. */