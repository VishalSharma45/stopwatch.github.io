let tens = 0;
let sec = 0;
let min = 0;
let interval;

function start() {
    // Clearing setInterval to prevent Multiple clicks on start button
    clearInterval(interval);

    // Calling the main function. This function is called every 10 millisecond's
    interval = setInterval(timer, 10);
}

function stop() {

    // For Stop/Pausing the stopwatch
    clearInterval(interval);
}

function reset() {

    // For Terminate the setInterval function stopwatch
    clearInterval(interval);

    // For set the Zero Value in minute, second, tens value
    min = 0;
    sec = 0;
    tens = 0;
    document.querySelector('#min').innerHTML = "0" + min;
    document.querySelector('#sec').innerHTML = "0" + sec;
    document.querySelector('#count').innerHTML = "0" + tens;

    // Remove all li tags from ul tag
    document.getElementById("myList").innerHTML = "";

}

// Function for Laps Logs
function laps() {

    let min = document.querySelector('#min').innerHTML;
    let seconds = document.querySelector('#sec').innerHTML;
    let counts = document.querySelector('#count').innerHTML;
    // let listItems = "";

    if (seconds > 0 || counts > 0) {
        // listItems = document.querySelector('#myLists').innerHTML = seconds + ":" + counts;
        
        // Create a "li" element:
        const node = document.createElement("li");

        // Create a text node:
        const textnode = document.createTextNode(min + ":" + seconds + ":" + counts);

        // Append text node to "li" element:
        node.appendChild(textnode);

        // Insert before existing child:
        const list = document.getElementById("myList");
        list.insertBefore(node, list.children[0]);
    }
}

// Main function for counting.
function timer() {
    tens++;

    minString = min;
    secString = sec;
    tensString = tens;

    if (tens == 99) {
        sec = sec + 1;
        tens = 0;
    }

    if (sec == 60) {
        min = min + 1;
        sec = 0;
    }

    // For adding additional '0' if minute digit is less than 10
    if (min < 10) {
        minString = "0" + minString;
    }

    // For adding additional '0' if second digit is less than 10
    if (sec < 10) {
        secString = "0" + secString;
    }

    // For adding additional '0' if tens digit is less than 10
    if (tens < 10) {
        tensString = "0" + tens;
    }

    // Set the value into html
    document.querySelector('#count').innerHTML = tensString;
    document.querySelector('#sec').innerHTML = secString;
    document.querySelector('#min').innerHTML = minString;

}