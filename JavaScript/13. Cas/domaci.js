// Domaci zadaci:

//  1. Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

// 2. Napraviti novu recenicu gde ce umesto slova "a" pisati "t".
// Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

//  3. Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	ostali karakteri se ne menjaju.

// 1.
// const recenica5 = prompt("Unesite neku recenicu: ");
// let recenica6 = "";
// for (let i = 0; i < recenica5.length; i++) {
//   if (recenica5[i] === " ") {
//     continue;
//   } else {
//     recenica6 += recenica5[i];
//   }
// }
// console.log(recenica6);

// 2.
const recenica4 = prompt("Unesite neku recenicu: ");
let recenica7 = "";

for (let i = 0; i < recenica4.length; i++) {
  if (recenica4[i] === "a" && recenica4[i + 1] === "n") {
    recenica7 += "d";
  } else if (recenica4[i] === "a") {
    recenica7 += "t";
  } else {
    recenica7 += recenica4[i];
  }
}
console.log(recenica7);

// 3.
let recenica = "";

for (let i = 0; i < recenica4.length; i++) {
  if (
    recenica4[i] === "a" ||
    recenica4[i] === "e" ||
    recenica4[i] === "i" ||
    recenica4[i] === "o" ||
    recenica4[i] === "u"
  ) {
    recenica += recenica4[i].toUpperCase();
  } else {
    recenica += recenica4[i];
  }
}
console.log(recenica);
