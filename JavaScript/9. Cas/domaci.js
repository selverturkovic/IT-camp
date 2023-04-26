// Domaci:
// 1.
// Ispisati sve brojeve od 1 do 10 koji su parni

let broj3 = 2;
while (broj3 <= 10) {
  console.log(broj3);
  broj3 += 2;
}

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.
let broj1 = +prompt("Unesite prvi broj: ");
let broj2 = +prompt("Unesite drugi broj: ");

if (isNaN(broj1) || isNaN(broj2)) {
  console.log("Niste uneli broj.");
} else if (broj1 < broj2) {
  while (broj1 <= broj2) {
    console.log(broj1);
    broj1++;
  }
} else if (broj2 < broj1) {
  while (broj2 <= broj1) {
    console.log(broj2);
    broj2++;
  }
}
