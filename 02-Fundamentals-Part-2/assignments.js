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
