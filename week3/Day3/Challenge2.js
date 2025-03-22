// Daily challenge : Show only the letters
// // Retrieve the input element
const letterInput = document.getElementById('letterInput');

// Add an event listener to the input element to handle the input event
letterInput.addEventListener('input', (event) => {
    // Get the current value of the input
    const inputValue = event.target.value;

    // Use a regular expression to remove any character that is not a letter
    const filteredValue = inputValue.replace(/[^a-zA-Z]/g, '');

    // Set the filtered value back to the input
    event.target.value = filteredValue;
});