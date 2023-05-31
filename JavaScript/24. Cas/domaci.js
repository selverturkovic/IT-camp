function protectUser(email) {
  const indexUnderline = email.indexOf("_");
  const indexDot = email.indexOf(".");
  //   let indexSymbol;
  //   if (indexUnderline === -1) { // ako se ne nalazi vraca -1 metoda indexOf()
  //     indexSymbol = indexDot;
  //   } else {
  //     indexSymbol = indexUnderline;
  //   }
  const indexSymbol = indexUnderline === -1 ? indexDot : indexUnderline;
  const indexEt = email.indexOf("@");
  const surname = email.slice(indexSymbol, indexEt);
  return email.replace(surname, "...");
}
console.log(protectUser("robin.singh@example.com"));
console.log(protectUser("robin_singh@example.com"));
