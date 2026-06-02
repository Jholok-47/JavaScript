// Print even numbers from 0 to 10 using a while loop

console.log("Even numbers from 0 to 10:");
let num = 0;

while(num <= 10) {
    console.log(num);
    num += 2;
}

// Average of numbers from an array

let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for(num of numbers) {
    sum += num;
}

let average = sum / numbers.length;
console.log("Numbers: ", numbers);
console.log("Average of numbers: ", average);