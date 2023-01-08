// ** Array forEach Metodu
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//https://www.w3schools.com/jsref/jsref_foreach.asp

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];

PRODUCTS.forEach((product, index, array) => console.log(product, index, array));

//PRODUCTS.forEach((product, index, array) => array[index] = product + " 111");
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`);

console.log(PRODUCTS);

const userListDOM = document.querySelector('#userList');

PRODUCTS.forEach( item => {
    const liDOM = document.createElement('li');
    liDOM.innerHTML = item ;
    userListDOM.append(liDOM);
});