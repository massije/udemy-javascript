/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK
*/
console.log(
  "\n\n------------------------------------------------------------------------------------"
);
console.log("Challenge 1\n");
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log("The BMI of mark is: " + BMIMark);
console.log("The BMI of John is: " + BMIJohn);
console.log(markHigherBMI);

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/

console.log("Challenge 2\n");

// const markHigherBMI = BMIMark > BMIJohn;  --> podria haber puesto dentro del if, pero
// es una mejor practica poner la comparacion directa en el if.
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn}).`);
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark}).`);
}
