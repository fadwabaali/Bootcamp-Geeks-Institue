// 1st daily challenge
const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(word => typeof word === 'string')) {
            resolve(arr.map(word => word.toUpperCase())); 
        } else {
            reject('Array should only contain strings');
        }
    });
};

const sortWords = ( upparr ) => {
    return new Promise((resolve, reject) => {
        if (upparr.length > 4) {
            resolve(upparr.sort());
        }
        else {
            reject('Array should have more than 4 strings');
        }
    })
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


// 2nd daily challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

  const toJs = () => {
    return new Promise((resolve, reject) => {
        try {
            const morseJS = JSON.parse(morse);
            resolve(morseJS);
        } catch (error) {
            reject("Error: Failed to parse Morse code JSON.");
        }
    });
};

const toMorse = (morseJS) => {
    return new Promise((resolve, reject) => {
        const userInput = prompt("Enter a word or sentence:").toLowerCase();
        const morseTranslation = [];

        for (const char of userInput) {
            if (morseJS[char]) {
                morseTranslation.push(morseJS[char]);
            } else {
                reject(`Error: Character "${char}" not found in Morse code.`);
                return;
            }
        }
        resolve(morseTranslation);
    });
};
const joinWords = (morseTranslation) => {
    document.body.innerHTML = morseTranslation.join("<br>");
};

// Chain the promises
toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((error) => console.log(error));