let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit))
}


const cloneGroceries = () => {
    let user = client

    client = "Betty"
    // No, because user is a copy of the value of client (primitive type)

    let shopping = groceries
    shopping.totalPrice = "35$";
    // Yes, because shopping is a reference to the same object as groceries.
    shopping.other.paid = false;
    // Yes, because shopping is a reference to the same object as groceries
}
displayGroceries() 
cloneGroceries();

// Check the results
console.log(client); // "Betty"
console.log(groceries.totalPrice); // "35$"
console.log(groceries.other.paid); // false