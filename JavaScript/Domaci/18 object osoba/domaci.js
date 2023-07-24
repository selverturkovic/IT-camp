// Domaci:
// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)
const osoba = {
  firstName: "",
  lastName: "",
  language: "",
  setLanguage: function (language) {
    this.language = language;
  },
  setNickName: function () {
    const firstTwoLettersOfFirstName = this.firstName.slice(0, 2);
    const firstTwoLettersOfLastName = this.lastName.slice(0, 2);
    this.nickName = firstTwoLettersOfFirstName + firstTwoLettersOfLastName;
  },
};

const osoba1 = Object.create(osoba);
osoba1.firstName = "Selver";
osoba1.lastName = "Turkovic";
osoba1.setLanguage("English");
osoba1.setNickName();

console.log(osoba1);
