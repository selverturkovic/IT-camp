// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet.

function receni() {
  const recen = prompt("Unesite neku recenicu: ");
  let novaRecenica1 = "";

  let duzina = recen.length;

  novaRecenica1 += `Recenica gde su sva slova velika: ${recen.toUpperCase()}\n`;
  novaRecenica1 += `Recenica gde su sva slova mala:  ${recen.toLowerCase()}\n`;
  for (let i = 0; i < duzina; i++) {
    if (i < duzina / 2) {
      novaRecenica1 += recen[i].toUpperCase();
    } else {
      novaRecenica1 += recen[i].toLowerCase();
    }
  }
  novaRecenica1 +=
    "\nRecenica u kojoj se rec 'skola' menja recju 'fakultet': " +
    recen.replace(/skola/g, "fakultet");
  return novaRecenica1;
}
console.log(receni());
// Zadatak: Zamena reči
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti. Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati rezultujući string. Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da vrati "Danas je # dan.".

function dvaArgumenta(orginal, zamena) {
  return orginal.replace(zamena, "#");
}
console.log(dvaArgumenta("Danas je lep dan", "lep"));
// Zadatak: Brojanje karaktera
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu. Ignoriši prazne prostore. Na primer, za ulazni string "Hello, World!", funkcija treba da vrati broj 12.
function brojanjeKaraktera(string) {
  let broj = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      broj++;
    }
  }
  return broj;
}
console.log(brojanjeKaraktera("Hello, World!"));

function brojanjeKaraktera1(string) {
  let broj = 0;
  i = 0;
  while (i < string.length) {
    if (string[i] !== " ") {
      broj++;
    }
    i++;
  }
  return broj;
}
console.log(brojanjeKaraktera1("Hello, World!"));
