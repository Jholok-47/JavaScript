// Operators in JavaScript

let name = prompt("Enter your name:"); // Prompt function is used to get input from the user
console.log("Hello, " + name + "!");

let a = 5;
let b = 3;

console.log("a =", a, "& b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b); // Modulo operator gives the remainder of the division
console.log("a ** b =", a ** b); //Exponentiation operator raises a to the power of b
console.log("a + 1 =", ++a); // Pre-increment operator increases a by 1 before its current value is used

let x = 10;
let y = 20;

console.log("x =", x, "& y =", y);
console.log("x === y =", x === y); // Strict equality operator checks if x and y are equal in value and type
console.log("x !== y =", x !== y); // Strict inequality operator checks if x and y are not equal in value or type

// Loops in JavaScript

// for-of loop is used to iterate over iterable objects like arrays, strings, etc.
let str = "Hello!";

for (let char of str) {
    console.log(char);
}

// for-in loop is used to iterate over the properties of an object
let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    citizen: true
};

for (let key in person) {
    console.log("Key =", key, "   Value =", person[key]);
}
