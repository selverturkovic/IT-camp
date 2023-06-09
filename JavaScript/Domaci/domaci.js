// Domaci zadaci:
// 1.
// a=int(input('Unesite prvu potencijalnu stranicu pravougaonika: '))
// b=int(input('Unesite drugu potencijalnu stranicu pravougaonika: '))
// c=int(input('Unesite trecu potencijalnu stranicu pravougaonika: '))
// d=int(input('Unesite cetvrtu potencijalnu stranicu pravougaonika: '))

// function pravougaonik() {
//   let a = +prompt("Unesite prvu potencijalnu stranicu pravougaonika.");
//   let b = +prompt("Unesite drugu potencijalnu stranicu pravougaonika.");
//   let c = +prompt("Unesite trecu potencijalnu stranicu pravougaonika.");
//   let d = +prompt("Unesite cetvrtu potencijalnu stranicu pravougaonika.");
//   if (
//     (a === b && a === c && a === d) ||
//     (a === d && b === c) ||
//     (a === c && b === d) ||
//     (a === b && c === d)
//   ) {
//     return "Uneli ste stranice koje obrazuju pravougaonik";
//   } else {
//     return "Niste uneli stranice koje obrazuju pravougaonik";
//   }
// }
// console.log(pravougaonik());
// 2. Unesite broj sekundi koji zelite pretvoriti u sate, minute i sekunde:

// 1 sat ima 60 minuta
// 1 sat ima 60*60 = 3600 sekundi
// 1 minut ima 60 sekundi

// 123

function sekunde(sekunde1) {
  let sati = Math.floor(sekunde1 / 3600);
  let minuti = Math.floor((sekunde1 % 3600) / 60);
  let brojSekundi = Math.floor(sekunde1 % 60);
  return "sati " + sati + " Minuti " + minuti + " sekunde " + brojSekundi;
}
console.log(sekunde(200));
