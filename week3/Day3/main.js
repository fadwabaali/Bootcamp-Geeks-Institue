// Exercise 1 : Calculate the tip
// Create a function called calculateTip() that takes no parameter
function calculateTip() {
    // Create a variable called billAmount that fetches the value of the input, which id is billamt
    const billAmount = document.getElementById('billamt').value;

    // Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual
    const serviceQuality = document.getElementById('serviceQual').value;

    // Create a variable called numberOfPeople that fetches the value of the input, which id is peopleamt
    let numberOfPeople = document.getElementById('peopleamt').value;

    // Create a condition: If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values
    if (serviceQuality == 0 || billAmount === '') {
        alert('Please enter the bill amount and select the service quality.');
        return;
    }

    // Create another condition: If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople
    // and make sure that the tag which id is each, is not displayed
    if (numberOfPeople === '' || numberOfPeople < 1) {
        numberOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }

    // Create a variable named total: the value should be (billAmount * serviceQuality) / numberOfPeople
    const total = (billAmount * serviceQuality) / numberOfPeople;

    // Use the toFixed method to round total to two decimal points
    const roundedTotal = total.toFixed(2);

    // Add the CSS property “display:block” to the tag which id is totalTip
    document.getElementById('totalTip').style.display = 'block';

    // Display the variable total in the tag which id is tip
    document.getElementById('tip').textContent = roundedTotal;
}

// Add an event listener to the button to call the calculateTip function when clicked
document.getElementById('calculate').addEventListener('click', calculateTip);