// ** Veri Turu Ogrenme ve Veri Turu Donusumu

//Veri turunu ogrenme -->Typeof
let price = 111;
let stringPrice = "111";
let hassPassword = true;

console.log("Price:",typeof(price));
console.log("stringPrice:",typeof(stringPrice));
console.log("hassPassword:",typeof(hassPassword));

//String(metinsel) bilgileri int ve float'a donusturme
let number1 = "11";
number1 = parseInt(number1);
console.log("number1",number1,typeof(number1)); //Integer'a donusturduk

let number2 = "11px";
number2 = parseInt(number2);
console.log("number2:", number2, typeof(number2)); //Integer'a donusturdu

let number3 = "11";
number3 = Number(number3);
console.log("numbeer3:", number3, typeof(number3));

let number4 = "11.4";
number4 = parseFloat(number4);
console.log("number4:", number4, typeof(number4));

// number veri tipinden string'e donusturme
let number5 = 55;
number5 = number5.toString();
console.log(number5, typeof(number5));