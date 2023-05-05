// Zadatak. Prebrojati koliko ima znakova koji su cifre u unetom stringu.

const recenica = prompt("Unesite recenicu: ");

let brojac = 0;
// for (let i = 0; i <= recenica.length; i++) {
//   if (
//     recenica[i] === "0" ||
//     recenica[i] === "1" ||
//     recenica[i] === "2" ||
//     recenica[i] === "3" ||
//     recenica[i] === "4" ||
//     recenica[i] === "5" ||
//     recenica[i] === "6" ||
//     recenica[i] === "7" ||
//     recenica[i] === "8" ||
//     recenica[i] === "9"
//   ) {
//     brojac++;
//   }
// }
// console.log(brojac);

// 2. nacin
for (let i = 0; i <= recenica.length; i++) {
  if (!isNaN(recenica[i]) && recenica[i] !== " ") {
    brojac++;
  }
}
console.log(brojac);

// Domaci
// Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

const recenica5 = prompt("Unesite recenicu: ");

let recenica6 = "";
for (let i = 0; i < recenica5.length; i++) {
  if (recenica5[i] === " ") {
    continue;
  } else {
    recenica6 += recenica5[i];
  }
}
console.log(recenica6);
