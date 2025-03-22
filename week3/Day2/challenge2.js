let userInput = prompt("Enter several words separated by commas:");

// Split the input string into an array of words
let words = userInput.split(',');

// Trim any extra spaces from each word
words = words.map(word => word.trim());

// Find the length of the longest word
let maxLength = 0;
for (let word of words) {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
}

// Create the top and bottom border of the frame
let border = '*'.repeat(maxLength + 4);

// Print the top border
console.log(border);

// Print each word in the frame
for (let word of words) {
    console.log(`* ${word.padEnd(maxLength, ' ')} *`);
}

// Print the bottom border
console.log(border);