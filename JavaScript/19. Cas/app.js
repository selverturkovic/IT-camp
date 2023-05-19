// Search metode:

const recenica = "danas je lep dan.";
// indexOf() metoda nam vraca poziciju karaktera (niza karaktera) koje smo poslali kao argument.
// Ako se argument nalazi vise puta unutar stringa dobijamo poziciju prvog pojavljivanja tog argumenta.
// Ako se argument ne nadje unutar stringa rezultat ce biti -1.

console.log(recenica.indexOf("d"));
console.log(recenica.indexOf("dan"));
console.log(recenica.indexOf("noc"));
console.log(recenica.indexOf("nas"));

// lastIndexOf() metoda nam vraca poziciju poslednjeg pojavljivanja karaktera
//  (niza karaktera) koje smo poslali kao argument.
// Ako se argument ne nadje unutar stringa rezultat ce biti -1.

console.log(recenica.lastIndexOf("dan"));
console.log(recenica.lastIndexOf("lep"));
console.log(recenica.lastIndexOf("noc"));

// Obe metode prihvataju drugi argument, koji oznacava poziciju od koje pocinje trazenje.
// Napomena. Brojac se ne resetuje, ako krenemo od drugog argumenta da trazimo, i
// brojanje ide od drugog argumenta.

console.log(recenica.indexOf("dan", 6));
console.log(recenica.indexOf("danas", 6));

// search() metoda takodje vraca poziciju trazenog stringa, s tim sto kod ove metode
// ne mozemo poslati drugi argument.
// Ako se argument ne nadje unutar stringa rezultat ce biti -1.
console.log(recenica.search("dan"));
console.log(recenica.search("noc"));

// startsWith() metoda proverava da li neki string pocinje argumentom koji joj saljemo.
// vraca boolean (true ili false).
// Opciono mozemo poslati drugi argument koji ce da bude index od kojeg zelimo da trazimo
// poziciju nekog stringa.
console.log(recenica.startsWith("Danas"));
console.log(recenica.startsWith("dan"));
console.log(recenica.startsWith("je", 6));

// endsWith() metoda proverava da li neki string zavrsava argumentom koji joj saljemo.
// vraca boolean (true ili false).
// Opciono mozemo poslati drugi argument koji predstavlja ukupnu duzinu posmatranja naseg stringa.
console.log(recenica.endsWith("dan"));
console.log(recenica.endsWith("dan."));
console.log(recenica.length);
console.log(recenica.endsWith("dan", 15)); //false
console.log(recenica.endsWith("dan", 16)); //true

// function podstring(orginal, pocetni, krajnji) {
//   return orginal.slice(pocetni, krajnji + 1);
// }
// console.log(podstring("Hello, World", 7, 11));
const deoStringa = (string, pocetak, kraj) => {
  //   return string.slice(pocetak, kraj + 1); prvi nacin
  return string.substr(pocetak, kraj + 1 - pocetak); //drugi nacin
};

console.log(deoStringa("Hello, World!", 7, 11));

const deoStringa1 = (string, pocetak, kraj) => {
  let noviString = "";
  for (let i = pocetak; i <= kraj; i++) {
    noviString += string[i];
  }
  return noviString;
};
console.log(deoStringa1("Hello, World!", 7, 11));
