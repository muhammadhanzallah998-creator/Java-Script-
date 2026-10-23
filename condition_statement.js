/*Question-1. Write a program that checks if a number is positive, negative, or zero.*/
{
let number=5

if(number>0){
    console.log("Positive")
} else if(number<0){
    console.log("Negative")
} else {
    console.log("Zero")
}
}

// Q2: Check whether a number is even or odd

{
    let number=5

    if(number%2===0){
        console.log("Even")
    } else {
        console.log("Odd")
    }
}


// Q3: Find the largest of two numbers

let num1 = 50;
let num2 = 20;

if (num1 > num2) {
    console.log("The larger number is " + num1);
} else if (num2 > num1) {
    console.log("The larger number is " + num2);
} else {
    console.log("Both numbers are equal");
}



// Q4: Assign a grade based on percentage

let percentage = 83;

if (percentage >= 80) {
    console.log("Grade A");
} else if (percentage >= 70) {
    console.log("Grade B");
} else if (percentage >= 60) {
    console.log("Grade C");
} else if (percentage >= 50) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}


// Q5: Check whether a year is a leap year

let year = 2024;

if (year % 400 === 0) {
    console.log("Leap year");
} else if (year % 100 === 0) {
    console.log("Not a leap year");
} else if (year % 4 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}


// Q6: Print the day of the week using switch-case

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}


// Q7: Simple calculator using switch-case

{
let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    default:
        console.log("Invalid operator");
}
}

// Q8: Check whether a letter is a vowel or consonant using switch-case
let letter = "e";

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;

  default:
    console.log("Consonant");
}

// Q9: Display traffic light instructions using switch-case
let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Get Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid traffic light color");
}


// Q10: Create a menu-driven calculator using switch-case


{
let num1 = 10;
let num2 = 5;
let choice = 1;

switch (choice) {
  case 1:
    console.log("Addition: " + (num1 + num2));
    break;

  case 2:
    console.log("Subtraction: " + (num1 - num2));
    break;

  case 3:
    console.log("Multiplication: " + (num1 * num2));
    break;

  case 4:
    if (num2 !== 0) {
      console.log("Division: " + (num1 / num2));
    } else {
      console.log("Cannot divide by zero");
    }
    break;

  default:
    console.log("Invalid choice");
}
}