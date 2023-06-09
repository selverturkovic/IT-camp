// Napraviti funkciju koja:
// a) pretvara km u m
// Domaci:
// b) pretvara m u km
// c) pretvara inch u cm

const kmToM = (km) => {
  return km * 1000;
};
console.log(kmToM(1.5));

const mToKm = (m) => {
  return (m / 1000).toFixed(2);
};

console.log(mToKm(300));

const inchToCm = (inch) => {
  return (inch * 2.54).toFixed(2);
};
console.log(inchToCm(30000));
// 2. Napraviti funkciju koja prima jedan argument (broj) i vraca poruku da li je
// dati argument palindrom.

function palindrom(a) {
  let string = a.toString();
  let i = 0;
  let j = string.length - 1;
  while (i < j) {
    if (string[i] !== string[j]) {
      return "Dati broj nije palindrom";
    }
    i++;
    j--;
  }
  return "Dati broj je palindrom";
}
console.log(palindrom(123321));
console.log(palindrom(123322));

// 3. Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifru desetice).

function trocifreniBroj(trocifren) {
  const jedinice = trocifren % 10;
  // const desetice = parseInt((trocifren % 100) / 10); nepotrebno
  const stotine = parseInt(trocifren / 100);
  return `${stotine}${jedinice}`;
}
console.log(trocifreniBroj(345));
