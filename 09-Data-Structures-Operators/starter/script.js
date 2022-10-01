'use strict';

// Data needed for a later exercise
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} from ${getCode(to)} to (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

//Challenge 4 prep:

// const camelCase = word => {
//   const wordToLower = word.toLowerCase().trim();
//   const splitWords = wordToLower.split('_');
//   const [word1, word2] = splitWords;
//   const upperCaseWord = word2[0].toUpperCase() + word2.slice(1);
//   const camelCaseWord = word1 + upperCaseWord;

//   return camelCaseWord;
// };

// console.log(camelCase('underscore_case'));
// console.log(camelCase('first_name'));
// console.log(camelCase('Some_Variable'));
// console.log(camelCase('calculate_Age'));
// console.log(camelCase('delayed_departure'));

///Challenge

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(25)}${'✅'.repeat(i + 1)}`);
  }
});

/*
//Split and Join
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalize = name => {
  const names = name.split(' '); //will put words into array
  const upperCaseNames = [];

  for (const n of names) {
    //upperCaseNames.push(n[0].toUpperCase() + n.slice(1));
    upperCaseNames.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(upperCaseNames.join(' '));
};

capitalize('john smith davies');

//Padding String

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

console.log();

const maskCreditCard = number => {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4458909009022));
maskCreditCard(3232324229999);

//Repeat

const message2 = 'Bad weather...All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = n => {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(12);
planesInLine(7);

// Working with strings part 2

/*
  const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name

const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Check e-mail

const email = 'hello@jonas.io';
const loginemail = '  Hello@Jonas.Io \n';

//const lowerEmail = loginemail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginemail.toLowerCase().trim();
console.log(email === normalizedEmail);

//replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

//regular expresssion
console.log(announcement.replace(/door/g, 'gate'));

//Booleans //includes(), startsWith(), endsWith()

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

////////////////////////////////////////////////////////////////
// Working with Strings - Part 1
/*
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Data needed for first part of the section

/*

const hours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  hours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

/*

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(hours));

const hoursMap = new Map(Object.entries(hours));

console.log(hoursMap);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));

const answer = 3;
console.log(answer);

//console.log(answer === 3 ? question.get(true) : question.get(false));

console.log(question.get(question.get('correct') === answer));

//converting map to array

const mapArray = [...question];

/* 

//Maps Fundamentals

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 11)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

/*

//Sets

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Pasta',
  'Rissotto',
  'Pasta',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));

orderSet.add('Garlic');
console.log(orderSet);

orderSet.delete('Rissotto');
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);

console.log(new Set(staff).size);

console.log(new Set('hennooosthuizen').size);

// orderSet.clear();
// console.log(orderSet);

/*

//Property Names:

const properties = Object.keys(hours);
//onsole.log(properties);

let openStr = `We are open ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day},`;
}

//console.log(openStr);

for (const day of Object.keys(hours)) {
  //console.log(day);
}

//Entire object

const entries = Object.entries(hours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//Property Values:

const values = Object.values(hours);
//console.log(values);

for (const hours of values) {
  //console.log(hours);
}

/*

console.log(restaurant);

if (restaurant.hours.mon) console.log(restaurant.hours.mon.open);

//With optional changing

// console.log(restaurant.hours.mon?.open);
// console.log(restaurant.hours?.mon?.open);

//Example

/*

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(
    `On ${day}, we ${open === 'closed' ? 'are closed' : `open at ${open}`}`
  );
}

//Methods

/*

console.log(restaurant.order?.(0, 1)) ?? 'Method does not exist';
console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');

//Arrays

const users = [{ name: 'Jonas', email: 'Hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

//

//ES6 enhanced object literals

//   hours,
// };

// console.log(restaurant);

///////////////////////////////////////////////////////////////////
//For Of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//////////////////////////////////////////////////////////////////
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//OR Assignment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish Assignment Operator

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// console.log(rest1);
// console.log(rest2);

//AND Assignment Operator

// rest2.owner = rest2.owner && 'anonymous';

// rest1.owner &&= 'anonymous';
// console.log(rest1);

// rest2.owner = rest2.owner && 'anonymous';
// console.log(rest2);

/*

const numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*


// || -> use Any Datatype, return any data type, short-circuiting (short circuit evaluation)

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23);

// restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--- AND ---');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null & 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*

//Destrucring - rest

//Spread, because on right side of =

const arr = [1, 2, ...[3, 4]];

//Rest, because on left side of =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , pasta, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, pasta, otherFood);

//Objects - rest

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//functions - rest

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

*/
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

////////////////////////////////
//The spread Operator

/* 

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newGoodArray = [1, 2, ...arr];
console.log(newGoodArray);

console.log(...newGoodArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Risotrante Roma';

console.log(restaurant.name);
console.log(restaurantCopy.name);

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets. NOTT objects

const str = 'Jonas';
const letters = [...str, , 'S.'];
console.log(letters);

console.log(...str);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

/*

//////////////////////////////////////////
//Destructring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default Values

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);

//nested objects

const {
  fri: { open, close },
} = hours;
console.log(open, close);

/*

///////////////////////////////////////

//Destructring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// Nested destructring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/

//coding challenge
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//task 1
const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

//task 2

const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

//task 3

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//task 4

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// console.log(players1Final);

//task 5

const {
  odds: { team1, x: draw, team2 },
} = game;

// console.log(team1);
// console.log(draw);
// console.log(team2);

//task 6

const printGoals = function (...players) {
  console.log(players);
  const numGoals = players.length;
  console.log(numGoals);
};
printGoals('Davies', 'Muller', 'Leandowski', 'Kimmich');
printGoals(...game.scored);

//task 7

team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

*/

/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Task 1.

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

//Task 2.

const oddList = Object.values(game.odds);
let sumOdd = 0;
for (const odd of oddList) {
  sumOdd += odd;
}
const avgOdd = sumOdd / oddList.length;
console.log(avgOdd);

//Task 3.

const allOdds = Object.entries(game.odds);

console.log(allOdds);

for (const [team, value] of allOdds) {
  const str = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${str}: ${value}`);
}

//task Bonus

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
*/
const Calculate = {
  factorial(num) {
    if (num < 0) return -1;
    if (num === 0) return 1;
    return num > 1 ? num * this.factorial(num - 1) : 1;

    // for(let i = num - 1; i > 0; i--){
    // num *= i;
  },
};

console.log(Calculate.factorial(0));
