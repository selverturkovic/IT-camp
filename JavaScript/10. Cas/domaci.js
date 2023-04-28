// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

// const d = +prompt("Unesi duzinu terena u metrima: ");
// const s = +prompt("Unesi sirinu terena u metrima: ");
// const r = +prompt("Unesi rastojanje ograde od terena u metrima: ");

// const duzinaOgrade = 2 * d + 2 * s + 8 * r;
// if (isNaN(d) || isNaN(s) || isNaN(r)) {
//   console.log("Niste uneli broj");
// } else if (d < 90 || d > 120 || s < 45 || s > 90 || r < 2 || r > 10) {
//   console.log("Niste uneli trazeni interval.");
// } else {
//   console.log("Treba nam " + duzinaOgrade + " metara za ogradjivanje terena");
// }

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25.

const a = +prompt("Unesite broj iz intervala [12,16): ");

if (isNaN(a)) {
  console.log("Niste uneli broj.");
} else if (a < 12 || a >= 16) {
  console.log("Niste uneli broj iz intervala [12,16)");
} else {
  for (let i = a; i >= 1; i--) {
    console.log(i + "  " + i * i + " " + (i - 25));
  }
}
