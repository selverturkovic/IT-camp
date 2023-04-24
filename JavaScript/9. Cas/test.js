// Traziti od korisnika unos nekog realnog broja.
// Nakon toga ispisati u konzoli kvadrat tog broja (pozeljno je obuhvatiti kada korisnik ne unese odgovarajucu vrednost)

const broj = prompt("Unesite neki broj: ");

if (isNaN(broj)) {
  console.log("Niste uneli korektan broj.");
} else {
  console.log(broj ** 2);
}

// Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujuci) tako da:

// ako je broj deljiv sa 3, potrebno je ispisati FIZZ umesto tog broja;
// ako je broj deljiv sa 5, potrebno je ispisati BUZZ umesto tog broja;
//  ako je broj deljiv i sa 3 i sa 5 potrebno je ispisati FIZZ BUZZ umesto tog broja.

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZ BUZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else {
    console.log(i);
  }
}

// Ispisati prva tri broja koja su deljiva sa 4 i 6.

let brojac = 1;
for (let i = 1; brojac < 4; i++) {
  if (i % 4 === 0 && i % 6 === 0) {
    console.log(i);
    brojac++;
  }
}
