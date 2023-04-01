//  Na osnovu promenljive brojGodina ispisati u konzoli sledece:
// ako je broj godina manji od 12: "Vi ste decijeg doba"
// ako je broj godina izmedju 12(ukljucuje) i 18 (ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40 (ne ukljucuje): vi ste punoletni
// ako je broj godina veci ili jednak 40: vi ste zrela osoba

const brojGodina = 26;

if (brojGodina < 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina >= 12 && brojGodina < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina >= 18 && brojGodina < 40) {
  console.log("Vi ste punoletni");
} else {
  console.log("Vi ste zrela osoba");
}
