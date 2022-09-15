'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked In');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
console.log(jonas);
checkIn(flight, jonas);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Trasnformed string: ${fn(str)}`);
  console.log(`Trasnsformed by: ${fn.name}`);
};

transformer('javascript is the best!', upperFirstWord);
console.log('\n');
transformer('javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function (name) {
  console.log(`Hola ${name}`);
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


let greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');

greetHey('Jorge');
greetHey('Martin');

greet('Hello')('David');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}!!!!`);

const newSaludo = greetArr('Hola');
newSaludo('Amigos');
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${(this, this.airline)} flight ${
        this.iataCode
      }${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jorge Martin');
lufthansa.book(635, 'Jhon Smith');
console.log('\n');

const eurowings = {
  airline: 'Eurowigs',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book (23. 'Sarah williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method --> ya no usamos este metodo en javascript moderno
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

// Bind method --> este metodo es muy util si vamos a estar creando varias reservas a
// lo largo del tiempo
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Willians');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jorge Martin');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.23, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(200));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

const addTaxRate = rate => value => value + value * rate;

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(200));
