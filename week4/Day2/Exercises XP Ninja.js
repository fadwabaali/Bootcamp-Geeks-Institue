// Exercise 1 : Dog age to Human years
const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

let sumDogAgesLoop = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].type === 'dog') {
    sumDogAgesLoop += data[i].age * 7;
  }
}
console.log(sumDogAgesLoop); // Output: 154

const sumDogAgesReduce = data
  .filter(animal => animal.type === 'dog')
  .reduce((acc, dog) => acc + dog.age * 7, 0);
console.log(sumDogAgesReduce); // Output: 154

// Exercise 2 : Email
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanedEmail = userEmail3.trim();
console.log(cleanedEmail); // Output: 'cannotfillemailformcorrectly@gmail.com'

// Exercise 3 : Employees #3
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

const userRoles = users.reduce((acc, user) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  acc[fullName] = user.role;
  return acc;
}, {});
console.log(userRoles);

// Exercise 4 : Array to Object
const letters = ['x', 'y', 'z', 'z'];

const letterCountLoop = {};
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (letterCountLoop[letter]) {
    letterCountLoop[letter]++;
  } else {
    letterCountLoop[letter] = 1;
  }
}
console.log(letterCountLoop); // Output: { x: 1, y: 1, z: 2 }

const letterCountReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(letterCountReduce); // Output: { x: 1, y: 1, z: 2 }