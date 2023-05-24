var b = 7;

let a = 4;

const c = 9;
// Cesto u literaturi cemo naici na tvrdnju da je JavaScript interpreterski jezik,
// ali to nije bas tako. U pozadini postoji JS masina koja vrsi pozadinsko kompajliranje pre izvrsavanja koda.
// Stoga nije pogresno reci da je JS kompajliran jezik.

// Pojam hoisting u JavaScriptu predstavlja izvlacenje svih deklaracija na vrhu skripte (fajla).

d = 11;
console.log(d);

// Kasnije deklarisanje neke promenljive je moguce preko var keyword, dok preko let i const nije dozvoljeno.

var d;
// let d;
// const d;

// Ispitati da li u unetom stringu ima vise malih ili velikih slova. Slova koja se koriste u
// stringu pripadaju iskljucivo engleskoj abecedi
const first = (recenica) => {
  let brojac = 0;
  let brojac1 = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] >= "a" && recenica[i] <= "z") {
      brojac++;
    } else if (recenica[i] >= "A" && recenica[i] <= "Z") {
      brojac1++;
    }
  }
  if (brojac > brojac1) {
    return `Vise ima malih slova. Ima ih ${brojac} dok velikih ima ${brojac1}`;
  } else if (brojac1 > brojac) {
    return `Vise ima velikih slova. Ima ih ${brojac1} dok malih ima ${brojac}`;
  } else {
    return `Dati string ima jednak broj velikih i malih slova, ${brojac}`;
  }
};

console.log(first("Treba imati VISE malih SLova"));
console.log(first("TREBA IMATI VISE velikih SLova"));
console.log(first("mala i VELIKA s"));
