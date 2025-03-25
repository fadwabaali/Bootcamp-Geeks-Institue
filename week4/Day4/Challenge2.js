// Function to check if all parameters are truthy
const allTruthy = (...args) => args.every(Boolean);

// Examples
console.log(allTruthy(true, true, true)); // ➞ true
console.log(allTruthy(true, false, true)); // ➞ false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); // ➞ false