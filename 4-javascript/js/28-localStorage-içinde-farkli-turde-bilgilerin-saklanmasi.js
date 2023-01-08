// Local Storage İslemleri

let user = {userName: "mervebatman", isActive: true}
console.log(user);

localStorage.setItem("userInfo", JSON.stringify(user));

let userInfo = localStorage.getItem("userInfo"); // bilgiyi al
userInfo = JSON.parse(userInfo);
console.log(userInfo);

let items = [1, 2, 3, user];
localStorage.setItem('newItem', JSON.stringify(items));
JSON.parse(localStorage.getItem('newItem'));
console.log(items);