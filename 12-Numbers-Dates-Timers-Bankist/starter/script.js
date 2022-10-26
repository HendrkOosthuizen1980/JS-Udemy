'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-10-01T14:43:26.374Z',
    '2022-10-04T18:49:59.371Z',
    '2022-10-05T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-10-01T14:43:26.374Z',
    '2022-10-04T18:49:59.371Z',
    '2022-10-05T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = (date, locale) => {
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDayPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, '0');
  // const month = `${date.getMonth() + 1}`.padStart(2, '0');
  // const year = date.getFullYear();
  return Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time

    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //above new way of formatting login date

    // const day = `${now.getDate()}`.padStart(2, '0');
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const min = `${now.getMinutes()}`.padStart(2, '0');

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
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
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Add Loan Date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(acc.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//to convert to number
/*
console.log(Number('23'));
console.log(+'23'); // type coercion

//Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseFloat('2.5rem')); //returns 2.5
console.log(Number.parseInt('2.5rem', 10)); //returns 2

//Check if value is NaN - Literaly//Not Really used
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

//Checking if value is number (floating point numbers as well as integer)
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite(23 / 0));

//Chekcing if valus is number(Integer Numbers Only)
console.log(Number.isInteger(23));
console.log(Number.isInteger('23'));
console.log(Number.isInteger(+'23'));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/

/*

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2)); //Outputs highest Value
console.log(Math.max(5, 18, '23', 11, 2)); //max does type coercion - output 23
console.log(Math.max(5, 18, '23px', 11, 2)); //max does type coercion - output 23

console.log(Math.min(5, 18, '23px', 11, 2)); //min does type coercion - output 23

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(1, 5));

//Rounding Integers

console.log(Math.trunc(23.3)); //removes decimal parts
console.log(Math.round(23.4)); //rounds to nearest integer

console.log(Math.ceil(23.3)); //rounds up
console.log(Math.ceil(23.9)); //rounds up

console.log(Math.floor(23.3)); //rounds down
console.log(Math.floor(23.9)); //rounds down

//Diff Math.trunc() vs Math.floor()

console.log(Math.trunc(-24.4));
console.log(Math.floor(-24.4));

// Rounding Decimals

console.log(+(2.7).toFixed(0));
console.log(+(2.7).toFixed(1));
console.log(+(2.7).toFixed(2));
console.log(+(2.345).toFixed(2));

console.log(5 % 2); // 5 = 2 * 2 + 1
console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
*/

//Numeric Seperators

/*
const diameter = 287_460_000_000; // 287,460,000,000
console.log(diameter);

const price = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15
console.log(PI)
*/

/*

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(4837985165156153132132545651n);
console.log(BigInt(4837985165));

console.log(10000n + 100000n);

const huge = 22974348937498374983734793n;
const num = 23;

console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + ' is REALLY BIG!!!');

//Division
console.log(11n / 3n);
console.log(11 / 3);

*/
/*

//Create a date

const now = new Date();
console.log(now);

console.log(new Date('August 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33)); //1 Dec
console.log(new Date(0));
//Three days after above date
console.log(new Date(3 * 24 * 60 * 60 * 1000));

*/

//Working with dates

/*

const future = new Date(2037, 10, 19, 15, 23);


console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

console.log(future.getTime());
console.log(new Date(2142249780000));

console.log(Date.now());
console.log(new Date());

future.setFullYear(2040);
console.log(future);

*/

/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const days1 = calcDayPassed(new Date(2037, 3, 4), new Date(2037, 3, 14, 10, 8));
console.log(days1);

*/

const num = 388476423;

const options = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'EUR',
  useGrouping: false,
};

console.log('GB:      ', new Intl.NumberFormat('en-GB', options).format(num));
console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log(
  'Germany:      ',
  new Intl.NumberFormat('de-DE', options).format(num)
);
