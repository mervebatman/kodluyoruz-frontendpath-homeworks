// ** Coklu Kosullar İle Calismak

let userName = prompt("Kullanıcı Adınız: ");
let age = prompt("Yaşınız: ");
let info = document.querySelector("#info");

if(userName && age >= 18) {
    info.innerHTML = "Ehliyet alabilir.";
} else if (!userName) {
    info.innerHTML = "Kullanıcı adı bilgisi girmediniz!";
} else if (!(age>=18)) {
    info.innerHTML = "Yaş bilginiz yok veya 18 yaşından küçüksünüz!";
}