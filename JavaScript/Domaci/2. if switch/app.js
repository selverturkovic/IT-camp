// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

// 2. Zadatak - switch naredba
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.

const broj1 = +prompt(
  "Unesite prvi broj za izračunavanje površine kvadrata ako su isti brojevi (a*a), a pravougaonika ako su razliciti brojevi (a*b): "
);
const broj2 = +prompt(
  "Unesite drugi broj za izračunavanje površine kvadrata ako su isti brojevi (a*a), a pravougaonika ako su razliciti brojevi (a*b): "
);

// if (isNaN(broj1) || isNaN(broj2)) {
//   console.log("Niste uneli broj!!! ");
// } else if (broj1 === broj2 && broj1 > 0 && broj2 > 0) {
//   console.log("Povrsina kvadrata je: " + broj1 * broj2);
// } else if (broj1 != broj2 && broj1 > 0 && broj2 > 0) {
//   console.log("Povrsina pravougaonika je: " + broj1 * broj2);
// } else {
//   console.log("Uneli ste negativan broj ili 0, a povrsina se ne moze racunati negativnim brojevima ili nulom.");
// }

if (isNaN(broj1) || isNaN(broj2)) {
  console.log("Niste uneli broj!!! ");
} else if (broj1 <= 0 || broj2 <= 0) {
  console.log(
    "Uneli ste negativan broj ili 0, a povrsina se ne moze racunati negativnim brojevima ili nulom."
  );
} else if (broj1 != broj2) {
  console.log("Povrsina pravougaonika je: " + broj1 * broj2);
} else {
  console.log("Povrsina kvadrata je: " + broj1 * broj2);
}

const x = +prompt("Unesi realan broj x: ");
const y = Number(prompt("Unesi realan broj y: "));

switch (y) {
  case 0:
    console.log("Deljenje je nemoguce");
    break;
  default:
    console.log("Kolicnik brojeva x/y je: " + x / y);
}
