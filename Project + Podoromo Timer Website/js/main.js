//Declare Variables

let podoromoTimerCount = 0
let podoromoFocusTime = 25 * 60
let podoromoRestTime = 5 * 60
let podoromoRestTimeFour = 20 * 60
let listOfProjects = ["Quiz", "Tic Tac Toe", "Clock", "Simple Image Slider", "Form with Validation", "Progress Bar", "Simple Tax Calculator", "Joke of the Day", "Voting System", "Hangman Game"]

//timer code from StackOverflow: https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
function podoromoFocusTimer(){
    var sec = podoromoFocusTime;
    document.getElementById("timerButton").disabled = true
    var timer = setInterval(function(){
        document.getElementById('seconds').innerHTML = sec + "sec";
        sec--;
        if (sec < 0) {
            podoromoTimerCount++;
            clearInterval(timer);
            document.getElementById('end').innerHTML = "BREAK TIME !!"
            if (podoromoTimerCount > 3) {
                podoromoRestTimerFour();
            } else {
                podoromoRestTimer();
            }

        }
    }, 1000);
}

function podoromoRestTimer(){
    var sec = podoromoRestTime;

    var timer = setInterval(function(){
        document.getElementById('seconds').innerHTML= sec + "sec";
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            document.getElementById('end').innerHTML= 'TIME TO MAKE DA BACON !!'
            document.getElementById('timerButton').disabled = false
        }
    }, 1000);
}

function podoromoRestTimerFour(){
    var sec = podoromoRestTimeFour;

    var timer = setInterval(function(){
        document.getElementById('seconds').innerHTML= sec + "sec";
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            document.getElementById('end').innerHTML= 'TIME TO MAKE DA BACON !!'
            document.getElementById('timerButton').disabled = false
        }
    }, 1000);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function randomProjectIdea() {
    //generate number between 1 - 10
    let randomNumber = getRandomInt(10)
    //replace #projectDescription with idea name
    document.querySelector('#projectDescription').innerText = `Your project is: ${listOfProjects[randomNumber]}`
}

document.querySelector("#timerButton").addEventListener('click', podoromoFocusTimer)
document.querySelector("#projectButton").addEventListener('click', randomProjectIdea)

