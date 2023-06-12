// Math methods //

// Sintaksa za bilo koju matematicku metodu je sledeca:
//Math.method(number)

// Number to Integer //

// Postoje 4 razlicite metode za dobijanje celog broja slanjem broja s decimalnim zapisom

// Math.round(x) - vraca blizi ceo broj broju x.

console.log(Math.round(3.145234324));

// Math.ceil(x) - vraca sledeci ceo broj broja x.

console.log(Math.ceil(3.1234235235));
console.log(Math.ceil(-3.1234235235));

// Math.floor(x) - vraca prethodni ceo broj broja x.

console.log(Math.floor(3.8934235235));
console.log(Math.floor(-3.8934235235));

// Math.trunc(x) - vraca ceo broj odstranjujuci decimalni ostatak.

console.log(Math.trunc(3.8934235235));
console.log(Math.trunc(-3.8934235235));

// Math.sign() - metoda vraca:
// 1 ako je x pozitivan broj;
// 0 ako je x nula;
// -1 ako je x negativan broj;

console.log(Math.sign(34));
console.log(Math.sign(-34));
console.log(Math.sign(0));

// Math.pow(x,y) - vraca broj x stepenovan brojem y

console.log(Math.pow(2, 3)); //2*2*2
console.log(Math.pow(6, 2)); // 6*6

// Math.sqrt(x) vraca kvadratni koren broja x.

console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(25)); // 5

// Math.abs(x) - vraca apsolutnu vrednost broja x.

console.log(Math.abs(124));
console.log(Math.abs(-124));
console.log(Math.abs(-124.456));

// Math.sin(x) - vraca sinus (vrednost izmedju -1 i 1 ukljucujuci oba) nekog ugla x (datog u radijanima).

console.log(Math.sin(Math.PI / 2));

// Math.cos(x) - vraca cosinus (vrednost izmedju -1 i 1 ukljucujuci oba) nekog ugla x (datog u radijanima).

console.log(Math.cos(Math.PI));

function pronadjiNajblizu100(a, b) {
  let razlikaA = Math.abs(a - 100);
  let razlikaB = Math.abs(b - 100);

  if (razlikaA === razlikaB) {
    return "Oba broja su jednako udaljena od broja 100.";
  } else if (razlikaA < razlikaB) {
    return a + " je bliže broju 100 od broja" + b;
  } else {
    return b + " je bliže broju 100 od broja" + a;
  }
}

console.log(pronadjiNajblizu100(95, 120));
console.log(pronadjiNajblizu100(85, 105));
console.log(pronadjiNajblizu100(90, 90));
