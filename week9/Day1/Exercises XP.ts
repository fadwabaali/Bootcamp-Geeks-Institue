// 🌟 Exercise 1: Hello, World! Program
const hello = (): void => {
    console.log("hello, world!");
}
hello();

// 🌟 Exercise 2: Type Annotations
let age: number = 25;
let name1: string = "John Doe";
console.log(`Age: ${age}`);
console.log(`Name: ${name1}`);

// 🌟 Exercise 3: Union Types
let id: number | string = 12345;
id = "abc123";
console.log(`ID: ${id}`);

// 🌟 Exercise 4: Control Flow with if...else
const checkNumber = (num: number): string => {
    if (num > 0) {
        return "The number is positive.";
    } else if (num < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
};

console.log(checkNumber(10)); 
console.log(checkNumber(-5)); 
console.log(checkNumber(0));  

// 🌟 Exercise 5: Tuple Types
const getDetails = (name: string, age: number): [string, number, string] => {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
};
const details = getDetails("Alice", 25);
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']

// 🌟 Exercise 6: Object Type Annotations
type Person = {
    name: string;
    age: number;
};

const createPerson = (name: string, age: number): Person => {
    return { name, age };
};

const person = createPerson("Alice", 30);
console.log(person); // Output: { name: 'Alice', age: 30 }

// 🌟 Exercise 7: Type Assertions
const manipulateInputElement = (): void => {
    const inputElement = document.getElementById("myInput") as HTMLInputElement;

    if (inputElement) {
        inputElement.value = "Hello, TypeScript!";
        console.log(`Input value set to: ${inputElement.value}`);
    } else {
        console.error("Element with ID 'myInput' not found.");
    }
};

manipulateInputElement();

// 🌟 Exercise 8: switch Statement with Complex Conditions
const getAction = (role: string): string => {
    switch (role.toLowerCase()) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default: 
            return "Invalid role";
    }
};

// Test the function with different roles
console.log(getAction("admin"));   // Output: Manage users and settings
console.log(getAction("editor"));  // Output: Edit content
console.log(getAction("viewer"));  // Output: View content
console.log(getAction("guest"));   // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role
