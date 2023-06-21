// JavaScript Array methods //

// toString() i join() metode konvertuju niz u string.

const arr = [1, 2, 3, 4, 5];
console.log(arr.toString());

console.log(arr.join());
// join prihvata argumeta koji predstavlja karakter (niz karaktera) koji ce se naci izmedju
// elemenata (u novodobijenom stringu).
console.log(arr.join("*"));

// push() metoda dodaje novi element (vise elemenata) na kraju niza.
const fruits = ["strawberry", "pineapple", "orange"];

fruits.push("pear");
console.log(fruits);

console.log(fruits.push("mango", "apple", "banana")); // push predstavlja duzinu niza sa
// novim elementima.
console.log(fruits);

// pop() metoda brise poslednji element niza.
fruits.pop();
console.log(fruits);
console.log(fruits.pop());

// shift() metoda brise prvi element niza, svi ostali elementi se vracaju za jedno mesto.

console.log(fruits.shift()); // predstavlja vrijednost izbrisanog elementa.
console.log(fruits);

// unshift() metoda dodaje element (vise elemenata) na pocetku niza.

console.log(fruits.unshift("peach", "watermeleon")); // vraca broj elemenata niza sa ova 2
console.log(fruits);

// delete metoda brise odredjeni element niza.
// Koriscenjem delete metode izbrisati zeljeni element niza, ali nije preporuka koristiti tu metodu vec pop() ili shift()
// delete metoda ostavlja prazna (undefined) polja. Ne brise se element u potpunosti.

delete fruits[fruits.length - 1];
delete fruits[3];
console.log(fruits);
