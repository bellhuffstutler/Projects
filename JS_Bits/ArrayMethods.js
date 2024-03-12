//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str) {
    return str
        .split('-') //splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
            //capitalizes first letters of all array items except the first one
            //converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('') //joins ['my', 'Long', 'Word'] into 'myLongWord']
}

camelize("background-color")
camelize("list-style-image")
camelize("-webkit-transition")

//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
    let results = arr.filter(x => x >= a && x <= b) 
    alert(results)
}


//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
    
    //remove if outside of the interval
    if (val < a || val > b) {
        arr.splice(i, 1)
        i--
    }
  }
}

//Sort an array in decreasing order

function sortDecreasingOrder(arr) {
    arr.sort((a, b) => b - a)
}

//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.

function copySorted(arr) {
    return arr.slice().sort()
}

