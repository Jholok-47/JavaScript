// Variable declaration and initialization

Name = "Jholok";
age = 26;
marks = 90;
x = null;
y = undefined;
isStudent = true;
console.log("Hello " + Name);
console.log("Age: " + age);
console.log("Marks: " + marks);
console.log("x: " + x);
console.log("y: " + y);
console.log("isStudent: " + isStudent);

// var, let and const

var a = 10;
var a = 20; // var allows redeclaration
var a = 30; // var allows redeclaration
console.log("Value of a: " + a);

let b = 15;
// let b = 20; // Error: Identifier 'b' has already been declared

b = 25; // let allows reassignment
b = 45; // let allows reassignment
console.log("Value of b: " + b);

const c = 50;
// const c = 60; // Error: Identifier 'c' has already been declared
// c = 70; // Error: Assignment to constant variable
console.log("Value of c: " + c);

let d;
console.log("Value of d: " + d); // Output: undefined

// typeof operator

    let num = 42;
    console.log("Type of num: " + typeof num); // Output: number


// Objects

const person = {
    name: "Alice",
    height: 165,
    age: 30,
    isStudent: false
};

console.log("Person's name: " + person.name);
person.age = person.age + 1; // Updating age
console.log("Person's age: " + person.age);