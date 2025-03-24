// Exercise 1 : Nested functions

// Original function
let landscape = function() {
    let result = "";

    let flat = function(x) {
        for (let count = 0; count < x; count++) {
            result += "_";
        }
    }

    let mountain = function(x) {
        result += "/";
        for (let counter = 0; counter < x; counter++) {
            result += "'";
        }
        result += "\\";
    }

    flat(4);
    mountain(4);
    flat(4);

    return result;
}

console.log(landscape()); // Prediction: ____/''''\____

// Nested arrow functions
const landscapeArrow = () => {
    let result = "";

    const flat = (x) => {
        for (let count = 0; count < x; count++) {
            result += "_";
        }
    }

    const mountain = (x) => {
        result += "/";
        for (let counter = 0; counter < x; counter++) {
            result += "'";
        }
        result += "\\";
    }

    flat(4);
    mountain(4);
    flat(4);

    return result;
}

console.log(landscapeArrow()); // Prediction: ____/''''\____

// Exercise 2 : Closure
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3); // Prediction: 13

// Exercise 3 : Currying
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1); // Prediction: 31

// Exercise 4 : Currying
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
add5(12); // Prediction: 17

// Exercise 5 : Composing
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add = (num) => num + 5;
compose(add1, add)(10); // Prediction: 16

