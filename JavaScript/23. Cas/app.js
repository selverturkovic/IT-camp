const zamenaMesta = (string) => {
  let noviString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.length % 2 !== 0 && i === string.length - 1) {
      noviString += string[i];
    } else if (i % 2 !== 0) {
      noviString += string[i - 1];
    } else if (i % 2 === 0) {
      noviString += string[i + 1];
    }
  }

  return noviString;
};

console.log(zamenaMesta("Pera ima devojku"));
console.log(zamenaMesta("Neparan broj karaktera."));

const pera = "Pera ima devojku";

let epar = "";
epar += pera[1];
epar += pera[0];
epar += pera[3];
epar += pera[2];
console.log(epar);

// 2
function spajanje(A, B) {
  let noviString = "";
  let duzina;
  //   if (A.length > B.length) {
  //     duzina = A.length;
  //   } else {
  //     duzina = B.length;
  //   }
  duzina = A.length > B.length ? A.length : B.length;
  for (let i = 0; i < duzina; i++) {
    if (!A[i]) {
      //!A[i] umesto A[i] === undefined
      noviString += B[i];
    } else if (B[i] === undefined) {
      noviString += A[i];
    } else {
      noviString += A[i] + B[i];
    }
  }

  return noviString;
}

console.log(spajanje("PERA", "sladoled"));
