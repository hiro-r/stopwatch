const time = document.getElementById("time")
const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const resetButton = document.getElementById("reset")

let total = 0;

let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let msEl;
let sEl;
let mEl;
let hEl;

let intervalId;

function start() { 
    intervalId = setInterval(function() {
        total++;
        ms = total % 100;
        s = Math.floor(total / 100) % 60;
        m = Math.floor(total / 6000) % 60;
        h = Math.floor(total / 360000);
        
        msEl = ms >= 10 ? ms : "0" + ms;
        sEl = s >= 10 ? s : "0" + s;
        mEl = m >= 10 ? m : "0" + m;
        hEl = h >= 10 ? h : "0" + h;
        
        time.innerText = `${hEl}:${mEl}:${sEl}:${msEl}`
    }, 10)
}

startButton.addEventListener('click', start)

stopButton.addEventListener('click', () => clearInterval(intervalId))

resetButton.addEventListener('click', function() {
    total = 0;
    clearInterval(intervalId)
    time.innerText = `00:00:00:00`
})