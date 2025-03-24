// Exercise 1 : Analyzing the map method
[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return;
});

// What will the output be ?
// [2, 4, 6]

// Exercise 2: Analyzing the reduce method
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
);

// What will the output be ?
// [1, 2, 0, 1, 2, 3]

// Exercise 3 : Analyze this code
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

// What will be the output?
// 1 0
// 2 1
// 4 2
// 5 3
// 8 4
// 9 5

// Exercise 4 : Nested arrays
// Part 1: Modify the array to look like [1,2,3,[4],[5]]
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const modifiedArray = array.flat(2);
console.log(modifiedArray); // [1, 2, 3, [4], [5]]

// Bonus: One-liner
const modifiedArrayOneLiner = array.flat(2);
console.log(modifiedArrayOneLiner); // [1, 2, 3, [4], [5]]

// Part 2: Modify the greeting array
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const modifiedGreeting = greeting.map(arr => arr.join(' '));
console.log(modifiedGreeting); // ["Hello young grasshopper!", "you are", "learning fast!"]

// Turn the greeting array into a string
const greetingString = modifiedGreeting.join(' ');
console.log(greetingString); // "Hello young grasshopper! you are learning fast!"

// Part 3: Turn the trapped number into [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const untrapped = trapped.flat(Infinity);
console.log(untrapped); // [3]