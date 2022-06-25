const glitchPrimeText = document.querySelector("#glitchPrime")
const button = document.querySelector("#numberGen")

let totalNumbers = 1390;
let counter = 0;
let eights = 1;
let nums = '';

function numberGoBrrr() {
    handle = window.setInterval(daLoop, 500);
}

function stopNumberTime() {
    clearInterval(handle);
}

function daLoop() {
    if(counter < totalNumbers && counter !== totalNumbers / 2) {
        nums += '9'
        glitchPrimeText.innerHTML = nums;
        counter++;
    } else if (counter < totalNumbers && eights === 1) {
        nums += '<span id="eight">8</span>';
        glitchPrimeText.innerHTML = nums;
        counter++
    } else {
        stopNumberTime();
    }
}



// function numberGen(){
//     for (let i = 0; i < nines; i++) {
//         console.log(heeHawDelay(i));
//     }
    
// }

// function heeHawDelay(i) {
//     setTimeout(() => {
//         if (i === nines / 2 && eights === 1) {
//             glitchPrimeText.innerText += '8';
//             eights--
//         } else {
//             glitchPrimeText.innerText += '9';
//         }
//     }, 5000)
// }

button.addEventListener('click', numberGoBrrr)