// For Dongusu
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

/* for (baslangicAtamasi; kosulİfdadesi; arttirimİfadesi;) {
    yapilacak islem
} 
*/

let users = ["Lorem", "Ipsum", "Dolor",];

/* for (let index = 0; index < 10; index++) {
    console.log(index);
} */

const userListDOM = document.querySelector('#userList');


for(index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li');
    liDOM.innerHTML = users[index];
    userListDOM.appendChild(liDOM);
}

for (index = 21; index < 40; index++) {
    console.log(index);
}

for (index = 1; index < 50; index++) {
    if (index % 2 == 1) {
        console.log(index);
    }
}