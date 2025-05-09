let count = 0;

//reference of number
let displayNumber = document.getElementById("number");

// reference of UP arrow
let increaseBtn = document.getElementById("incCount")

// reference of down arrow
let decreaseBtn = document.getElementById("decCount")

// console.log(displayNumber);
// Use DOM to manipulate text within a div.
// Use query selectors to increase/decrease counts.

window.onload = function () {
    let savedCount = localStorage.getItem("CounterValue")
    if(savedCount != null) {
        count = Number(savedCount)
        displayNumber.innerText = count
    } else {
        displayNumber.innerText = count
    }
}

function increase() {
    count++
    // console.log(count);
    displayNumber.innerText = count;
    localStorage.setItem("CounterValue", count)
}

function decrease() {
    if(count > 0) {
        count--;
        // console.log(count)
        displayNumber.innerText = count;
        localStorage.setItem("CounterValue", count)
    } else {
        document.getElementById("number").innerText = count;
        localStorage.setItem("CounterValue", count)
    }
    
}