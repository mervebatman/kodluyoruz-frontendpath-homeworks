// **Boolen Veri Tipi ile Calismak

//0 ve 1'i anlamak
let isActive = false; // 0
isActive = true; //1
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

Boolean("11"); //true
Boolean("0"); //true
Boolean(""); //false

userName = "user";
console.log("User Name Var mi?:",Boolean(userName));

// 0, -0, null, false, NaN, undefined, ("")

console.log(Boolean(0)); //false
console.log(Boolean(-0)); //false
console.log(Boolean(-0.1)); //true
console.log(Boolean(0 == 0)); //true
console.log(Boolean(userName.length > 0)); //true ****

var myBoolean = true;
console.log(myBoolean); // returns true because of first line.
console.log(typeof myBoolean);

var x = 10 / 'a';
console.log(Boolean(x)); //False

var y = "" || -2 || 'JavaScript';
console.log(Boolean(y)); //true

var z = {2:'js'};
console.log(Boolean(z)); //true

var t = "" && -2 && 'JavaScript';
console.log(Boolean(t)); //false

var w = false || 0;
console.log(Boolean(w)); //false

var a = true;
console.log(Boolean(a)); //true

var y="" || -2|| 'Javascript'; console.log(Boolean(y)); 