// ** Koşullarla Çalışmak
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// eger Kullanici bilgisi varsa ekrana ismini yazdır
// eger (username.length > 0) {console.log(username);} degilse {console.log("Bilgi yok");}
// if (username.length > 0) {console.log(username);} else {console.log("Bilgi yok");}

let username = prompt("Kullanici adinizi giriniz: ");

if(username) { // if kismi her zaman true ise calisir
    console.log(`Kullanıcı adiniz: ${username}`);
}
else { 
    console.log("Bilgi yok");
}