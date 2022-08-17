"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D.");

// Palabras reservadas por eso mismo no podemos usarlas al poner
// el use strict
// const interface = "Audio";
// const private = 534;


function logger() {
  console.log("My name is jorge");
}

//calling/ running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
// al usar este tipo de funcion, podremos ser capaces de llamar a la funcion aunque
// todavia no haya sido declarada
function calAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calAge1(1997);

// Function Expression
// al usar este tipo de funcion, no podremos ser capaces de llamar a ka funcion antes
// de ser declarada, ya que primero tiene que calcularse lo que haya dentro de la funcion
// para luego ser almacenada en la variable que la almacena.
const calAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calAge2(1997);

console.log(age1, age2);

console.log("hola");

const calcAge3 = (birthDay) => 2037 - birthDay;
const age3 = calcAge3(1997);
console.log(age3);

const yearUntilRetirement = (birthDay, firstName) => {
  const age = 2022 - birthDay;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1997, "Jorge"));
console.log(yearUntilRetirement(1978, "Massiel"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1997, "Jorge"));
console.log(yearsUntilRetirement(1970, "Massiel"));


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(y.length);
console.log(y[y.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob','Alice']

const firstName = "Jorge";
const jorge = [firstName, "Del Pino", 2022 - 1997, "student", friends];
console.log(jorge);
console.log(jorge.length);

// Exercise
const calcAge = function (birthDay) {
  return 2022 - birthDay;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1);
console.log(age2);
console.log(age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
console.log(ages[0], ages[1], ages[ages.length - 1]);


const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Add elements to the beginning
friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // First
console.log(friends);

// Say where is our element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // we get -1 when the element was not found

// say true or false if the element was found or not
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
friends.push(23);
console.log(friends.includes("23")); // this is false because 'includes' use strict mode of comparation
// in this case dont exist the coercion
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log(`you have a friend called ${friends[friends.indexOf("Steven")]}`);
}


const jorgeArray = [
  "Jorge",
  "Del Pino",
  2022 - 1997,
  "Student",
  ["David", "Adrian", "Bianca"],
];
console.log(jorgeArray);


const jorge = {
  firstName: "Jorge",
  lastName: "Del Pino",
  age: 2022 - 1997,
  job: "Student",
  friends: ["David", "Adrian", "Bianca"],
};
console.log(jorge);

console.log(jorge.lastName);
console.log(jorge["lastName"]);

const nameKey = "Name";
console.log(jorge["first" + nameKey]);
console.log(jorge["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jorge? Choose between firstName, lastName, age, job and friends."
);

if (jorge[interestedIn]) {
  console.log(jorge[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends."
  );
}

jorge.location = "Spain";
jorge["Twitter"] = "@massije";
console.log(jorge);

// Challenge
// "Jorge has 3 friends, and his best friend is called David."
console.log(
  `${jorge.firstName} has ${jorge.friends.length} friends, and his best friend is called ${jorge.friends[0]}.`
);


const jorge = {
  firstName: "Jorge",
  lastName: "Del Pino",
  birthYear: 1997,
  job: "Student",
  friends: ["David", "Adrian", "Bianca"],
  hasDrivesLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDrivesLicense ? "a" : "no"} driver's licence`;
  },
};

// console.log(jorge.calcAge(1991));
// console.log(jorge["calcAge"](1991));
console.log(jorge.calcAge());
console.log(jorge.age);

// Challenge
// "Jorge is a 25-year old student, and he has a driver's license"

console.log(jorge.getSummary());


const jorgeArray = [
  "jorge",
  "Del Pino",
  2022 - 1997,
  "student",
  ["David", "Adrian", "Bianca"],
  true,
];
const types = [];
for (let i = 0; i < jorgeArray.length; i++) {
  // Reading from jorge array
  console.log(jorgeArray[i], typeof jorgeArray[i]);
  // Filling types array
  // types[i] = typeof jorgeArray[i];
  types.push(typeof jorgeArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

console.log("---ONLY STRINGS---");
for (let i = 0; i < jorgeArray.length; i++) {
  if (typeof jorgeArray[i] !== "string") continue;
  console.log(jorgeArray[i], typeof jorgeArray[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < jorgeArray.length; i++) {
  if (typeof jorgeArray[i] === "number") break;
  console.log(jorgeArray[i], typeof jorgeArray[i]);
}


const jorgeArray = [
  "jorge",
  "Del Pino",
  2022 - 1997,
  "student",
  ["David", "Adrian", "Bianca"],
];

for (let i = jorgeArray.length - 1; i >= 0; i--) {
  console.log(i, jorgeArray[i]);
}

for (let exercise = 1; exercise <= jorgeArray.length; exercise++) {
  console.log(`----Exercise ${exercise}----`);
  for (let rep = 1; rep <= jorgeArray.length; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
  console.log("\n");
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`Resultado del dado es: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
*/
