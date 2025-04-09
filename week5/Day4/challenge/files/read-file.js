const fs = require('fs');
const path = require('path');

const readFileContent = () => {
    const filePath = path.join(__dirname, 'file-data.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
            console.log('File Content:', data);
        }
    });
};

module.exports = readFileContent;