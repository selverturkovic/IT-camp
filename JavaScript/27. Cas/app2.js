// JavaScript Math Object //

// JavaScript Math objekat nam dozvoljava da izvrsavamo razlicite zadatke sa brojevima.

// Math Properties (Svojstva-Konstante)

// Bilo kojoj matematickoj konstanti mozemo pristupiti:
// Math.property_name

// JavaScript nam obezbedjuje 8 razlicitih matematickih konstanti, kojima jedino
// mozemo pristupiti preko Math objekta.

Math.E;
Math.PI;
Math.SQRT2;
Math.SQRT1_2;
Math.LN2; //log za osnovu e od 2
Math.LN10;
Math.LOG2E;
Math.LOG10E;

// Napraviti funkciju koja trazi korisniku unos 7 vrednosti (svaka se odnosi na maksimalnu
// dnevnu temperaturu dana u nedelji). Funkcija treba da vrati temperaturu najtoplijeg dana u nedelji.

// najveci od 3 broja

function triBroja(prvi, drugi, treci) {
  if (isNaN(prvi) || isNaN(drugi) || isNaN(treci)) {
    return "Niste uneli broj";
  } else if (prvi >= drugi && prvi >= treci) {
    return "Najveci broj je " + prvi;
  } else if (drugi >= prvi && drugi >= treci) {
    return "Najveci broj je " + drugi;
  } else {
    return "Najveci broj je " + treci;
  }
}
console.log(triBroja(60, 60, 30));

function max(num1, num2, num3) {
  let maxNumber = num1;
  if (num2 >= num1 && num2 >= num3) {
    maxNumber = num2;
  } else if (num3 >= num1 && num3 >= num1) {
    maxNumber = num3;
  }
  return maxNumber;
}
console.log(max(50, 30, 20));
