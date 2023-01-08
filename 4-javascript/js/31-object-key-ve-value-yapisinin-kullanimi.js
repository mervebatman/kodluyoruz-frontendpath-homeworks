// Object Key - Value:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "1kg": 1,
    modelName: "Macbook Pro"
}

console.log(laptop1);

// Dogru Anahtar Bilgisi Olusturmak
console.log(laptop1.brand, laptop1["brand"]);
console.log(laptop1.model, laptop1["model"]);
console.log(laptop1["1kg"]);

// Anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1";
console.log(laptop1);

// Yeni Bilgi Eklemek
laptop1.version = "10.15.7";
console.log(laptop1);

// Anahtar bilgisine Ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1);
console.log(keys);
console.log(Object.keys(laptop1));

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
});

// Deger Bilgilerine Ulasmak (values) -> Object.values(item)
console.log(Object.values(laptop1));

let values = Object.values(laptop1);

values.forEach(valueInfo => {
    console.log("value: ", valueInfo)
})

let settings = {
    password: 1234,
    userName: 'user1'
}

let person = {};
person["likes sea"] = true;
console.log(person);