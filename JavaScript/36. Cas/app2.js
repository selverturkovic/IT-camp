// JavaScript Array Iteration metode //

// Array Iterator metode prolaze kroz svaki element niza.

// forEach() metoda poziva callback funkciju (koja predstavlja argument forEach() metode
// jednom za svaki element niza).
const brojevi = [2, 4, 6, 8, 10, 12];
//               vrednost pozicija niz
brojevi.forEach((element, index, array) => {
  //   console.log(index, element, array);
  console.log(element);
});

// callback funkcija (definisana kao gore sa forEach()) moze imati 3 elementa:
// 1. vrednost elementa
// 2. index(pozicija) elementa
// 3. ceo niz na koji se primenjuje metoda

// Preko petlje napraviti novi niz koji ce imati sve elemente originalnog niza.
// const brojevi = [2, 4, 6, 8, 10, 12];

function cloniranNiz(niz) {
  let broj = [];
  for (let i = 0; i < niz.length; i++) {
    broj.push(niz[i]);
  }
  return broj;
}
console.log(cloniranNiz([2, 4, 6, 8, 10, 12]));

const brojevi2 = [];
brojevi.forEach((element) => {
  brojevi2.push(element);
});
console.log(brojevi2);

// map array iteration metoda (objasnjenje)
