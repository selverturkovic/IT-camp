// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range

function opseg(a, b) {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(opseg(30, 50));

// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.
function proveriOpseg(a, b = 0, c = 0) {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(proveriOpseg(1, 50));
