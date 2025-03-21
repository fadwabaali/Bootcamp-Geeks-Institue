const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// 1. Using .toString() method to convert the array to a string
const stringFromArray1 = numbers.toString();
console.log("Using .toString():", stringFromArray1);

// 2. Using .join() method to convert the array to a string with different delimiters
const stringFromArray2 = numbers.join("+");
console.log("Using .join('+'):", stringFromArray2);

const stringFromArray3 = numbers.join(" ");
console.log("Using .join(' '):", stringFromArray3);

const stringFromArray4 = numbers.join("");
console.log("Using .join(''):", stringFromArray4);

// Bonus: Sorting the array in descending order using Bubble Sort
for (let i = 0; i < numbers.length; i++) {
    // Outer loop controls how many times we go through the array
    for (let j = 0; j < numbers.length - i - 1; j++) {
        // If the current number is smaller than the next, swap them
        if (numbers[j] < numbers[j + 1]) {
            // Swap using a temporary variable
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
    // Log the result after each outer loop iteration to see the sorting process
    console.log(`After iteration ${i + 1}:`, numbers);
}

// Final sorted result
console.log("Sorted array in descending order:", numbers);
