// Trazite unos korisnickog imena sve dok korisnik ne unese ispravno korisnicko ime.
// (npr. duzina korisnickog imena mora biti najmanje 6 karaktera)

let username = "";
while (username.length < 6) {
  username = prompt("Unesite ispravan username: ");
  console.log(username, username.length); // provera
}

// DRY Dont repeat yourself

// Funkcije predstavljaju deo koda koji ce se izvrsiti samo u slucaju njihovog pozivanja.
// Koristimo ih da bi nas kod bio reusable( isti kod resava vise problema slicnog tipa).

// Funkciju mozemo napraviti na dva nacina:
// 1. Preko function keyword;
// 2. Arrow function.

// 1.
function myFunc() {
  // kod unutar funkcije
}

// 2.
const myFunc2 = () => {
  // kod unutar funkcije
};

// funkcija koja ispisuje zdravo
function greeting(parametar1) {
  console.log("Zdravo");
}
greeting("argument");
// Prilikom definisanja funkcije mozemo joj proslediti parametre koji su neophodni za
// izvrsavanje koda date funkcije.
// Dok prilikom pozivanja funkcije to sto saljemo funkciji se zove argumenti.
function greeting2(ime) {
  console.log("Zdravo " + ime);
}
greeting2("Tarike");

// Napraviti funkciju koja nam vraca zbir 3 i 5
function zbirTriIPet() {
  const prom1 = 3;
  const prom2 = 5;
  //   Kada se izvrsi cela logika funkcije, krajnji rezultat treba vratiti u return keyword
  // (rezervisanoj reci)
  return prom1 + prom2;
  //   console.log("Nesto") kod koji se nadje nakon return u function scope se nece primeniti
}

// Napraviti funkciju koja vraca zbir dva broja
function zbirDvaBroja(br1, br2) {
  return br1 + br2;
}
console.log(zbirDvaBroja(10, 5));

// Dodeljivanje defaultne vrednosti se moze izvrsiti na dva nacina:

// 1.
function zbirDvaBroja2(br1, br2) {
  if (br2 === undefined) {
    return br1;
  } else {
    return br1 + br2;
  }
}
console.log(zbirDvaBroja2(34));

// 2.
function zbirDvaBroja3(br1, br2 = 0) {
  return br1 + br2;
}
console.log(zbirDvaBroja3(15));
console.log(zbirDvaBroja3(15, 12));
