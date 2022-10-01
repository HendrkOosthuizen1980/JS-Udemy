/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990; will give error

//const job; will give error

var job = 'programmer';
job = 'teacher';


//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtman';
console.log(firstName + ' ' + lastName);

//Assignment Operrators
let x = 10 + 5; //15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
console.log(bmiMark);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
console.log(bmiMark);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

if (bmiMark > bmiJohn) {
  console.log(
    `Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn}) `
  );
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})`);
}


//type conversion

const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);

let n = '1' + 1;
n = n - 1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;

if (money) {
  console.log("Don't spend it all:)");
} else {
  console.log('You should get a job!');
}

let height = 0;

if (height) {
  console.log('YAH! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


const age = 18;

if (age === 18) console.log('You just became and adult (strict)');

if (age == 18) console.log('You just became and adult (loose)');

const favorite = Number(prompt('What is your favourite number'));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log('Cool! 23 is an amazing number');
} else if (favorite === 7) {
  console.log('7 is also a cool number');
} else if (favorite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}
if (favorite !== 23) {
  console.log('Why not 23?');
}


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to dive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to dive!');
} else {
  console.log('Someone else should drive...');
}


const aveScoreDolphins = (96 + 108 + 89) / 3;
const aveScoreKoalas = (88 + 91 + 110) / 3;

const aveScoreDolphins = (97 + 112 + 101) / 3;
const aveScoreKoalas = (109 + 95 + 123) / 3;

const aveScoreDolphins = (97 + 112 + 101) / 3;
const aveScoreKoalas = (109 + 95 + 106) / 3;

console.log(aveScoreDolphins, aveScoreKoalas);

if (aveScoreDolphins > aveScoreKoalas && aveScoreDolphins >= 100) {
  console.log('Dolphins are the winners!');
} else if (aveScoreKoalas > aveScoreDolphins && aveScoreKoalas >= 100) {
  console.log('Koalas are the winners!');
} else if (
  aveScoreDolphins === aveScoreKoalas &&
  aveScoreDolphins >= 100 &&
  aveScoreKoalas >= 100
) {
  console.log('It is a draw!');
} else {
  console.log('There are no winners!');
}


const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend!');
    break;
  default:
    console.log('Not a valid day');
    break;
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Not a valid day');
}


//Expression

3 + 4;
1991;
true && false && !false;

//Statements

if (23 > 10) {
  const str = '23 is bigger';
}



const age = 23;
age >= 18;
// ? console.log('I like to drink wine')
// : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


const bill = 275;
// const bill = 40;
// const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(tip);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

*/
