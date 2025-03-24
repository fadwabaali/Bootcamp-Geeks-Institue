// 🌟 Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.map((color, i) => console.log(`#${i+1} choice is ${color}`))

colors.includes("Violet") ? console.log("Yeah") : console.log("No ..");

// 🌟 Exercise 2 : Colors #2
const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.map((color, i) => {
    const suffix = (i + 1) % 10 === 1 && (i + 1) !== 11 ? ordinal[1] :
                   (i + 1) % 10 === 2 && (i + 1) !== 12 ? ordinal[2] :
                   (i + 1) % 10 === 3 && (i + 1) !== 13 ? ordinal[3] : ordinal[0];
    console.log(`${i + 1}${suffix} choice is ${color}.`);
});

// Exercise 3 : Analyzing
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// ['bread', "carrot", "potato", 'chicken', "apple", "orange"]
// ------2------
const country = "USA";
console.log([...country]);
//['U','S','A']
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
 // [ undefined, undefined ]

//  🌟 Exercise 4 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

users.map(user => console.log("Hello" ,user.firstName));

let filtered = users.filter(user => user.role === "Full Stack Resident");
console.log("Full Stack Devs", filtered)

filtered.map(user => console.log(`firstName: ${user.firstName}, lastName: ${user.lastName}`));

// 🌟 Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const combinedEpic = epic.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
console.log(combinedEpic); 

// 🌟 Exercise 6 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

let passed = students.filter(student => student.isPassed);
console.log("Passed students", passed);

passed.map(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`))