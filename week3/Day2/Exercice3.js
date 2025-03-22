const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number: ${randomNumber}`);

for (let i = 0; i <= randomNumber; i++) i % 2 === 0 ? console.log(i) : null;


// Exercise 2: Capitalized letters
const capitalize = (str) => {
    let evenIndexCapitalized = "";
    let oddIndexCapitalized = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenIndexCapitalized += str[i].toUpperCase();
            oddIndexCapitalized += str[i].toLowerCase();
        } else {
            evenIndexCapitalized += str[i].toLowerCase();
            oddIndexCapitalized += str[i].toUpperCase();
        }
    }

    return [evenIndexCapitalized, oddIndexCapitalized];
}

console.log(capitalize("abcdef")); 

// Exercise 3 : Is palindrome?
const isPalindrome = (str) => {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("aya"));

// Exercise 4 : Biggest Number

const biggestNumberInArray = (arrayNumber) => {
    return Math.max(...arrayNumber);
}

const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 

console.log(biggestNumberInArray(array));

// Exercise 5: Unique Elements

const uniqueElements = (array) => {
    return [...new Set(array)];
}

const array2 = [1, 2, 2, 3, 3, 4, 4, 5]; // should return [1, 2, 3, 4, 5]

console.log(uniqueElements(array2));

// Exercise 6 : Calendar