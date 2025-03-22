// Exercise 1 : is_Blank
const isBlank = (str) => str.trim().length === 0;
console.log(isBlank('')); // true
console.log(isBlank('abc')); // false

// Exercise 2 : Abbrev_name
const abbrevName = (str) => {
    let name = str.split(" ");
    return name[0] + " " + name[1].charAt(0) + ".";
}

console.log(abbrevName("Robin Singh"));// --> "Robin S."
// Exercise 3 : SwapCase

const swapCase = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}
console.log(swapCase('The Quick Brown Fox')); // tHE qUICK bROWN fOX
console.log(swapCase('Hello World')); // hELLO wORLD

// Exercise 4 : Omnipresent value
const isOmnipresent = (arr, value) => {
    for (let subArray of arr) {
        if (!subArray.includes(value)) {
            return false;
        }
    }
    return true;
}
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) //➞ true
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) //➞ false