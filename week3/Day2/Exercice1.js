// 🌟 Exercise 1 : Find the numbers divisible by 23
const displayNumbersDivisible = (div) => {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % div === 0) {
            sum += i;
            console.log(i);
            
        }
    }
    console.log("sum: " + sum);

}

displayNumbersDivisible(3);

// 🌟 Exercise 2 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;

    // Loop through the shopping list
    for (let item of shoppingList) {
        // Check if the item is in stock
        if (item in stock && stock[item] > 0) {
            // Add the price to the total
            total += prices[item];
            // Decrease the stock by 1
            stock[item] -= 1;
        } else {
            console.log(`Sorry, ${item} is out of stock.`);
        }
    }

    return total;
}

// Call the function and log the total bill
console.log("Total bill:", myBill());

// Exercise 3 : What’s in my wallet ?
function changeEnough(itemPrice, amountOfChange) {
    // Calculate the total amount of change by multiplying each coin type by its value
    let totalChange = (amountOfChange[0] * 0.25) + (amountOfChange[1] * 0.10) + (amountOfChange[2] * 0.05) + (amountOfChange[3] * 0.01);
    
    // If the total change is greater than or equal to the item price, return true, otherwise return false
    if (totalChange >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
console.log(changeEnough(14.11, [2, 100, 0, 0]));  // Should return false
console.log(changeEnough(0.75, [0, 0, 20, 5]));    // Should return true

// 🌟 Exercise 4 : Vacations Costs
// Function to calculate the cost of the hotel stay
function hotelCost(nights) {
    const costPerNight = 140;
    return nights * costPerNight;
}

// Function to calculate the cost of the plane ride
function planeRideCost(destination) {
    let price;
    if (destination === "London") {
        price = 183;
    } else if (destination === "Paris") {
        price = 220;
    } else {
        price = 300;
    }
    return price;
}

// Function to calculate the cost of renting the car
function rentalCarCost(days) {
    const dailyRate = 40;
    let totalCost = days * dailyRate;

    // Apply 5% discount for renting more than 10 days
    if (days > 10) {
        totalCost -= totalCost * 0.05;
    }
    return totalCost;
}

// Function to calculate the total vacation cost
function totalVacationCost() {
    // Ask the user for inputs
    let nights = parseInt(prompt("How many nights will you stay at the hotel?"));
    while (isNaN(nights) || nights <= 0) {
        nights = parseInt(prompt("Please enter a valid number for the number of nights:"));
    }

    let destination = prompt("Where are you traveling to? (e.g., London, Paris)");
    while (typeof destination !== 'string' || destination.trim() === "") {
        destination = prompt("Please enter a valid destination (e.g., London, Paris):");
    }

    let days = parseInt(prompt("How many days will you rent the car?"));
    while (isNaN(days) || days <= 0) {
        days = parseInt(prompt("Please enter a valid number for the number of rental days:"));
    }

    // Call the functions to calculate costs
    const hotelCostTotal = hotelCost(nights);
    const planeTicketCost = planeRideCost(destination);
    const carRentalCost = rentalCarCost(days);

    // Calculate the total vacation cost
    const totalCost = hotelCostTotal + planeTicketCost + carRentalCost;

    // Display the result
    console.log(`The car cost: $${carRentalCost}, the hotel cost: $${hotelCostTotal}, the plane tickets cost: $${planeTicketCost}.`);
    console.log(`Your total vacation cost is: $${totalCost}`);
}

// Call the function to run the program
totalVacationCost();

// 🌟 Exercise 5 : Users

// Retrieve the div and log it
const container = document.getElementById('container');
console.log(container);

// Change the name "Pete" to "Richard"
const listItems = document.querySelectorAll('.list li');
for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === 'Pete') {
        listItems[i].textContent = 'Richard';
    }
}

// Delete the second <li> of the second <ul>
const secondUl = document.querySelectorAll('.list')[1];  // Select the second <ul>
const secondLi = secondUl.querySelectorAll('li')[1];  // Select the second <li>
secondLi.remove();  // Remove it

// Change the name of the first <li> of each <ul> to your name
const uls = document.querySelectorAll('.list');
uls.forEach(ul => {
    const firstLi = ul.querySelector('li');
    firstLi.textContent = 'Fadwa';  // Change to your name
});

// Add a class called student_list to both of the <ul>'s
uls.forEach(ul => {
    ul.classList.add('student_list');
});

// Add the classes university and attendance to the first <ul>
const firstUl = document.querySelectorAll('.list')[0];  // Select the first <ul>
firstUl.classList.add('university', 'attendance');

// Add a “light blue” background color and some padding to the <div>
container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';

// Do not display the <li> that contains the text node “Dan”
const allLis = document.querySelectorAll('li');
allLis.forEach(li => {
    if (li.textContent === 'Dan') {
        li.style.display = 'none';  // Hide it
    }
});

// Add a border to the <li> that contains the text node “Richard”
allLis.forEach(li => {
    if (li.textContent === 'Richard') {
        li.style.border = '2px solid black';
    }
});

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y”
if (container.style.backgroundColor === 'lightblue') {
    const userNames = [];
    allLis.forEach(li => {
        userNames.push(li.textContent);
    });
    alert(`Hello ${userNames[0]} and ${userNames[1]}`);
}

// 🌟 Exercise 6 : Change the navbar
// Change the id attribute from 'navBar' to 'socialNetworkNavigation'
const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

// Create a new <li> and add "Logout"
const newLi = document.createElement('li');  // Create a new <li> element
const textNode = document.createTextNode('Logout');  // Create a new text node with "Logout"
newLi.appendChild(textNode);  // Append the text node to the new <li>

// Append the new <li> to the <ul>
const ul = navBar.querySelector('ul');  // Select the <ul> inside the div
ul.appendChild(newLi);  // Append the new <li> element to the <ul>

// Retrieve and display the text of the first and last <li> using firstElementChild and lastElementChild
const firstLi = ul.firstElementChild;  // Retrieve the first <li>
const lastLi = ul.lastElementChild;  // Retrieve the last <li>

console.log("First item:", firstLi.textContent);  // Display the text content of the first <li>
console.log("Last item:", lastLi.textContent);  // Display the text content of the last <li>

// Exercise 7 : My Book List

const allBooks = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: true
    },
    {
        title: "The secret",
        author: "Rhonda Byrne",
        image: "https://m.media-amazon.com/images/I/51WRL8OBsvL._SX342_SY445_.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks");
allBooks.forEach(book => {
    const bookDiv = document.createElement("div"); // Create book container
    bookDiv.classList.add("book"); // Add class for styling

    const bookImage = document.createElement("img"); // Create image element
    bookImage.src = book.image; // Set image URL
    bookDiv.appendChild(bookImage); // Append image to book div

    const bookDetails = document.createElement("p"); // Create paragraph for details
    bookDetails.textContent = `${book.title} written by ${book.author}`; // Set text
    if (book.alreadyRead) {
        bookDetails.classList.add("read"); // Add red color if already read
    }
    bookDiv.appendChild(bookDetails); // Append details to book div

    section.appendChild(bookDiv); // Append book div to section
});