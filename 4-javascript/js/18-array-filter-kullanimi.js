// Array Filter Kullanimi
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 5 harften fazla olanlar ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5);
console.log(NEW_PRODUCTS);

// aktif olanlar ??
const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false},
];

//const ACTIVE_USERS = USERS.filter(user => user.isActive === true);
const ACTIVE_USERS = USERS.filter(user => user.isActive);

console.log(ACTIVE_USERS);

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];

//Soru 1 30 yaşından büyük olan kişiyi getir
const age = person.filter(person => person.age > 30);
console.log(age);

//Soru 2 Javascript bilen kişiyi getir
const language = person.filter(function second(person){
    return person.languages.includes("JavaScript");
});
console.log(language);