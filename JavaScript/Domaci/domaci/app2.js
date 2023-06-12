// Napraviti funkciju koja trazi od korisnika unos 7 vrednosti (svaka se odnosi na maksimalnu dnevnu temperaturu dana u nedelji). Funkcija treba da vrati temperatutu najtoplijeg dana u nedelji.

// Write a JavaScript program to find the largest of three given integers.

function max(num1, num2, num3) {
  let maxNumber = num1;
  if (num2 >= num1 && num2 >= num3) {
    maxNumber = num2;
  } else if (num3 >= num1 && num3 >= num2) {
    maxNumber = num3;
  }
  return maxNumber;
}
console.log(max(2, 4, 6));
console.log(max(4, 8, 6));
console.log(max(10, 8, 6));

// Domaci zadaci:
// 1. Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjene prva i treca cifra, kao i druga i cetvrta cifra.
// 4752
// 5247

// 2. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
function cetvorocifren(a) {
  let hiljade = Math.floor(a / 1000);
  let stotine = Math.floor((a % 1000) / 100);
  let desetice = Math.floor((a % 100) / 10);
  let jedinice = a % 10;
  return +`${desetice}${jedinice}${hiljade}${stotine}`;
}
console.log(cetvorocifren(4752));

function pronadjiNajblizu100(a, b) {
  let razlikaA = a - 100;
  let razlikaB = b - 100;

  if (razlikaA * razlikaA === razlikaB * razlikaB) {
    return "Oba broja su jednako udaljena od broja 100.";
  } else if (razlikaA * razlikaA < razlikaB * razlikaB) {
    return a + " je bliže broju 100.";
  } else {
    return b + " je bliže broju 100.";
  }
}

console.log(pronadjiNajblizu100(95, 120));
console.log(pronadjiNajblizu100(85, 105));
console.log(pronadjiNajblizu100(90, 90));
