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
console.log(`Numbers: ${numbers}`);
console.log(`Average of numbers: ${average}`);

// Apply 10% discount to each price in the array and print the discounted prices

let arr = [250, 645, 300, 900, 50];
console.log(`Prices without discount applied: ${arr}`);

for(let i = 0; i < arr.length; i++) {
    discount = arr[i]/10;
    arr[i] = arr[i] - discount;
}

console.log(`Discounted prices: ${arr}`);