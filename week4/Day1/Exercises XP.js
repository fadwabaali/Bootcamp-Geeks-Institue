
// 🌟 Exercise 1 : Scope

// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne(); // Prediction: inside the funcOne function 3
// #1.2 What will happen if the variable is declared with const instead of let ?
// If the variable is declared with const, it will cause an error because a const variable cannot be reassigned.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree(); // Prediction: inside the funcThree function 0
funcTwo();
funcThree(); // Prediction: inside the funcThree function 5
// #2.2 What will happen if the variable is declared with const instead of let ?
// If the variable is declared with const, it will cause an error because a const variable cannot be reassigned.

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();
funcFive(); // Prediction: inside the funcFive function hello
// The variable `a` is set on the global window object, so it is accessible in funcFive.

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix(); // Prediction: inside the funcSix function test
// #4.2 What will happen if the variable is declared with const instead of let ?
// If the variable is declared with const, it will still work because the inner `a` is a separate variable from the outer `a`.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// Prediction: in the if block 5
// Prediction: outside of the if block 2
// #5.2 What will happen if the variable is declared with const instead of let ?
// If the variable is declared with const, it will still work because the inner `a` is a separate variable from the outer `a`.

// 🌟 Exercise 2 : Ternary operator
// function winBattle(){
//     return true;
// }

const winBattle = () => true

battle = winBattle();

let experiencePoints = (battle) ? 10 : 1;
console.log('experiencePoints' , experiencePoints);


// 🌟 Exercise 3 : Is it a string ?
const isString = (value) => typeof value === 'string';

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false

// 🌟 Exercise 4 : Find the sum
const sum = (a, b) => a + b;

// 🌟 Exercise 5 : Kg and grams

// Function declaration
function KgToGrams(weight) {
    return weight * 1000;
}

console.log(KgToGrams(5)); // 5000 grams

// Function expression
const kgToGramsExpr = function (weight) {
    return weight * 1000;
}

console.log(KgToGrams(5)); // 5000 grams

// Arrow function
const kgToGramsArrow = (weight) => weight * 1000;

// 🌟 Exercise 6 : Fortune teller
(function (numChildren, partnerName, location, jobTitle) {
    const message = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    const div = document.createElement('div');
    div.textContent = message;
    document.body.appendChild(div);
})(3, 'Alice', 'New York', 'Software Developer');

// 🌟 Exercise 7 : Welcome
(function (userName) {
    const navbar = document.getElementById('navbar');
    const userDiv = document.createElement('div');
    userDiv.className = 'user-info';

    const profilePic = document.createElement('img');
    profilePic.src = 'https://via.placeholder.com/50'; // Placeholder image URL
    profilePic.alt = 'Profile Picture';

    const userNameSpan = document.createElement('span');
    userNameSpan.textContent = userName;

    userDiv.appendChild(profilePic);
    userDiv.appendChild(userNameSpan);
    navbar.appendChild(userDiv);
})('John');
// 🌟 Exercise 8 : Juice Bar
function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        const div = document.createElement('div');
        div.textContent = message;
        document.body.appendChild(div);
    }

    addIngredients('apple', 'banana', 'orange');
    addIngredients('mango', 'pineapple', 'strawberry');
    displayJuice();
}

makeJuice('large');