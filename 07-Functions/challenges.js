'use strict';

/*
Coding Challenge #1

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.

Your tasks:

TODO
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:

  TODO
  1.1. Display a prompt window for the user to input the number of the
  selected option. The prompt should look like this:
    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)

  TODO
  1.2. Based on the input number, update the 'answers' array property. For
  example, if the option is 3, increase the value at position 3 of the array by
  1. Make sure to check if the input is a number and if the number makes
  sense (e.g. answer 52 wouldn't make sense, right?)

TODO
2. Call this method whenever the user clicks the "Answer poll" button.

TODO
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".

TODO
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

TODO
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
ยง Data 1: [5, 2, 3]
ยง Data 2: [1, 5, 3, 9, 6, 1]

Hints: Use many of the tools you learned about in this and the last section ๐

GOOD LUCK ๐
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  // MY SOLUTION
  // registerNewAnswer() {
  //   let str = `${this.question}`;
  //   for (const opt of this.options) {
  //     str += `\n${opt}`;
  //   }
  //   str += '\n(Write option number)';
  //   const answer = Number(prompt(str));

  //   if (answer >= 0 && answer <= 3) this.answers[answer]++;

  //   this.displayResults();
  //   this.displayResults('string');
  // },

  // displayResults(type = 'array') {
  //   if (type === 'array') {
  //     console.log(this.answers);
  //   } else {
  //     let str = 'Poll results are';
  //     for (let i = 0; i < this.answers.length - 1; i++) {
  //       str += ` ${this.answers[i]},`;
  //     }
  //     str += ` ${this.answers[this.answers.length - 1]}`;

  //     console.log(str);
  //   }
  // },

  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer >= 0 &&
      answer <= this.answers.length - 1 &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // bonus
// [5, 2, 3];
// [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// my solution
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // bonus
// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];

// poll.displayResults.call({ answers: data1 });
// poll.displayResults.call({ answers: data1 }, 'string');
// poll.displayResults.call({ answers: data2 });
// poll.displayResults.call({ answers: data2 }, 'string');

console.log('---- Challenge 2 -----');

/*
Coding Challenge #2

This is more of a thinking challenge than a coding challenge ๐ค

Your tasks:

TODO
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!

TODO
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.

GOOD LUCK ๐
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
