// ** Ternary Operator ile short if kullanimi

// eger kullanici adin varsa yazdır yoksa kullanici bilginiz bulunamadi yaz

let userName = prompt("Kullanıcı adınızı yazınız.");
let info = document.querySelector("#info");

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

//userName.length > 0 ? userName : 'Kullanici bilginiz bulunamadi :("

info.innerHTML = `${userName.length > 0 ? userName : 'Kullanici bilginiz bulunamadi :('}`