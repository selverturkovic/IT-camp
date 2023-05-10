const isSunny = true;

if (isSunny) {
  console.log("Napolju je suncano.");
} else {
  console.log("Napolju nije suncano.");
}

// Postoji 8 FALSY vrednosti, to su:

// 1. false
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN // tip number, a vrednost nije korektan broj
// 7. undefined // deklaracija izvrsena, ali ne dodela vrednosti
// 8. null

function vrednost() {
  const userInput = prompt("Unesite neku vrednost: ");
  if (userInput) {
    return "Uneli ste truthy vrednost.";
  } else {
    return "Uneli ste falsy vrednost.";
  }
}

console.log(vrednost());

// Ako korisnik unosi broj:
function isTruthyNumber() {
  const userInput = +prompt("Unesite neki broj: ");
  if (userInput) {
    return "Uneli ste truthy vrednost.";
  } else {
    return "Uneli ste falsy vrednost.";
  }
}

console.log(isTruthyNumber());

// Trazi se unos od strane korisnika sve dok ne unese bilo sta
let recenica = "";
while (!recenica) {
  recenica = prompt("Unesite neku recenicu.");
}
