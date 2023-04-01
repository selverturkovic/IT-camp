// Kondicionali:

if ("prvi uslov") {
  // blok koda za izvrsavanje u slucaju da je zadovoljen prvi uslov
} else if ("drugi uslov") {
  //  blok koda za izvrsavanje u slucaju da je zadovoljen drugi uslov
} else {
  //  blok koda koji ce se izvrsiti u slucaju da sve prehodno nije zadovoljeno
}

// Ako je broj godina >= 18,
// neka se ispise poruka "punoletni ste", inace neka se ispise poruka "maloletni ste".
const brojGodina = 26;

if (brojGodina >= 18) {
  console.log("punoletni ste");
} else {
  console.log("maloletni ste");
}

// 2. zadatak
//  na osnovu dve promenljive x i y napisati program koji izracunava i stampa
// kolicniik x/y, ako je broj y razlicit od nule, a inace ispisuje poruku: Deljenje je nemoguce.

let x = 16;
let y = 2;
// let y = 0;

if (y === 0) {
  console.log("Deljenje je nemoguce");
} else {
  console.log(x / y);
}

//  Na osnovu promenljive brojGodina ispisati u konzoli sledece:
// ako je broj godina manji od 12: "Vi ste decijeg doba"
// ako je broj godina izmedju 12(ukljucuje) i 18 (ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40 (ne ukljucuje): vi ste punoletni
// ako je broj godina veci ili jednak 40: vi ste zrela osoba

if (brojGodina < 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina >= 12 && brojGodina < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina >= 18 && brojGodina < 40) {
  console.log("Vi ste punoletni");
} else {
  console.log("Vi ste zrela osoba");
}
