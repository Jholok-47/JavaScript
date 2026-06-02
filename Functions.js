function sum(a, b) {
    return a + b;
}

let x = 4, y = 5;
console.log(`The sum of ${x} and ${y} is:`, sum(x, y));

function greet() {
    let name = prompt("Enter your name: ");
    return `Hello, ${name}!`;
}

// forEach method is used to execute a provided function once for each array element. It takes a callback function as an argument, which is executed for each element in the array.
arr = [1, 2, 3, 4, 5];

arr.forEach((value, index, arr) => {
    console.log(`Array: ${arr}`);
    console.log(`Index: ${index}, Value: ${value}`);
})

// For a given array of numbers, print square of each number using forEach method

let numbers = [2, 4, 6, 8, 10];

console.log(`\n\nNumbers: ${numbers}`);
numbers.forEach((num) => {
    console.log(`Square of ${num} is: ${num ** 2}`);
})

// map method is used to create a new array populated with the results of calling a provided function on every element in the calling array. It takes a callback function as an argument, which is executed for each element in the array and returns a new value that is added to the new array.

console.log(`\n\n`);
let arr1 = [1, 3, 5, 7, 9];

const squareArr = (num) => {
    return num ** 2;
}

let arr2 = arr1.map(squareArr);

console.log(`Original array: ${arr1}`);
console.log(`New array with squares: ${arr2}`);

// reduce method is used to execute a reducer function on each element of the array, resulting in a single output value. It takes a callback function as an argument, which is executed for each element in the array and takes two parameters: the accumulator (which accumulates the result) and the current value (the current element being processed).

console.log(`\n\n`);
let arr3 = [6, 1, 2, 3, 4, 5];
const greatest = arr3.reduce((prev, curr) => {
    return (prev > curr) ? prev : curr;
});
console.log(`The greatest number in the array is: ${greatest}`);