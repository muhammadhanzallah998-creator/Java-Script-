// Q1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// Q2: Find the sum of first N natural numbers
let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);


// Q3: Print multiplication table
let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}



// Q4: Find the factorial of a number

{
let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

console.log("Factorial:", factorial);
}


// Q5: Print numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Q6: Print even numbers from 1 to N

{
let n = 20;

for (let i = 2; i <= n; i += 2) {
    console.log(i);
}
}


// Q7: Find the sum of digits
{
let num = 1234;
let sum = 0;

while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
}

console.log("Sum of digits:", sum);
}


// Q8: Print first 10 Fibonacci terms
let a = 0;
let b = 1;

for (let i = 1; i <= 10; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}


// Q9: Number guessing game
const secretNumber = 7;
let guess = 5;

while (guess !== secretNumber) {
    console.log("Wrong guess! Try again.");
    guess++;
}

console.log("Correct guess!");



// Q10: Check whether a number is prime

{let num = 7;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}
}
