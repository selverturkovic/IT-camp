function zasticenEmail(email) {
  let indeks = email.indexOf("@");
  let ime = email.substring(0, indeks);
  let domen = email.substring(indeks + 1);
  let skrivenoIme =
    ime.substring(
      0,
      ime.indexOf("_") !== -1 ? ime.indexOf("_") : ime.indexOf(".")
    ) + "...";
  return skrivenoIme + "@" + domen;
}
console.log(zasticenEmail("robin.fea@gmail.com"));
