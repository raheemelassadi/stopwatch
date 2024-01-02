import './style.css'
import { setupCounter } from './counter.js'

const timer = document.querySelector(".timer-display");
const start = document.querySelector("#start-timer");
const reset = document.querySelector("#reset-timer");
const pause = document.querySelector("#pause-timer");

let [hours, minutes, seconds, miliseconds] = [0, 0, 0, 0];
let timerInterval; // Variable to store the interval ID

function timerUpdate() {
    // Use padStart to ensure that hours, minutes, seconds, and miliseconds have two digits
    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');
    const milisecondsStr = String(miliseconds).padStart(3, '0').substring(0, 2);

    timer.textContent = `${hoursStr}:${minutesStr}:${secondsStr}:${milisecondsStr}`;

    miliseconds += 10
    if (miliseconds == 1000) {
        miliseconds = 0;
        seconds++
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++
    }

    if (minutes == 60) {
        minutes = 0;
        hours++
    }
}

start.addEventListener('click', function() {
    if (!timerInterval) {
        timerInterval = setInterval(timerUpdate, 10);
    }
});

pause.addEventListener('click', function() {
    clearInterval(timerInterval); // Pause the timer by clearing the interval
    timerInterval = null; // Reset the timerInterval variable
});

reset.addEventListener('click', function() {
    clearInterval(timerInterval); // Clear the interval if it's running
    timerInterval = null; // Reset the timerInterval variable
    [hours, minutes, seconds, miliseconds] = [0, 0, 0, 0];
    timer.textContent = "00:00:00:00"; // Reset the timer display
});
