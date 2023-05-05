// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back

const recenica = prompt("Unesite recenicu: ");

if (recenica.length > 0) {
  let prviKarakter = recenica[0];
  let recenica1 = prviKarakter + recenica + prviKarakter;
  console.log(recenica1);
} else {
  console.log("Uneli ste praznu recenicu");
}
// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
const broj = +prompt("Unesite broj: ");

if (isNaN(broj) || broj < 0) {
  console.log("Niste uneli broj ili ste uneli negativan broj.");
} else if (broj % 3 === 0 || broj % 7 === 0) {
  console.log("Broj je deljiv sa 3 ili sa 7");
} else {
  console.log("broj nije deljiv ni sa 3 ni sa 7");
}

// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

if (recenica.length > 2) {
  let prviKarakter =
    recenica[recenica.length - 3] +
    recenica[recenica.length - 2] +
    recenica[recenica.length - 1];
  let recenica1 = prviKarakter + recenica + prviKarakter;
  console.log(recenica1);
} else {
  console.log("Uneli ste praznu recenicu");
}

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

let string = "";

if (
  recenica[0] === "J" &&
  recenica[1] === "a" &&
  recenica[2] === "v" &&
  recenica[3] === "a"
) {
  console.log("Recenica pocinje sa Java.");
} else {
  console.log("Recenica ne pocinje sa Java.");
}
