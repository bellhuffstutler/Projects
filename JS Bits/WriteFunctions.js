//Complete the following program so that it asks the user for their first and last names, then show the result of the sayHello() function
// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: ask user for first and last name
const firstName = String(prompt("What is your first name?"))
const lastName = String(prompt("What is your last name?"))
// TODO: call sayHello() and show its result
sayHello(firstName, lastName)

//Complete the following program so that the square1() and square2() functions work properly
// Square the given number x
function square1(x) {
  return x * x
}

// Square the given number x
const square2 = x => x * x;// TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

//When it's done update the program so that it shows the square of every number between 0 and 12
for (let i = 0; i <= 12; i++) {
    console.log(square1(i));
}

//Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.
// TODO: write the min() function
function min(num1, num2) {
    if (num1 > num2) {
        return num2
    } else {
        return num1
    }
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

//Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.
// TODO: complete program
function calculate(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "*") {
        return num1 * num2
    } else if (operator === "/") {
        return num1 / num2
    } else {
        return "something went wrong lmao"
    }
}


console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity


//Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.
let circumferenceRadius = Number(prompt("Give me the radius of a circle for Circumference!"))
let areaRadius = Number(prompt("Give me the radius of a Circle for Area!"))

function circumferenceOfCircle(radius) {
    return 2 * Math.PI * radius
}

function areaOfCircle(radius) {
    return Math.PI * (radius ** 2)
}


console.log(circumferenceOfCircle(circumferenceRadius))
console.log(areaOfCircle(areaRadius))
