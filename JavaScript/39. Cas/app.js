// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nizod10elemenata = (niz) => {
//   const niz1 = niz
//     .filter((element) => element % 2 === 0)
//     .reduce((prev, curr) => prev + curr);
//   return niz1;
// };
// console.log(nizod10elemenata(numbers));

const sum = (arr) => {
  const sum = arr.reduce((prev, curr) => {
    if (curr % 2 === 0) {
      return prev + curr;
    } else {
      return prev;
    }
    // return curr % 2===0 ? prev + curr : prev;
  }, 0);
  return sum;
};
console.log(sum(numbers));

// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// const arr2 = (arr3) => {
//   for (let i = 0; i < arr3.length; i++) {
//     for (let j = i; j < arr3.length; j++) {
//       return arr3[i];
//     }
//   }
// };
// console.log(arr2(arr1));
const arr11 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr11.length; i++) {
  for (let j = i; j < arr11.length; j++) {
    console.log(arr11[i], arr11[j]);
  }
}
