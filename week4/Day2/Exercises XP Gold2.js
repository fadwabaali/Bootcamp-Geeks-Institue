// Exercise 1: Sum elements
const sumArray = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Exercise 2 : Remove Duplicates
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// Exercise 3 : Remove certain values
const removeFalsyValues = (arr) => arr.filter(value => value);
console.log(removeFalsyValues([NaN, 0, 15, false, -22, '', undefined, 47, null])); // Output: [15, -22, 47]

// Exercise 4 : Repeat please !
const repeat = (str, n = 1) => str.repeat(n);
console.log(repeat('Ha!', 3)); // Output: "Ha!Ha!Ha!"

// Exercise 5 : Turtle & Rabbit
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

console.log(startLine);
console.log(turtle.padStart(startLine.length));
console.log(rabbit.padStart(startLine.length));

// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?
// Explanation: The `trim` method removes any whitespace from both ends of the string. The `padEnd` method pads the string with '=' until the total length is 9.
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle); // Output: "🐢======="