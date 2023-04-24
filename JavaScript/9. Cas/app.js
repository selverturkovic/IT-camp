// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// While petlja se takodje koristi za iteraciju kroz neki objekat i izvrsavanje
// odredjenog koda.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// do while petlja se koristi za iteraciju kroz neki objekat, s tim sto u ovakvoj petlji imamo prvo
// izvrsavanje koda pa tek onda ispitivanje uslova.
let k = 5;
do {
  console.log(k);
  k++;
} while (k < 10);

let broj = 15;
do {
  console.log(broj);
  broj++;
} while (broj <= 10);

// Traziti od korisnika da unese neki broj.
// Na osnovu te vrednosti da se izvrsi ispis kvadrata brojeva od 1 do unetog broja:
const broj1 = +prompt("Unesite neki broj: ");

let broj2 = 1;
while (broj2 <= broj1) {
  console.log(broj2 ** 2);
  broj2++;
}

// Traziti unos brojeva od korisnika sve dok ne unese nulu.
let vrednost = 1; //sve sem nule
while (vrednost !== 0) {
  vrednost = +prompt("Unesite neku vrednost: ");
}
