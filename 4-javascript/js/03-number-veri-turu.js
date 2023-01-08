// ***Number Veri Tipi

//number veri turu tanimlamak
let price = 100;
let tax = 0.10;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
    "Fiyat:", price,
    "KDV Orani:", tax,
    "KDV Tutari:", priceTax, 
    "Fiyat:", total
);

let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);
console.log("Number Constractor icine bilgi gonderildi:",Number("111"));


//arttirma ve azaltma islemleri
let counter = 320;
counter = counter + 1;
console.log(counter); //uzun yontem

counter ++;
console.log(counter);

counter --;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 2;
console.log(counter);

//islem onceligi
console.log(2 + 3 * 10);
console.log((2 + 3) * 10);

//mod(kalan) alma %
//sayi tek mi cift mi
console.log(14 % 2); //0 ise cift 1 ise tek

//8 urun alan koliye tum urunler sigiyor mu
console.log("Koli Kalan Urun Ornegi:", 18 % 8);

//us alma
console.log(2 ** 4);

//asagi yuvarlama islemi
console.log("Asagi yuvarlama:",Math.floor(1.7));

//yukari yuvarlama islemi
console.log("Yukari yuvarlama:", Math.ceil(1.2));

//yakina yuvarlama islemi
console.log("Yakina yuvarlama:", Math.round(1.5));