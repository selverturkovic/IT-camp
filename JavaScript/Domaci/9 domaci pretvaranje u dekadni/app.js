function hexToDec(hex) {
  var hexDigits = "0123456789ABCDEF";
  var decimal = 0;
  var power = 1;

  for (var i = hex.length - 1; i >= 0; i--) {
    var digit = hex[i];
    var digitValue = hexDigits.indexOf(digit);
    decimal += digitValue * power;
    power *= 16;
  }

  return decimal;
}

console.log(hexToDec("A")); // Ispisat će: 10

// function hexToDex1(hex){
//   let hexBrojevi =
// }
