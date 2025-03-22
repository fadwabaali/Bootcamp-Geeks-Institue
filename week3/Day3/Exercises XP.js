// 🌟 Exercise 1 : Change the article
// Retrieve the h1 and console.log it
const h1 = document.querySelector('h1');
console.log(h1);

// Remove the last paragraph in the <article> tag
const article = document.querySelector('article');
const lastParagraph = article.querySelector('p:last-of-type');
article.removeChild(lastParagraph);

// Add an event listener to change the background color of the h2 to red when clicked
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red';
});

// Add an event listener to hide the h3 when clicked
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none';
});

// Add a button to make the text of all paragraphs bold when clicked
const boldButton = document.getElementById('boldButton');
boldButton.addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('article p');
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = 'bold';
    });
});

// BONUS: When you hover on the h1, set the font size to a random pixel size between 0 to 100
h1.addEventListener('mouseover', () => {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = `${randomSize}px`;
});

// BONUS: When you hover on the 2nd paragraph, it should fade out
const secondParagraph = article.querySelectorAll('p')[1];
secondParagraph.addEventListener('mouseover', () => {
    secondParagraph.classList.add('fade-out');
});

// 🌟 Exercise 2 : Work with forms

// Retrieve the form and console.log it
const form = document.querySelector('form');
console.log(form);

// Retrieve the inputs by their id and console.log them
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput);
console.log(lnameInput);

// Retrieve the inputs by their name attribute and console.log them
const fnameInputByName = document.querySelector('input[name="firstname"]');
const lnameInputByName = document.querySelector('input[name="lastname"]');
console.log(fnameInputByName);
console.log(lnameInputByName);

// Add submit event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the input tags
    const fnameValue = fnameInput.value.trim();
    const lnameValue = lnameInput.value.trim();

    // Make sure that they are not empty
    if (fnameValue === '' || lnameValue === '') {
        alert('Please fill in both fields.');
        return;
    }

    // Create an li per input value
    const fnameLi = document.createElement('li');
    fnameLi.textContent = fnameValue;
    const lnameLi = document.createElement('li');
    lnameLi.textContent = lnameValue;

    // Append them to the <ul class="usersAnswer"></ul>
    const usersAnswerUl = document.querySelector('.usersAnswer');
    usersAnswerUl.appendChild(fnameLi);
    usersAnswerUl.appendChild(lnameLi);

    // Clear the input fields
    fnameInput.value = '';
    lnameInput.value = '';
});

// 🌟 Exercise 3 : Transform the sentence
// Declare a global variable named allBoldItems
let allBoldItems;

// Create a function called getBoldItems() that takes no parameter
// This function should collect all the bold items inside the paragraph
// and assign them to the allBoldItems variable
const getBoldItems = () => {
    allBoldItems = document.querySelectorAll('p strong');
};

// Create a function called highlight() that changes the color of all the bold text to blue
const highlight = () => {
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
};

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black
const returnItemsToDefault = () => {
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
};

// Call the function highlight() on mouseover, and the function returnItemsToDefault() on mouseout
const paragraph = document.querySelector('p:last-of-type');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);

// Initialize the allBoldItems variable by calling getBoldItems()
getBoldItems();

// 🌟 Exercice 4 : Volume of a sphere
const form1 = document.getElementById('MyForm');
form1.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve the radius input value
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the volume in the volume input field
    const volumeInput = document.getElementById('volume');
    volumeInput.value = volume.toFixed(2); // Round to 2 decimal places
});