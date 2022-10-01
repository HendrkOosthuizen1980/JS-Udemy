'use strict';
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital is ${capitalCity}`;
}

const descEngland = describeCountry('england', 20, 'london');
const descSouthAfrica = describeCountry('sout africa', 50, 'cape town');
const descMauritius = describeCountry('mauritius', 22, 'port louis');

console.log(descEngland);
console.log(descSouthAfrica);
console.log(descMauritius);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populationSouthAfrica = percentageOfWorld1(50);
const populationEngland = percentageOfWorld1(33);
const populationMauritius = percentageOfWorld1(22);
console.log(populationSouthAfrica, populationEngland, populationMauritius);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld2(50));
console.log(percentageOfWorld2(33));
console.log(percentageOfWorld2(22));


const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percSouthAfrica = percentageOfWorld3(50);
const percEngland = percentageOfWorld3(33);
const percMauritius = percentageOfWorld3(22);

console.log(percEngland, percSouthAfrica, percMauritius);


const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people which is about ${percentage}% of the world.`;
};

const descEngland = describePopulation('england', 20);
console.log(descEngland);



const populations = [50, 33, 22, 77];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];

console.log(percentages);



const neighbours = ['France', 'Scotland', 'Ireland', 'Wales'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probally not a European Country :D');
}

neighbours[neighbours.indexOf('Ireland')] = 'England';
console.log(neighbours);


const myCountry = {
  country: 'England',
  capital: 'London',
  language: 'English',
  population: 50,
  // neighbours: ['France', 'Scotland', 'Wales', 'Ireland'],
  neighbours: [],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = !Boolean(this.neighbours.length ? true : false);
  },
};
myCountry.describe();

myCountry.checkIsland();
console.log(myCountry);

// console.log(myCountry);

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${
//     myCountry.language
//   } speaking people, ${
//     myCountry.neighbours.length + 2
//   } neighbouring countries and a capital called ${myCountry.capital}.`
// );

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${
//     myCountry.language
//   } speaking people, ${
//     myCountry['neighbours'].length - 2
//   } neighbouring countries and a capital called ${myCountry.capital}.`
// );

// myCountry.population += 2;
// console.log(myCountry);
// myCountry['population'] -= 2;
// console.log(myCountry);



for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}



function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [50, 33, 22, 77];

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];

console.log(percentages);


const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Iceland'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(listOfNeighbours[i][y]);
  }
}


function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [50, 33, 22, 77];

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
*/
