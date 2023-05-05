// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

let a = 5;
let b = 6;
let c = 7;
let s = (a + b + c) / 2;
let p = (s * (s - a) * (s - b) * (s - c)) ** (1 / 2);
console.log(p);

// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
// let A = +prompt("Unesite broj izmedju 1 i 10: ");

// switch (A) {
//   case 1:
//     console.log("Good work");
//     break;
//   default:
//     console.log("Not matched");
// }

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
// let B = +prompt("Unesite neki broj: ");
// if (isNaN(B)) {
//   console.log("Niste uneli broj");
// } else if (B <= 13) {
//   console.log(13 - B);
// } else {
//   console.log((B - 13) * 2);
// }

//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

// let C = +prompt("Unesite prvi broj: ");
// let D = +prompt("Unesite drugi broj: ");
// if (C === D) {
//   console.log(3 * (C + D));
// } else {
//   console.log(C + D);
// }

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
// let d = Number(prompt("Unesite neki broj: "));

// if (d <= 19) {
//   console.log(19 - d);
// } else {
//   console.log((d - 19) * 3);
// }

// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

// let e = +prompt("Unesite prvi broj: ");
// let f = +prompt("Unesite drugi broj: ");

// if (e === 50 || f === 50 || e + f === 50) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
// let g = +prompt("Unesite broj: ");

// if (isNaN(g)) {
//   console.log("Niste uneli broj");
// } else if (g <= 100 && g >= 20) {
//   console.log("Broj je izmedju 20 i 100");
// } else if (g > 100 && g <= 400) {
//   console.log("broj je izmedju 100 i 400");
// } else {
//   console.log(g);
// }

//20. Write a JavaScript program to check two given integers whether one is positive and another one is negative
// let h = +prompt("Unesite prvi broj: ");
// let j = +prompt("Unesite drugi broj: ");

// if (h < 0 || j < 0 || (h < 0 && j < 0)) {
//   console.log("Jedan ili oba broja su manja od nule");
// } else {
//   console.log("Broj je veci od nule");
// }

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

let l = prompt("Unesite string: ");

if (l[0] === "P" && l[1] === "y") {
  console.log(l);
} else {
  console.log("Py" + l);
}

// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

let m = "w3resources";
let recenica1 = "";
for (let i = 0; i < m.length; i++) {
  if (m[5] === "o") {
    continue;
  } else {
    recenica1 += m;
  }
}
console.log(recenica1);
// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1

let k = prompt("Unesite string: ");

let recenica = "";
for (let i = 0; i < k.length; i++) {
  if (k.length <= 1) {
    console.log("Uneli ste string od jednog slova");
  } else if (i === 0) {
    recenica += k[k.length - 1];
  } else if (i === k.length - 1) {
    recenica += k[0];
  } else {
    recenica += k[i];
  }
}
console.log(recenica);
// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

const recenica5 =
  "treba nam nova recenica gde ce se svaka rec zavrsavati velikim slovom";

let recenica6 = "";
for (let i = 0; i < recenica5.length; i++) {
  if (i === recenica5.length - 1) {
    recenica6 += recenica5[i].toUpperCase();
  } else if (recenica5[i + 1] === " ") {
    recenica6 += recenica5[i].toUpperCase();
  } else {
    recenica6 += recenica5[i];
  }
}
console.log(recenica6);

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.

const string = prompt("Unesite neku recenicu: ");

brojac = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === "m" || string[i] === "M") {
    brojac += 1;
  }
}
console.log("U recenici " + string + " ima " + brojac + " slova m.");
