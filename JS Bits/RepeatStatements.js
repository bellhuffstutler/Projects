//Write a program that launches a carousel for 10 turns, showing the turn number each time.
//When it's done, improve it so that the number of turns is given by the user

//while loop
let i = 1

while (i <= 10) {
    console.log(i)
    i++
}

//for loop
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//second version
let loops = Number(prompt("How many times will the carousel spin? :0"))

//while loop
let i = 1

while (i < loops) {
    console.log(i)
    i++
}

//for loop
for (let i = 1; i < loops; i++) {
    console.log(i)
}

//Improve the program so that it also shows odd numbers. Improve it again to replace the initial number i by a number given by the user
let i = Number(prompt("enter a number from 1 - 10 :0"))

if (i < 1) {
    alert("The number is too small!")
} else if (i > 10) {
    alert("The number is too big!")
} else {
    for (let i = 1; i <=10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even!`)
    } else {
        console.log(`${i} is odd!`)
    }
  }
}

//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
//when you are done with the above, improve the program so that the terminating number is between 50 and 100

let number = Number(prompt("Enter a number :0"))

while (number > 100 || number < 50) {
    number = Number(prompt("Enter a number :0"))
}

//Write a program that asks the user for a number, then shows the multiplication table for this number. When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint)
let input = Number(prompt("Give me number between 2 and 9, and I give you multiplication table :0"))

if (input < 2 || input > 9) {
    console.log("Number should be between 2 and 9!")
} else {
    for (let i = 1; i <= 12; i++) {
      console.log(`${i} times ${input} is` i * input)
  }
}

//Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let input = String(prompt("Enter a word: (entering yes or no will end the game!)")).toLowerCase

while (input !== "yes" || input !== "no") {
    input = String(prompt("Enter a word: (entering yes or no will end the game!)")).toLowerCase
}

//Write a program that shows all numbers between 1 and 100 with the following exceptions:
//It shows "Fizz" instead if the number is divisible by 3
//It shows "Buzz" instead if the number is divisible by 5 and not 3
//When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible by 3 and 5
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
