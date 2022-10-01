'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

function logger() {
  console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);


//Arrow Function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


const cutFruitPieces = (fruit) => fruit * 4;

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins = calcAverage(44, 23, 71);
const avgDolphins = calcAverage(85, 54, 41);
console.log(avgDolphins);
// const avgKoalas = calcAverage(65, 54, 49);
const avgKoalas = calcAverage(23, 34, 27);
console.log(avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins');
  }
};

checkWinner(avgDolphins, avgKoalas);



const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);



const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Samual'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Samual'));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}


const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends'
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     'Wrong request! Choose between firstName, lastName, age, job and friends'
//   );
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};
console.log(jonas.calcAge());

console.log(jonas.age);

console.log(jonas.getSummary());



const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(mark.calcBMI());

console.log(john.calcBMI());

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`
  );
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
  );
}


// console.log('Lifting weights repitition 1');
// console.log('Lifting weights repitition 2');
// console.log('Lifting weights repitition 3');
// console.log('Lifting weights repitition 4');
// console.log('Lifting weights repitition 5');
// console.log('Lifting weights repitition 6');
// console.log('Lifting weights repitition 7');
// console.log('Lifting weights repitition 8');
// console.log('Lifting weights repitition 9');
// console.log('Lifting weights repitition 10');

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repition ${rep}`);
}



const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  types[i] = typeof jonas[i];
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];
const strings = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  strings.push(jonas[i]);
  // console.log(jonas[i], typeof jonas[i]);
}

console.log(strings);

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  // strings.push(jonas[i]);
  // console.log(jonas[i], typeof jonas[i]);
}



const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}



for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}



// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`lifting weights repition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`You rolled a ${dice}`);
  }
}


const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));

const strangeBirds = [
  'Shoebill',
  'Cockatrice',
  'Basan',
  'Terrorbird',
  'Parotia',
  'Kakapo',
];
for (const strangeBird of strangeBirds) {
  if (strangeBird === 'Basan') {
    break;
  }
  console.log(strangeBird);
};

const strangeBirds = [
  'Shoebill',
  'Cockatrice',
  'Cow',
  'Basan',
  'Terrorbird',
  'Parotia',
  'Kakapo',
];

for (const bird of strangeBirds) {
  if (bird === 'Cow') {
    continue;
  }
  console.log(bird);
}
*/

//Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

//Examples:

/*const subLength = (str, char) => {
  let charCount = 0;
  let len = -1; //becomes 2 after 3rd iteration

  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      charCount++;
      if (charCount > 2) {
        return 0;
      }
      if (len == -1) {
        len = i;
      } else {
        len = i - len + 1; //end point (i) = 3
      }
    }
  }
  if (charCount < 2) {
    return 0;
  }

  return len;
};

*/

//console.log(subLength('Saterday', 'a')); // returns 6
//console.log(subLength('summer', 'm')); // returns 2
//console.log(subLength('digitize', 'i')); // returns 0
//console.log(subLength('cheesecake', 'k')); // returns 0

/* const subLengthNew = (str, char) => {
  let count = 0;
  let len = -1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
      if (count > 2) {
        return 0;
      }

      if (len === -1) {
        len = i;
      } else {
        len = i - len + 1;
      }
    }
  }
  if (count < 2) {
    return 0;
  }
  return len;
};

console.log(subLengthNew('Saterday', 'a')); // returns 6
*/
