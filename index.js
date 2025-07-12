const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const minInput = document.getElementById("input-box");

let timeLeft = 0;
let interval;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {

    timeLeft = parseInt(minInput.value) * 60;
    
    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }
    updateTimer();


    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = parseInt(minInput.value) * 60;
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = parseInt(minInput.value) * 60;
    updateTimer();
    interval = null;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

// const updateBox = document.getElementById("update");
// function updateNewtimer() {
//     updateBox.innerText = minInput.value * 60;
// }

// btn.addEventListener("click", updateNewtimer);