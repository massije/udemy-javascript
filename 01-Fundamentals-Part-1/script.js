/*
js = "amazing";

console.log(40 + 6);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Varriable name conventions

let jonas_matild = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
//const job; --> esto esta mal porque una constante siempre tiene que tener asignamo un valor, 
// ya que no puede quedarse vacia porque en un futuro no puede variar. 

var job = "programmer"; // --> esta es la forma antigua de declarar variables (ES5)
job = "teacher"; // es recomendable no usar var y preferible usar const siempre o let si
// la variable va a variar en el tiempo.

lastName = "Del Pino"; // --> esto no hay que hacerlo, ya que en vez de crear un variable
// en el scope, crea una propiedad en el objeto gloabl
console.log(lastName);


// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 2 * 2 * 2 = 8;

const firstName = "Jorge";
const lastName = "Del Pino";
console.log(firstName + " " + lastName);

// Assignments operators
let x = 10 + 5; //15
x += 10; // 25
x *= 4; // 100
x++; // 101
x--; // 100
x--; // 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = "jorge";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jorge =
  "I'am " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jorge);

const jorgeNew = `I'am ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jorgeNew);

console.log(`Hola me llamo jorge
y acabo de hacer un salto de linea,
ya que con estas comillas invertidas,
podemos hacer los saltos que queramos`);


const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗.");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

let century;
const birthYear = 1998;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// Type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);

console.log(String(23) + " es ahora un string.");
console.log(23);

// Type coercion
console.log("I am " + 23 + " Years old.");
console.log("23" + "23");
console.log("23" - "3");
console.log("10" - 5);
console.log("20" / "5");

let n = "1" + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0 , "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;

if (height) {
  console.log("La variable tiene valor definido");
} else {
  console.log("la variable tiene valor undefined");
}


const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("what's is your favourite color?"));
console.log(favourite);
console.log(typeof favourite);
23;
if (favourite === 23) {
  console.log("Cool! 23 is amazing number.");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");


const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);
if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}


const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepary theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepary theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code example");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day");
}
*/

const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");
// console.log(age);

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
