// 🌟 Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.shift();
console.log(people);

// Write code to replace “James” to “Jason”.
people[people.indexOf('James')] = 'Jason';
console.log(people);

// Write code to add your name to the end of the people array.
people.push('Fadwa');
console.log(people);
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'));

// Write code to make a copy of the people array using the slice method.
const copiedPeople = people.slice(1, people.length - 1);
console.log(copiedPeople);
// Write code that gives the index of “Foo”
console.log(people.indexOf('Foo'));//cuz theres no foo

// Using a loop, iterate through the people array 
people.map(p => console.log(p));

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon”
people.map(p => {
    if (p === 'Devon') {
        console.log("p", p);
    }
})

// 🌟 Exercise 2 : Your favorite colors
const colors = ["blue", "green", "red", "yellow","purple"];

// Loop through the array and as you loop console.log 
colors.map( (col,i) => console.log(`"My #${i} choice is ${col}`));

// 🌟 Exercise 3 : Repeat the question
// do {
//     number = prompt("Enter a number:");
//     number = Number(number); 
// } while (typeof number === "number" && number < 10);

// 🌟 Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.

console.log("Number of floors:", building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.

console.log("Number of apartments on floors 1 and 3:", building.numberOfAptByFloor.firstFloor + " , " + building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant
console.log("Name of the second tenant:", building.nameOfTenants[1]);

// the number of rooms he has in his apartment.
console.log("Number of rooms Dan has in his apartment:", building.numberOfRoomsAndRent.dan[0]);

// 🌟 Exercise 5 : Family

const family = {
    mom: "Habiba",
    son:"Abdo",
    sister: "Fadwa"
}

console.log("Family keys:");
for (let key in family) {
    console.log(key);
}

console.log("Family values:");
for (let key in family) {
    console.log(family[key]);
}

// Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Fadwa',
    the: 'dev'
};

let sentence = "";

for (let key in details) {
    sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim()); 
// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const secretSociety = names.map(name => name[0]) // Get first letter of each name
                           .sort() // Sort them alphabetically
                           .join(""); // Combine into a single string

console.log(secretSociety); 
