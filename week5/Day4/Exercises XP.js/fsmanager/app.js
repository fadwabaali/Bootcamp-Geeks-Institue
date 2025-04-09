import { persons } from '../../data.js';

import { readFile, writeFile } from './fileManager.js';

const helloFilePath = './Hello World.txt';
const byeFilePath = './Bye World.txt';

// 🌟 Exercise 2: 
const calculateAverageAge = (people) => {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
};

const averageAge = calculateAverageAge(persons);
console.log(`The average age is: ${averageAge}`);


// 🌟 Exercise 3
readFile(helloFilePath)
    .then((data) => {
        console.log(`Content of "${helloFilePath}": ${data}`);
        return writeFile(byeFilePath, 'Writing to the file');
    })
    .then((writeMessage) => {
        console.log(writeMessage);
        return readFile(byeFilePath);
    })
    .then((data) => {
        console.log(`Updated content of "${byeFilePath}": ${data}`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });