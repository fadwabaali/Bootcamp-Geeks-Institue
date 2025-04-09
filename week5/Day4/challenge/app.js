const greet = require('./greeting.js');
const displayColorfulMessage = require('./colorful-message.js');

const userName = "Fadwa"; 
const message = greet(userName);

console.log(message);

displayColorfulMessage();