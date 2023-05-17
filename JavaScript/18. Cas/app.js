// Za ekstraktovanje (uzimanje jednog karaktera) mozemo iskoristiti jedan od 3 nacina:

// charAt(index) metoda uzima jedan argument (argument predstavlja index) i vraca nam karakter
// koji zauzima tu poziciju.
// charCodeAt(index) metoda uzima jedan argument (argument predstavlja index) i vraca nam kod karaktera
// koji zauzima tu poziciju.
// string[index] nacin pristupa nekom karakteru iz stringa.
let recenica = "Recenica za uzimanje karaktera.";

console.log(recenica.charAt(4));
console.log(recenica.charCodeAt(4));
console.log(recenica[4]);

console.log(recenica.charAt(100)); // rezultat karaktera koji ne postoji daje "" prazan string
console.log(recenica[100]); //rezultat karaktera koji ne postoji daje undefined

// Za ekstraktovanje (uzimanje nekoliko karaktera) mozemo iskoristiti jednu od 3 metode:

// slice() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argument je pocetni
// indeks za uzimanje isecka, drugi argument je indeks do kojeg idemo.
// Drugi argument se ne ukljucuje!
// Drugi argument nije obavezan. Ako ga izostavimo, dobicemo string od prvog argumenta do kraja.
// slice() metoda omogucava koriscenje negativnih indeksa.
console.log(recenica.slice(12, 20));
console.log(recenica.slice(12));
console.log(recenica.slice(12));
console.log(recenica.slice(-10, -1));

// substring() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argument je pocetni
// indeks za uzimanje isecka, drugi argument je indeks do kojeg idemo.
// Ova metoda ne podrzava negativne indekse.
console.log(recenica.substring(12, 20));
console.log(recenica.substring(12));

// substr() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argument je pocetni
// indeks za uzimanje isecka, drugi argument je duzina tog isecka.
console.log(recenica.substr(3, 10));

// split() metoda nam sluzi da neki string pretvorimo u niz od jednog ili vise elemenata.
// Ako split metodu primenimo na neki string bez da joj posaljemo argument, dobicemo niz
// od samo jednog elementa (cela recenica je taj element).
console.log(recenica.split());

// Slanje nekog argumenta znaci da taj argument predstavlja karakter gde ce se deliti elementi niza

console.log(recenica.split(" ")); // Svaka rec predstavlja jedan element niza.

console.log(recenica.split("")); // Svaki karakter predstavlja jedan element niza.

console.log(recenica.split("*")); // dobili smo niz od jednog elementa (cela recenica)

// Zadatak: izracunavanje duzine reci
// Napisis funkciju koja prima jedan string kao argument i vraca broj karaktera u najduzoj reci u tom stringu.
// Pretpostavi da su reci odvojene samo jednim razmakom. Na primer za ulazni string "Danas je divan dan"
// funkcija treba da vrati broj 5.

// function najduzaRec(rec) {
//   let rec1 = rec.split(" ");
//   for (let i = 0; i < rec1.length; i++) {
//     if (rec1[i] === rec1.length) {
//     }
//   }
// }

function najduzaRec(string) {
  const nizReci = string.split(" ");
  let najduzaRec = nizReci[0];
  for (let i = 0; i < nizReci.length; i++) {
    if (nizReci[i].length > najduzaRec.length) {
      najduzaRec = nizReci[i];
    }
  }
  return najduzaRec.length;
}
console.log(najduzaRec(recenica));

// Napraviti funkciju koja uzima neki trocifren broj za argument i vraca zbir cifara tog broja.
// Na primer, za argument 234, rezultat treba biti 9.
// Pretvaranje broja u string se vrsi preko toString() metode.
