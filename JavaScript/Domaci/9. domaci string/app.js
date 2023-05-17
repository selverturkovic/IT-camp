// Domaci:
// Zadatak: Spajanje stringova
// Napiši funkciju koja prima dva stringa kao argumenta i vraća njihovu konkatenaciju.
// Na primer, za ulazne vrednosti "Hello" i "World!", funkcija treba da vrati "HelloWorld!".

function spajanjeStringova(prvi, drugi) {
  return prvi.concat(drugi);
}
console.log(spajanjeStringova("Hello", "World"));
// Zadatak: Palindrom
// Napiši funkciju koja prima jedan string kao argument i proverava da li je taj string palindrom,
// tj. da li se čita isto i s leva na desno i s desna na levo.
// Funkcija treba da vrati true ako je string palindrom, inače false.
// Na primer, za ulazni string "radar" funkcija treba da vrati true, dok za ulazni string "hello" funkcija treba da vrati false.
function palindrom(a) {
  let duzina = a.length;

  for (let i = 0; i < duzina / 2; i++) {
    if (a[i] !== a[duzina - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrom("radar"));
