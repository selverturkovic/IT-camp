// JavaScript Globalne metode//

// Globalne metode mozemo primeniti na bilo koji tip podatka://

// Pomenucemo najpoznatije globalne metode:

// 1. Number()
// 2. parseFloat()
// 3. parseInt()

// 1. Number() - metoda vraca broj dobijen konvertovanjem argumenta.

console.log(Number("string")); // NaN

console.log(Number("34")); // 34

console.log(Number("  34  ")); // 34 - Brise razmake sa strana i prevodi string u broj
console.log(Number("34 43")); // NaN - Razmaci izmedju nisu dozvoljeni.

console.log(Number(true)); // 1

console.log(Number(false)); // 0

console.log(Number([1, 2])); //  NaN

console.log(Number([])); //  0

console.log(Number([{}])); //  NaN

// 2. parseFloat() - metoda vraca realan broj (sa decimalnim zapisom) dobijen konvertovanjem
// argumenta.

console.log(parseFloat("string")); // NaN

console.log(parseFloat("34")); // 34

console.log(parseFloat("  34  ")); // 34 - Brise razmake sa strana i prevodi string u broj
console.log(parseFloat("34.456")); //34.456
console.log(parseFloat("34 43")); // 34 - razmaci su dozvoljeni. Parsira se samo prva vrednost.

console.log(parseFloat("3asd4 43")); // 3 razmaci su dozvoljeni. Parsira se samo prva vrednost.

console.log(parseFloat("asd 43")); // 3 razmaci su dozvoljeni. Parsira se samo prva vrednost.

console.log(parseFloat(true)); // NaN

console.log(parseFloat(false)); // NaN

console.log(parseFloat([6, 2])); //  6 - parsira vrednost prvog elementa niza

console.log(parseFloat([])); //  NaN

console.log(parseFloat([{}])); //  NaN

// 2. parseInt() - metoda vraca realan broj (ceo) dobijen konvertovanjem
// argumenta.

console.log(parseInt("string")); // NaN

console.log(parseInt("34")); // 34

console.log(parseInt("  34  ")); // 34 - Brise razmake sa strana i prevodi string u broj
console.log(parseInt("34.456")); //34

console.log(parseInt("34.856")); // 35
console.log(parseInt("34 43")); // 34 -  Parsira se samo prva vrednost.

console.log(parseInt("3asd4 43")); // 3  Parsira se samo prva vrednost.

console.log(parseInt("asd 43")); // 3 razmaci su dozvoljeni. Parsira se samo prva vrednost.

console.log(parseInt(true)); // NaN

console.log(parseInt(false)); // NaN

console.log(parseInt([6, 2])); //  6 - parsira vrednost prvog elementa niza

console.log(parseInt([])); //  NaN

console.log(parseInt([{}])); //  NaN

// Napraviti funkciju koja:
// a) pretvara km u m
// b) prevara m u km broj zaokruzen na dve decimale
// c) pretvara inch u cm

function kmToM(km) {
  return km * 1000;
}
console.log(kmToM(1.5));

//2. Napraviti funkciju koja prima jedan argument (broj) i vraca poruku da li je dati argument palindrom.

const palindrom = (broj) => {
  let broj = "";
  let pal = "";
  for (let i = broj.length - 1; i >= 0; i--) {
    pal = broj[i];
  }
  return pal;
};
console.log(palindrom(1221));
