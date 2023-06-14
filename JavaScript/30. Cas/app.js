// Funkcija koja vraca nzd od dva argumenta.

const NZD = (br1, br2) => {
  const manji = br1 > br2 ? br2 : br1;
  let NZD = 1;

  for (let i = manji; i >= 1; i--) {
    if (br1 % i === 0 && br2 % i === 0) {
      NZD = i;
      break;
    }
  }
  return NZD;
};
console.log(NZD(6, 4));
console.log(NZD(3, 4));
console.log(NZD(8, 12));

// Napisi javascript funkciju da dobijemo NZS za dva broja.

const NZS = (br1, br2) => {
  const veci = br1 > br2 ? br1 : br2;
  let NZS = veci;
  //   let i = veci;
  for (let i = veci; i < Infinity; i++) {
    if (i % br1 === 0 && i % br2 === 0) {
      NZS = i;
      break;
    }
  }
  //   while (true) {
  //     if (i % br1 === 0 && i % br2 === 0) {
  //       NZS = i;
  //       break;
  //     }
  //     i++;
  //   }
  return NZS;
};

console.log(NZS(3, 4));
console.log(NZS(6, 8));
console.log(NZS(2, 3));
