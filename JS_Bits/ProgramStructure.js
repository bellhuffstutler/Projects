//Write a loop that makes seven calls to console.log to output the following triangle

let line = 7
let hash = "#"

for(let i = 0; i < line; i++) {
    console.log(hash)
    hash += "#"
}


//FizzBuzz (A second Time)

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(i)
    }
}

//Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
//When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

let chessBoard = ""
let size = Number(prompt("Give me a positive Number :0"))

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i % 2 === 0) {
            if (j % 2 === 0) {
                chessBoard += " "
            } else {
                chessBoard += "#"
            }
        } else {
            if (j % 2 === 0) {
                chessBoard += "#"
            }else {
                chessBoard += " "
            }
        }
  } chessBoard += "\n"
} console.log(chessBoard)
