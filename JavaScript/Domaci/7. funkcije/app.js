// Domaci zadaci:
// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument, funkcija ga racuna kao 0.

function zbirKvadrataDvaBroja(broj1, broj2 = 0) {
  return broj1 ** 2 + broj2 ** 2;
}
console.log(zbirKvadrataDvaBroja(10, 5));

// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.
function aritmetickaSredinaTriBroja(broj1, broj2 = 0, broj3 = 0) {
  return (broj1 + broj2 + broj3) / 3;
}
console.log(aritmetickaSredinaTriBroja(5, 4, 3));

// 3. Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.
function povrsina(broj1, broj2 = 0) {
  if (broj1 === broj2) {
    console.log("Povrsina kvadrata je: " + broj1 * broj2);
    return broj1 * broj2;
  } else {
    console.log("Povrsina pravougaonika je: " + broj1 * broj2);
    return broj1 * broj2;
  }
}
console.log(povrsina(10, 10));
console.log(povrsina(10, 3));
