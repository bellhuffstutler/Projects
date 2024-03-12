//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence
let firstName = String(prompt("What is your first name?"))
let lastName = String(prompt("What is your last name?"))

alert(`Hello, ${firstName} ${lastName}. How are you doing today?`)

//Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%
let rawPrice = Number(prompt("Please enter your price: "))
let vatRate = .206

alert((rawPrice * vatRate) + rawPrice)

//Write a program that asks for a temperature in Celsius, then displays it in Fahrenheit degrees
let cel = Number(prompt("What is the temperature in Celsius?"))
let fah = cel * 9/5 + 32

alert(`The temperature in Fahrenheit is ${fah} degrees!`)

//Observe the following program. Add the necissary code to swap the values of the variables number1 and number2
let number1 = 5;
let number2 = 3;

//TODO: type your code here (and nowhere else)
number1 -= 2;
number2 += 2;

console.log(number1) //Should show 3
console.log(number2) //Should show 5
