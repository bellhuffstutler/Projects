//Write your pseudo code first! 

document.querySelector('#converte').addEventListener('click', convertTempToCel)
//Take input for temperature in c
function convertTempToCel() {
    const cel = document.querySelector('#celcius').value
    //Use conversion formula to convert the temperature
    const fah = (cel * 9/5) + 32
    //return temperature in f
    document.querySelector('#temp').innerText = `The temperature is: ${fah} F`

}



