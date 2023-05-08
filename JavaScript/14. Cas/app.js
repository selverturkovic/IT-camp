const zbirKvadrata = function (a, b) {
  if (a === b) {
    return "Povrsina kvadrata iznosi: " + a * b;
  } else {
    return "Povrsina pravougaonika iznosi: " + a * b;
  }
};

console.log(zbirKvadrata(4, 5));
console.log(zbirKvadrata(5, 5));

// Arrow function:
const kvadratBroja = (a) => {
  return a ** 2;
};
console.log(kvadratBroja(4));

// Ako Arrow function ima samo jedan parametar nije neophodno stavljati ga u zagradama.
// Ako funkcija vraca neki jednostavan izraz (prethodno nije bilo dodatnog koda) mozemo
// izostaviti viticaste zagrade i return keyword.

const kvadratBroja2 = (a) => a ** 2;

const funkcija = () => {
  const broj = +prompt("Unesite neki broj: ");
  if (isNaN(broj)) {
    return "Uneta vrednost nije broj.";
  } else if (broj > 0) {
    return "Uneli ste pozitivan broj.";
  } else if (broj < 0) {
    return "Uneli ste negativan broj.";
  } else {
    return "Uneli ste nulu.";
  }
};
funkcija(); // takodje se izvrsava
console.log(funkcija()); // ispisujemo u konzoli radi provere

const radnoVreme = function (sat, min = 0) {
  if (sat >= 9 && sat < 17 && min < 60 && min >= 0) {
    return "Da, mejl je stigao u toku radnog vremena.";
  } else {
    return "Ne, mejl nije stigao u toku radnog vremena.";
  }
};
console.log(radnoVreme(16, 0));
