'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as
      // outer scope's variable

      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you are millenial, ${firstName} `;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';
    }
    // console.log(str); esto no funciona porque const tiene un alcance de bloque
    console.log(millenial); // esto si funciona porque var es un tipo de variable con alcance de
    // funcion
    console.log(output);

    // console.log(add(2, 3)); // esto no funciona porque las funciones tambien tiene alcance de bloque
    // pero solo si el modo estricto esta activado
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);


console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jorge';
let job = 'Teacher';
const year = 1991;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;


//Example
console.log(undefined);

if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All productd deleted!');
}

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // En esta funcion la palabra this apunta a su padre scope porque esa en la funcionalidad
  //que tienen las Arrow Functions
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

console.log(matilda);
console.log(jonas);


const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution #1
    // const self = this; // esto puede ser llamado self or that
    // const isMillenial = function () {
    //   console.log(self.year >= 1991 && self.year <= 1996);
    // };
    // isMillenial();

    // Solutions #2
    const isMillenial = () => {
      console.log(this.year >= 1991 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5, 8);
addExpr(2, 5, 8, 12); // podemos pasar todos los argumentos que deseemos

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8); // esto no funciona porque las arrow function no tienen argumentos
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// References types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'; // esto modificara el objeto que se encuentra en la heap y afectara a todos
// aquellos identificadores que apunten a dicho objeto
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {}; esto no se puede hacer porque ahora si que estariamos creando un nuevo objeto en la heap
// y al ser const no se podria modificar

// Copying objects
// Esto que vamos a hacer es una copia pero en primet nivel

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // a esto se le llama de primer nivel porque
// solo podemos copiar las propiedas del primer objeto y crear otro como nuevo, pero los objetos anidados
// que contenga dentro no se podran copiar como nuevos objetos.
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
