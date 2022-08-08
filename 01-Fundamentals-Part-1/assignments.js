console.log(
  "\n\n------------------------------------------------------------------------------------"
);
console.log("ASSIGNMENTS");
console.log("\nJavaScript Fundamentals - Part 1 \n\n");

console.log("LECTURE: Values and Varibles.\n");
const country = "Spain";
const continent = "Europe";
let population = 48;

console.log(country);
console.log(continent);
console.log(population);

console.log("\n\nLECTURE: Data Types.\n");
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log("\n\nLECTURE: let, const, var.");
language = "spanish";
console.log(language);
//isIsland = true; // esto da error, ya que no puede variar, porque e sun valor constante;

console.log("\n\nLECTURE: Basic Operators.\n");
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

console.log("\n\nLECTURE: Stings and Template Literals.\n");
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
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 53);
console.log(5 + 6 + "4" + 9 - 4 - 2);

console.log("\n\nLECTURE: Equality Operators: == vs. ===.");
const numNeighbours = Number(
  prompt("How many neighbours countries does your contry have?.")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!.");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}

console.log("\n\nLECTURE: Logical Operators.");
if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

console.log("\n\nLECTURE: The switch Statement.");
const languageGiven = prompt("Language: ");
switch (languageGiven) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log("\n\nLECTURE: The Conditional(Ternary) Operator.");
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
