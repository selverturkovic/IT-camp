// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

const recenica =
  "treba nam nova recenica gde ce se svaka rec zavrsavati velikim slovom";

let recenica2 = "";
for (let i = 0; i < recenica.length; i++) {
  if (i === recenica.length - 1) {
    recenica2 += recenica[i].toUpperCase();
  } else if (recenica[i + 1] === " ") {
    recenica2 += recenica[i].toUpperCase();
  } else {
    recenica2 += recenica[i];
  }
}
console.log(recenica2);

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.

const string = prompt("Unesite neku recenicu: ");

brojac = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === "m" || string[i] === "M") {
    brojac += 1;
  }
}
console.log("U recenici " + string + " ima " + brojac + " slova m.");
