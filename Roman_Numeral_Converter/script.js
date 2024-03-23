//Set Constants
const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

//Check if input is valid
const checkUserInput = () => {
  const inputInt = parseInt(number.value);

  if (!inputInt || isNaN(inputInt)) {
    output.innerHTML = `<p>Please enter a valid number</p>`;
  } else if (inputInt <= 0) {
    output.innerHTML = `<p>Please enter a number greater than or equal to 1</p>`
  } else if (inputInt >= 4000) {
    output.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`
  } else {
      output.innerHTML = convertToRoman(inputInt);
  }
}

//Function to convert to Roman Numerals

function convertToRoman(num) {

  // Set Up Constants
  const M = ["","M","MM","MMM"];
  const C = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  const X = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  const I = ["","I","II","III","IV","V","VI","VII","VIII","IX"];

  const thousandsInt = Math.floor(num/1000);
  const hundredsInt = Math.floor((num%1000)/100);
  const tensInt = Math.floor((num%100)/10);
  const unitsInt = Math.floor(num%10);
  const thousandsRoman = M[thousandsInt];
  const hundredsRoman = C[hundredsInt];
  const tensRoman = X[tensInt];
  const unitsRoman = I[unitsInt];
  return thousandsRoman + hundredsRoman + tensRoman + unitsRoman;
}

//Set Event Listeners
convertBtn.addEventListener("click", checkUserInput);

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});