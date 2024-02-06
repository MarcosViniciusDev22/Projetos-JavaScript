const minuteEl = document.querySelector('#minute');
const secondsEl = document.querySelector('#seconds');
const miliSecondsEl = document.querySelector('#miliseconds');
const startBtnEl = document.querySelector('#startBtn');
const pauseBtnEl = document.querySelector('#pauseBtn');
const resumeBtnEl = document.querySelector('#resumeBtn');
const resetBtnEl = document.querySelector('#resetBtn');

let interval;
let minutes = 0;
let second = 0;
let milisecond = 0;
let isPaused = false;

startBtnEl.addEventListener("click", starTimer)
pauseBtnEl.addEventListener("click", pausedTimer)
resumeBtnEl.addEventListener("click", resumeTimer)
resetBtnEl.addEventListener("click", resetTimer)

function starTimer(){
    interval = setInterval(() => {
        if(!isPaused){
            milisecond += 10;

            if(milisecond === 1000){
                second++;
                milisecond = 0;
            }

            if(second === 60){
                minutes++;
                second = 0;
            }

            minuteEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(second)
            miliSecondsEl.textContent = formatMiliSeconds(milisecond)
        }
    }, 10);

    startBtnEl.style.display = "none"
    pauseBtnEl.style.display = "block"
}

function pausedTimer(){
    isPaused = true;
    pauseBtnEl.style.display = "none"
    resumeBtnEl.style.display = "block"
}

function resumeTimer(){
    isPaused = false;
    pauseBtnEl.style.display = "block"
    resumeBtnEl.style.display = "none"
}

function resetTimer(){
    clearInterval(interval);
    minutes = 0;
    second = 0;
    milisecond = 0;

    minuteEl.textContent = "00"
    secondsEl.textContent = "00"
    miliSecondsEl.textContent = "000"

    startBtnEl.style.display = "block"
    pauseBtnEl.style.display = "none"
    resumeBtnEl.style.display = "none"
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMiliSeconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}