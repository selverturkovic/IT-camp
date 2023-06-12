// Domaci zadaci:
// 1. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function brojevi(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Niste uneli broj";
  } else if (
    (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
    (a >= 70 && a <= 100 && b >= 70 && b <= 100)
  ) {
    return `Brojevi ${a} i ${b} su u intervalu [40,60] ili [70,100]`;
  } else {
    return `Brojevi ${a} i ${b} nisu u intervalu [40,60] ili [70,100]`;
  }
}
console.log(brojevi(40, 100));
console.log(brojevi(70, 100));
console.log(brojevi(43, 59));
// 2. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
function broja2(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Niste uneli brojeve";
  } else if (a >= 40 && a <= 60 && b >= 40 && b <= 60) {
    if (a > b) {
      return `Broj ${a} je veci od broja ${b}`;
    } else if (a === b) {
      return `Broj ${a} je jednak broju ${b}`;
    } else {
      return `Broj ${b} je veci od broja ${a}`;
    }
  } else {
    return "Niste uneli brojeve iz intervala [40,60]";
  }
}
console.log(broja2(50, 50));
console.log(broja2("a", 50));
console.log(broja2(64, 50));
console.log(broja2(45, 50));
