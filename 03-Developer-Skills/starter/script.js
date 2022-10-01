// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius')),
  };

  //B Find Bug
  //console.table(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

//A Identify Bug

console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);


// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const printForecast = (arr) => {
  let foreCast = '' + '... ';
  for (let i = 0; i < arr.length; i++) {
    foreCast += `${arr[i]}°C in ${i + 1} ${i === 0 ? 'day' : 'days'} ... `;
  }
  return foreCast;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
*/
