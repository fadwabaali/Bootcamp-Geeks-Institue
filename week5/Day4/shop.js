const products = require('./products.js');

const findProductByName = (productName) => {
    const product = products.find((item) => item.name === productName);
    if (product) {
        console.log(`Product found: Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
    } else {
        console.log(`Product with name "${productName}" not found.`);
    }
};

findProductByName('foo'); 
findProductByName('unknown');