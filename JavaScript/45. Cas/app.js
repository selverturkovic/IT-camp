const radnik = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
  adresa: {
    ulica: "avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      // vraca Dzenan Kosuta zivi u ulici Avnoja u Novom Pazaru.
      //   return ( radnik.firstName + " " + radnik.lastName +  " zivi u ulici " +  this.ulica +" u " +this.grad
      return (
        radnik.fullname() + " zivi u ulici " + this.ulica + " u " + this.grad
      );
    },
  },
};
console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

const godine = [
  { starost: 17 },
  { starost: 17 },
  { starost: 22 },
  { starost: 27 },
  { starost: 22 },
  { starost: 19 },
];
// Napraviti novi niz punoletni koji ce sadrzati one elemente (objekte) cija je vrednost veca od 17.

const punoletni = godine.filter((osoba) => osoba.starost > 17);
console.log(punoletni);
const punoletni1 = punoletni.map((osoba1) => osoba1.starost);
console.log(punoletni1);

// ... (spread) operator
// Spread operator nam sluzi za kloniranje niza ili objekta

const punoletni3 = [20, ...punoletni1, 30];
console.log(punoletni3);

const radnik2 = {
  ...radnik,
  firstName: "Tarik",
  lastName: "Hambelic",
};
console.log(radnik2);
