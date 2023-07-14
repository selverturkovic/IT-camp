// Domaci:
// 1. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
const brojevi = (niz) => {
  let niz1 = niz
    .filter((parniBrojevi) => parniBrojevi % 2 === 0)
    .map((kvadratParnogBroja) => kvadratParnogBroja ** 2)
    .reduce((prev, curr) => prev + curr);
  return niz1;
};
console.log(brojevi([2, 3, 4, 5, 6, 7]));
// 2. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
const stringovi = ["The", "Quick", "BroWn", "Fox"];
const swap = stringovi.map((string) => {
  let zamenjeniString = "";
  for (let i = 0; i < string.length; i++) {
    let karakter = string[i];
    zamenjeniString +=
      karakter === karakter.toLowerCase()
        ? karakter.toUpperCase()
        : karakter.toLowerCase();
  }
  return zamenjeniString;
});

console.log(swap);

