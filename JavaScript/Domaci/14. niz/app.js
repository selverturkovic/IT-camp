// Domaci:
// Iz datog niza ispitati koliko elemenata je tipa string,
// koliko tipa number,
// koliko tipa boolean,
// koliko elemenata je zapravo niz?
// const nizz = [
//   "jagoda",
//   25,
//   true,
//   "mandarina",
//   [1, 2, 3],
//   "ananas",
//   49,
//   694,
//   "tresnja",
// ];
function elementi() {
  let nizz = [
    "jagoda",
    25,
    true,
    "mandarina",
    [1, 2, 3],
    "ananas",
    49,
    694,
    "tresnja",
  ];
  brojacZaString = 0;
  brojacZaNizz = 0;
  brojacZaBrojeve = 0;
  brojacZaBoolean = 0;
  for (let i = 0; i < nizz.length; i++) {
    if (typeof nizz[i] === "string") {
      brojacZaString++;
    } else if (Array.isArray(nizz[i])) {
      brojacZaNizz++;
    } else if (typeof nizz[i] === "number") {
      brojacZaBrojeve++;
    } else if (typeof nizz[i] === "boolean") {
      brojacZaBoolean++;
    }
  }
  return `Stringova ima ${brojacZaString}, nizova ima ${brojacZaNizz}, brojeva ima ${brojacZaBrojeve}, booleana ima ${brojacZaBoolean}`;
}
console.log(elementi());
