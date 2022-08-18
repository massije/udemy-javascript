// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
/*
We work for a company building a smart home thermometer. Our most recent task is this:
"given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that
sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp.
// -How to compute max and min temperatures?
// What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// -How to ingore errors? ✅
// -Find max value in temp array ✅
// -find min value in temp array ✅
// -subtract min from max(amplitude) and return it ✅

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue; // This ignore erros
    if (curTemp >= max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);

  return max - min;
};
console.log("PROBLEM #1");
const amplitude = calcTempAmplitude(temperatures);
console.log(`The amplitude is: ${amplitude}`);

// PROBLEM 2:
// Function should now recieve 2 arrays of temperatures

// 1) Understanding the problem
// -with 2 arrays, should we implement functionality twice? Answer: NO!! Just merge two arrays

// 2) Breaking up into sub-problems
// -How to merge 2 arrays in 1 array. ✅

const calcTempAmplitudeNew = function (temp1, temp2) {
  const temps = temp1.concat(temp2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue; // This ignore erros
    if (curTemp >= max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);

  return max - min;
};

console.log("\nPROBLEM #2");
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(`The amplitude is: ${amplitudeNew}`);

console.log("\n ---Debugging---");
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    value: Number(prompt("Degrees celsius: ")),
  };

  // B) FIND
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());
