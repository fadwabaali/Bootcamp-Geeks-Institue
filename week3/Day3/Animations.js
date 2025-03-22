// Part 1: Using setTimeout, call a function after 2 seconds to alert "Hello World".
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part 2: Using setTimeout, call a function after 2 seconds to add a new paragraph <p>Hello World</p> to the <div id="container">.
setTimeout(() => {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
}, 2000);

// Part 3: Using setInterval, call a function every 2 seconds to add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared when the user clicks on the button or when there are 5 paragraphs inside the <div id="container">.
const intervalId = setInterval(() => {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);

    // Clear the interval if there are 5 paragraphs inside the container
    if (container.getElementsByTagName('p').length >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

// Add an event listener to the button to clear the interval when clicked
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    clearInterval(intervalId);
});

// 🌟 Exercise 2 : Move the box
function myMove() {
    const elem = document.getElementById("animate");
    let pos = 0;
    const id = setInterval(frame, 1);
    function frame() {
        if (pos >= 350) { // 400px (container width) - 50px (animate width)
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}