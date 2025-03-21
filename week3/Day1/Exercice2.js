// Exercise 1 : Divisible by three
let numbers = [123, 8409, 100053, 333333333, 7]

for (let number of numbers) {
    console.log(number % 3 === 0);
}

// Exercise 2 : Attendance
// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
// };

// let name = prompt("Enter your name:").toLowerCase();

// if (name in guestList) {
//     console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
// } else {
//     console.log("Hi! I'm a guest.");
// }

// Exercise 3 : Playing with numbers
let age = [20,5,12,43,98,55];
let sum = 0;

for (let i = 0; i < age.length; i++) {
    sum += age[i];
}
console.log("Sum:", sum);

// 2. Highest age
let maxAge = age[0];
for (let i = 1; i < age.length; i++) {
    if (age[i] > maxAge) {
        maxAge = age[i];
    }
}
console.log("Highest Age:", maxAge);