const greet = require('./greeting.js');
const displayColorfulMessage = require('./colorful-message.js');
const readFileContent = require('./files/read-file.js');

const userName = "Fadwa"; 
const message = greet(userName);

console.log(message); 
displayColorfulMessage(); 
readFileContent(); 