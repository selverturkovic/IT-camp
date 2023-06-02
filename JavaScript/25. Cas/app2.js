// number metode:

// toString() metoda vraca string (broj tipa string).
// Ova metoda se moze primeniti na bilo koji tip podatka.

let x = 144;
let y = x.toString();
console.log(y);
console.log(typeof y);

console.log(y + 5);

// toFixed() metoda vraca broj zaokruzen na onoliko decimala koliko je argument poslat metodi.
// Dobijena vrijednost je tipa string.
z = 122.245534453;
console.log(z);
let broj = z.toFixed(2);
console.log(broj);
console.log(typeof broj);

// toPrecision() metoda vraca broj sa ukupnim brojem cifara koliki je argument poslat metodi
// Dobijena vrijednost je tipa string.

let broj2 = z.toPrecision(4);
console.log(broj2);
console.log(typeof broj2);

// Bolji u dve discipline
function bolji(mat1, pro1, mat2, pro2) {
  let prvi = mat1 + pro1;
  let drugi = mat2 + pro2;
  if (drugi > prvi) {
    return "Pobedio je drugi takmicar";
  } else if (prvi === drugi) {
    if (pro1 < pro2) {
      return "Pobedio je drugi takmicar";
    } else {
      return "Pobedio je prvi takmicar";
    }
  } else {
    return "Pobedio je prvi takmicar";
  }
}
console.log(bolji(34, 40, 45, 45));
console.log(bolji(50, 50, 45, 45));
console.log(bolji(50, 50, 50, 50));
console.log(bolji(23, 32, 32, 23));
// Domaci zadatak 2 zadatka
// Unesite broj sekundi koji zelite pretvoriti u sate, minute i sekunde.
// 1 sat ima 60 minuta
// 1 minut ima 60 sekundi.
// 1 sat ima 60*60=3600 sekundi
