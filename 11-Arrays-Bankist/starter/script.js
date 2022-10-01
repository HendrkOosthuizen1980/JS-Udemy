'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `

    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const int = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${int}€`;
};

//username:

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  //display movements

  displayMovements(acc.movements);

  //display Balance

  calcDisplayBalance(acc);

  //display summary

  calcDisplaySummary(acc);
};

//Event Handler for Login

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    //clear input fields

    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    //Update UI

    updateUI(currentAccount);
  }
});

//Transfer Button

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

//Loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});
//Closing Account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    //Del Account
    accounts.splice(index, 1);

    //Hide UI

    containerApp.style.opacity = 0;

    //Clear Contents

    inputCloseUsername.value = inputClosePin.value = '';
  }
});

//Sort

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Slice
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//Splice

//console.log(arr.splice(2));

arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

//reverse

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//concat

const letters = arr.concat(arr2);
console.log(letters);

//join

console.log(letters.join('-'));


// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last element

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(`------FOREACH------`);

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)

//MAPS

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});


////////////////////////////////////////////
//Challenge 1

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsOnlyJulia = dogsJulia.slice(1, -2);
  //console.log(dogsOnlyJulia);
  const dogsJuliaKate = dogsOnlyJulia.concat(dogsKate);
  //console.log(dogsJuliaKate);
  dogsJuliaKate.forEach((age, i) => {
    age <= 3
      ? console.log(`Dog number ${i + 1} is still a puppy 🐶`)
      : console.log(`Dog number ${i + 1} is an adult and is ${age} years old`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

//Map Method

/*
const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const usdValues = movements.map(mov => mov * euroToUsd);

console.log(usdValues);

const usdValues2 = [];

for (const mov of movements) usdValues2.push(mov * euroToUsd);

console.log(usdValues2);

const movmentDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movmentDescriptions);

// Filter

const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);

//reduce

const balance = movements.reduce((acc, curr) => acc + curr, 0);
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const max = movements.reduce(function (acc, curr) {
//   if (acc > curr) {
//     return acc;
//   } else {
//     return curr;
//   }
// });

// const max = movements.reduce(
//   (acc, curr) => (acc > curr ? acc : curr),
//   movements[0]
// );

// console.log(max);

// const calcAverageHumanAge = function (arr) {
//   const humanDogAge = arr.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   const dogsEighteenOlder = humanDogAge.filter(age => age >= 18);
//   const avgDogHumanAge = dogsEighteenOlder.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
// };

//Below is same as above but with chaining....

// const calcAverageHumanAge = arr =>
//   arr
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// 1. Calculatethedogageinhumanyearsusingthefollowingformula:ifthedogis <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4 done

// 2. Excludealldogsthatarelessthan18humanyearsold(whichisthesameas keeping dogs that are at least 18 years old)done

// 3. Calculatetheaveragehumanageofalladultdogs(youshouldalreadyknow from other challenges how we calculate averages 😉) done

// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]

// const euroToUsd = 1.1;

// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov);
// console.log(totalDepositUSD);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);

// const accounts = [account1, account2, account3, account4];

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// }
// console.log(movements);

// //Equality
// console.log(movements.includes(-130));

// Some Condition
// console.log(movements.some(mov => mov === -130)); //same as above

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

//Every
//console.log(account4.movements.every(mov => mov > 0));

//Seperate callback

// const deposit = mov => mov > 0;

// console.log(movements.some(deposit));
// console.log(movements.filter(deposit));
// console.log(movements.every(deposit));

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

//Below same as above but chained
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

//flatMap()

// const overallBalance1 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance1);

//Strings

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// console.log(owners.sort());

// //Numbers
// console.log(movements);

//return < 0 a before b //Keeeping Order
// return > 0, b before a //Switching Order

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

//below same as above
// movements.sort((a, b) => a - b);
// console.log(movements);

//Descending

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// movements.sort((a, b) => b - a);

// console.log(movements);

// const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(new Array(7));

// //Empty Arrays  and Fill()
// const x = new Array(7);
// console.log(x);
// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// console.log(arr.fill(23, 2, 6));

//Array.from

// const y = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const randomDiceRolls = Array.from({ length: 100 }, (_, i, arr) => {
//   return Math.trunc(Math.random() * i + 1);
// });

// console.log(randomDiceRolls);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => el.textContent.replace('€', '')
//   );

//   console.log(movementsUI);
// });

//Array Method Practice

//1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(bankDepositSum);

// let a = 10;
// console.log(a++);

// //3.

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur; //same as above but cleanter
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

//Challenge Use Reduce Method and redo 1. 2.

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);

// const bankDepositSum1 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sum, mov) => {
//     mov >= 0 ? (sum += mov) : -1;
//     return sum;
//   });

// console.log(bankDepositSum);
// console.log(bankDepositSum1);

// 4.

//this is a nice title -> This Is a Nice Title

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleSentence = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleSentence);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not to long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Calc recommended Food

dogs.forEach(obj => {
  obj.recFood = Math.trunc(obj.weight ** 0.75 * 28);
});
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const dogSarah = dogs.find(obj => obj.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

//3. 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter(obj => obj.curFood > obj.recFood)
  .flatMap(obj => obj.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(obj => obj.curFood < obj.recFood)
  .flatMap(obj => obj.owners);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3.,like this:"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)

console.log(dogs.some(obj => obj.curFood === obj.recFood));

// 6. Log to thec onsole whether there is any dog eating an okay amount of food (just true or false)

console.log(
  dogs.some(
    obj => obj.curFood > obj.recFood * 0.9 && obj.curFood < obj.recFood * 1.1
  )
);

// 7. Create an array containing the dogs that are eating an okay amount of food(try to reuse the condition used in 6.)

const dogsOk = dogs
  .filter(
    obj => obj.curFood > obj.recFood * 0.9 && obj.curFood < obj.recFood * 1.1
  )
  .filter(el => el.owners);

console.log(dogsOk);

//8. Create ashallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
const dogsSorted = dogs.slice().sort((cur, next) => cur.recFood - next.recFood);

console.log(dogsSorted);
