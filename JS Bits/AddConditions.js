//Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
let selectedDay = String(prompt("What day is today?")).toLowerCase

//Switch version
switch (selectedDay) {
    case "monday":
        alert("Tomorrow is Tuesday!")
        break;
    case "tuesday":
        alert("Tomorrow is Wednesday!")
        break;
    case "wednesday":
        alert("Tomorrow is Thursday!")
        break;
    case "thursday":
        alert("Tomorrow is Friday!")
        break;
    case "friday":
        alert("Tomorrow is Saturday!")
        break;
    case "saturday":
        alert("Tomorrow is Sunday!")
        break;
    case "sunday":
        alert("Tomorrow is Monday!")
    default:
        alert("You done goofed pardner")
        break;
}

//If-Else version
if (selectedDay === "monday") {
    alert("Tomorrow is Tuesday!")
} else if (selectedDay === "tuesday") {
    alert("Tomorrow is Wednesday!")
} else if (selectedDay === "wednesday") {
    alert("Tomorrow is Thursday!")
} else if (selectedDay === "thursday") {
    alert("Tomorrow is Friday!")
} else if (selectedDay === "friday") {
    alert("Tomorrow is Saturday!")
} else if (selectedDay === "saturday") {
    alert("Tomorrow is Sunday!")
} else if (selectedDay === "sunday") {
    alert("Tomorrow is Monday!")
} else {
    alert("You done goofed pardner")
}

//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
let num1 = Number(prompt("What is the first number?"))
let num2 = Number(prompt("What is the second number?"))

//If-Else Version
if (num1 === num2) {
    alert(`${num1} is equal to ${num2}`)
} else if (num1 > num2) {
    alert(`${num1} is greater than ${num2}`)
} else if (num1 < num2) {
    alert(`${num1} is less than ${num2}`)
} else {
    alert("Not a number :0")
}

//Write a program that accepts a month number (between 1 and 12), then shows the number of days in the MOnth. Leap Years are excluded. Incorrect Inputs must be taken into account
let month = Number(prompt("Enter the number of a month: "))

//Switch Version
switch (month):
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("The month has 31 days!")
        break;
    case 2:
        alert("The month has 28 days!")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("the month has 30 days!")
        break;
    default:
        alert("You should not be here :0")
        break;

//If-Else Version
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    alert("The month has 31 days")
}else if (month === 2) {
    alert("The month has 28 days!")
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    alert("The month has 30 days!")
} else {
    alert("You should not be here :0")
}

//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after

let hours = Number(prompt("What hour is it? (Use 24-Hour Time)"))
let minutes = Number(prompt("What minute is it?"))
let seconds = Number(prompt("What second is it??"))

if (hours > 23) {
    alert("The hour should be less than 24!")
}else if (minutes > 59) {
    alert("The minutes should be less than 60!")
}else if (seconds > 59) {
    alert("The seconds should be less than 60!")
} else {
    seconds += 1
    if (seconds > 59) {
        seconds = 00
        minutes += 1
    } else {}
    if (minutes> 59) {
        minutes = 00
        hours += 1
    } else {}
    if (hours > 23) {
        hours = 00
    }
    alert(`The time 1 second later is ${hours}h : ${minutes}m : ${seconds}s!`)

}
