

const timer = document.querySelector("p");
const startBtn = document.querySelectorAll("button")[0];
const stopBtn = document.querySelectorAll("button")[1];
const resetBtn = document.querySelectorAll("button")[2];

var interval,
    offset,
    hour = 0,
    minute = 0,
    seconds = 0;

function startTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    seconds = totalSeconds - (hour * 3600 + minute * 60);

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("seconds").innerHTML = seconds;
}

document.getElementById('startBtn').addEventListener('click', () => {
    intervalId = setInterval(startTimer, 1000);
})

document.getElementById('stopBtn').addEventListener('click', () => {
    if (intervalId)
        clearInterval(intervalId);
});


document.getElementById('resetBtn').addEventListener('click', () => {
    totalSeconds = 0;
    document.getElementById("hour").innerHTML = '0';
    document.getElementById("minute").innerHTML = '0';
    document.getElementById("seconds").innerHTML = '0';
});

console.log(startTimer);