import _ from 'lodash';
import { add, multiply } from './math.js'; 

const sum = add(10, 20);
const product = multiply(5, 4);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`); 

const numbers = [1, 2, 3, 4, 5];
const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);

console.log(`Max number: ${maxNumber}`);
console.log(`Min number: ${minNumber}`);