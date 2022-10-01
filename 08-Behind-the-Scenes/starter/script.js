'use strict';

/* function calcAge(birthYear) {
  const age = 2017 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT';
    }
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';

calcAge(1991);

*/

//Hoisting with variable
/*
console.log(me);
console.log(job);
console.log(year);


var me = 'Jonas';
let job = 'teacher';
const year = '1991';
*/

/*

//Hoisting with functions

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

// Example

/*
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}
*/
/*

//console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge() {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

/*

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge() {
    console.log(this);
    //Solution 1:
    // const self = this;
    // console.log(2037 - self.year);
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    //Solution 2

    */

/*
    console.log(2037 - this.year);
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), //never use arrow function as method
};

jonas.greet(); // result will be undefined
jonas.calcAge();

//arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

const addArrow = (a, b) => a + b;

addExpr(2, 5, 6, 7);
*/
/*

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend', friend);
console.log('Me', me);
*/

//mutating primitive Types

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

//reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After the marriage:', marriedJessica);

// Copying Ojbects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John').toExponential;

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
