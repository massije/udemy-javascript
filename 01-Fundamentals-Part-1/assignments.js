console.log(
  "\n\n------------------------------------------------------------------------------------"
);
console.log("ASSIGNMENTS");
console.log("\nJavaScript Fundamentals - Part 1 \n\n");

console.log("LECTURE: Values and Varibles\n");
const country = "Spain";
const continent = "Europe";
let population = 48;

console.log(country);
console.log(continent);
console.log(population);

console.log("\n\nLECTURE: Data Types\n");
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log("\n\nLECTURE: let, const, var");
language = "spanish";
console.log(language);
//isIsland = true; // esto da error, ya que no puede variar, porque e sun valor constante;

console.log("\n\nLECTURE: Basic Operators\n");
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description1);

console.log("\n\nLECTURE: Stings and Template Literals\n");
description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

console.log("\n\nLECTURE: Taking Decisions: if/ else statements\n");

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average.`
  );
}

console.log("\n\nLECTURE: Type Conversion and Coercion.");
