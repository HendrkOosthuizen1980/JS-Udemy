'use strict';

/*
const bookings = [];

const createBooking = (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) => {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 2, 5);


const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtman',
  passport: 24739479284,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH99';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else [alert('Wrong passport!')];
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing ....
// const flightNum = flight;
// const passenger = jonas;

const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


const oneWord = str => str.replace(/ /g, '').toLowerCase();

const upperFirstWord = str => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function

const transformer = (str, fn) => {
  console.log(`Original string:${str} `);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = () => console.log('High Five');

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');

greeterHey('Jonas');

greet('Hey')('Jonas');



const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//Call Method
const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply Method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);

console.log(addVat(100));

const calcTax = rate => value => value + value * rate;

console.log(calcTax(0.1)(200));



const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    (type === 'array' && console.log(this.answers)) ||
      (type === 'string' && console.log(this.answers.join(',')));
  },
};
// This generates [0, 0, 0, 0]. More in the next section 😃

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'array');


const runOnce = function () {
  console.log('This will never run again');
};

//IIFE
runOnce();
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again!'))();


const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


//example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
// re-assigning f function
h();
f();

console.dir(f);

//example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

*/
