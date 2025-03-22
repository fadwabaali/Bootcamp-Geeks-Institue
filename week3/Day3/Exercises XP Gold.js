// Exercise 1 : Select a kind of Music

// Retrieve the select element
const genresSelect = document.getElementById('genres');

// Display the value of the selected option
console.log(genresSelect.value);

// Add an additional option to the select tag
const newOption = document.createElement('option');
newOption.value = 'classic';
newOption.text = 'Classic';
genresSelect.appendChild(newOption);

// Make the newly added option selected by default
newOption.selected = true;

// Display the value of the newly selected option
console.log(genresSelect.value);

// Exercise 2: Delete colors
const removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', removecolor);

// Function to remove the selected color from the dropdown list
const removecolor = () => {
    const colorSelect = document.getElementById('colorSelect');
    colorSelect.remove(colorSelect.selectedIndex);
}

// Exercise 3 : Create a shopping list
// Create an empty array for the shopping list
let shoppingList = [];

// Create a form containing a text input field and an "AddItem" button
const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter item';
const addButton = document.createElement('button');
addButton.type = 'button';
addButton.textContent = 'AddItem';
form.appendChild(input);
form.appendChild(addButton);

// Add the form to the DOM
const root = document.getElementById('root');
root.appendChild(form);

// Create a "ClearAll" button and add it to the DOM
const clearButton = document.createElement('button');
clearButton.type = 'button';
clearButton.textContent = 'ClearAll';
root.appendChild(clearButton);

// Function to add an item to the shopping list
const addItem = () => {
    const item = input.value.trim();
    if (item) {
        shoppingList.push(item);
        input.value = '';
        displayList();
    }
};

// Function to clear all items from the shopping list
const clearAll = () => {
    shoppingList = [];
    displayList();
};

// Function to display the shopping list
const displayList = () => {
    const list = document.getElementById('shoppingList');
    if (list) {
        root.removeChild(list);
    }
    const ul = document.createElement('ul');
    ul.id = 'shoppingList';
    shoppingList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    root.appendChild(ul);
};

// Add event listeners to the buttons
addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearAll);