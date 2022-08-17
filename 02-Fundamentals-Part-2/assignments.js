"use strict";

console.log("JavaScript Fundamentals - part 2\n");
console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Functions\n");
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.\n`;
}

const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descFinland = describeCountry("Finland", 6, "Helsinki");

console.log(descPortugal, descGermany, descFinland);

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Function Declarations vs. Expressions\n");
console.log("Function Declaration.");
function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);

console.log("---------------------------------------------------------------");

console.log("Function Statement.");
const percentageOfWorld2 = function (population) {
  return (population * 100) / 7900;
};

const percPortugal2 = percentageOfWorld2(10);
const percChina2 = percentageOfWorld2(1441);
const percUSA2 = percentageOfWorld2(332);
console.log(percPortugal2, percChina2, percUSA2);

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Arrow Function\n");
const percentageOfWorld3 = (population) => (population * 100) / 7900;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUSA3);

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Functions Calling Functions\n");

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, about which is about ${percentage}% of the world.`;
  console.log(description);
};

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Introduction to Arrays\n");
const populations = [10, 1441, 332, 83];

console.log(populations === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Basic Array Operations (Methods)\n");
const neighbours = ["Ecuador", "Brasil", "Bolivia"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}

console.log(neighbours.indexOf("Brasil"));
neighbours[neighbours.indexOf("Brasil")] = "Chile";
console.log(neighbours);

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Introduccion to Objects\n");
const myCountry = {
  country: "Peru",
  capital: "Lima",
  language: "Spanish",
  population: 10,
  neighbours: ["Brasil", "Bolivia", "Chile"],
};
console.log(myCountry);

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Dot vs. Bracket notation\n");
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} 
neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} 
neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry["population"] -= 2;

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} 
neighbouring countries and a capital called ${myCountry.capital}.`
);

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Object Methods\n");
const myCountry2 = {
  country: "Peru",
  capital: "Lima",
  language: "Spanish",
  population: 10,
  neighbours: ["Brasil", "Bolivia", "Chile"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    // this.isIsland = this.neighbours.length > 0 ? false : true;
    this.isIsland = !Boolean(this.neighbours.length);
  },
};

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2.isIsland);

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Iteration: The for Loop\n");

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Looping Arrays, Breaking and Continuing\n");
const populationss = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populationss.length; i++) {
  const perc = percentageOfWorld1(populationss[i]);
  percentages2.push(perc);
}

console.log(percentages2);
console.log(percentages);

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: Looping Backwards and Loops in Loops\n");
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log(`Lista de paises vecinos ${i + 1}:`);
  for (let x = 0; x < listOfNeighbours[i].length; x++) {
    console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
  }
  console.log("\n");
}

console.log("---------------------------------------------------------------");

console.log("\nLECTURE: The While Loop\n");
const percentages3 = [];

let counter = 0;
while (counter < populationss.length) {
  const perrc = percentageOfWorld1(populationss[counter]);
  percentages3.push(perrc);
  counter++;
}

console.log(percentages);
console.log(percentages3);
