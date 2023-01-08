// ** Template Literals Kullanimi
//Kaynak: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "merve";
const DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN;

console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email);

let info = `Merhaba ${username} sitemize hos geldin. mail adresin: ${email} 
kisa isminiz: ${username[0]}.

mail adresinin uzunlugu: ${email.length}
borcunuz ${(2 + 3) * 10} TL
gunun saat bilgisi: ${new Date().getHours()}`;
console.log(info);