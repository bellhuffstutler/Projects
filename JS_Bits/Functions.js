// Write a function min that takes two arguments and returns their minimum.

function min(num1, num2) {
    if (num1 > num2) {
        return num2
    } else if (num1 < num2) {
        return num1
    } else {
        return "Those are the same number"
    }
}

console.log(min(0, 10));
console.log(min(0, -10));

//Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

function isEven(num1) {
    if (Math.abs(num1) == 0) {
        return true
    } else if (Math.abs(num1) == 1) {
        return false
    } else {
        return isEven(Math.abs(num1) -2)
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
//
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
let bCount = 0;
let charCount = 0;

function countBs(string) {
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] === "B") {
            bCount++
        }
    } return bCount
}

function countChar(string, char) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            charCount++
        }
    } return charCount
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
