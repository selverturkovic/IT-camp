// Math.log(x) - vraca logaritam broja x za osnovu e
// Math.log2(x) - vraca logaritam broja x za osnovu 2
// Math.log10(x) - vraca logaritam broja x za osnovu 10

// Napraviti funkciju koja izracunava obim kruga, na osnovu
//  poluprecnika (parametra). O = 2 * r * PI

const obim = (r) => +(2 * r * Math.PI).toFixed(2);

console.log(obim(2));

// Izracunati rastojanje izmedu dve tacke u prostoru ako su zadate koordinate krajnjih tacaka.

function rastojanje(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(rastojanje(2, -3, 5, 4));

// Domaci:
// 1.
// Napraviti funkciju koja izracunava povrsinu kruga, gde
//  precnik predstavlja argument funkcije.

const povrsina = (r) => +(Math.pow(r, 2) * Math.PI).toFixed(2);
console.log(povrsina(10));
// 2.
// Napraviti funkciju za pretvaranje radijana u stepene.
const radijaniStepeni = (a) => +(a * (180 / Math.PI)).toFixed(2);

console.log(radijaniStepeni(Math.PI));
