// Exercise 1 : Checking the BMI
const person1 = {
    fullName: "Fadwa Aitbaali",
    mass: 55,
    height: 1.63,
    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

const person2 = {
    fullName: "Meriem Mouhim",
    mass: 100,
    height: 1.2,
    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

function compareBMI(personA, personB) {
    const bmiA = personA.calcBMI();
    const bmiB = personB.calcBMI();

    if (bmiA > bmiB) {
        console.log(`${personA.fullName} has the higher BMI (${bmiA.toFixed(2)})`);
    } else if (bmiB > bmiA) {
        console.log(`${personB.fullName} has the higher BMI (${bmiB.toFixed(2)})`);
    } else {
        console.log("Both have the same BMI");
    }
}

compareBMI(person1, person2);

// Exercise 2: Grade Average

function calculateAverage(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    return sum / gradesList.length;
}

function findAvg(gradesList) {
    let average = calculateAverage(gradesList);
    console.log(`Average grade: ${average.toFixed(2)}`);

    if (average >= 65) {
        console.log("You passed!");
    } else {
        console.log("You failed and must repeat the course.");
    }
}

// Example usage
findAvg([75, 80, 90, 60, 50]); // Change the values to test different cases
