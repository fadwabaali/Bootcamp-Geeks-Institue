
const isAnagram = (str1, str2) => {
    const cleanString = (str) => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    return cleanString(str1) === cleanString(str2);
}

// exmple
console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true