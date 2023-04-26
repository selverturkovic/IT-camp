// const d = +prompt("Unesi duzinu terena u metrima: ");
// const s = +prompt("Unesi sirinu terena u metrima: ");
// const r = +prompt("Unesi rastojanje ograde od terena u metrima: ");

// const duzinaOgrade = 2 * d + 2 * s + 8 * r;
// if (isNaN(d) || isNaN(s) || isNaN(r)) {
//   console.log("Niste uneli broj");
// } else if (d < 90 || d > 120 || s < 45 || s > 90 || r < 2 || r > 10) {
//   console.log("Niste uneli trazeni interval.");
// } else {
//   console.log("Treba nam " + duzinaOgrade + " metara za ogradjivanje terena");
// }

// Osnove o stringovima:
const recenica = "Necemo matematicke zadatke!";
console.log(recenica);

// Pristupanje nekom karakteru ide preko indeksa.
// Indeksiranje ide od 0!
// Poslednji karakter u stringu ima index (cela duzina stringa -1)!

console.log(recenica[0]);
console.log(recenica[7]);
// Za izracunavanje duzine stringa se koristi length metoda:
const duzina = recenica.length;
console.log(duzina);
// Ispisivanje poslednjeg karaktera datog stringa:
console.log(recenica[duzina - 1]);

// Domaci zadaci:
// 1. Zavrsiti zadatak za racunanje duzine ograde fudbalskog terena;
