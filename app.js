"use strict";

//selecting all the elememnts
const startBtn = document.querySelector(".button__start");
const pauseBtn = document.querySelector(".button__pause");
const stopBtn = document.querySelector(".button__stop");
const resetBtn = document.querySelector(".button__reset");
const hourTextEl = document.querySelector(".main__time--hours");
const minutesTextEl = document.querySelector(".main__time--minutes");
const secondsTextEl = document.querySelector(".main__time--seconds");
const alarm = document.querySelector("audio");

// setting up the hours, minutes and the seconds variable
let hours = 2;
let minutes = 59;
let seconds = 59;

const timerReset = () => {
  hourTextEl.innerText = hours < 10 ? `0${hours}` : hours;
  minutesTextEl.innerText = minutes < 10 ? `0${minutes}` : minutes;
  secondsTextEl.innerText = seconds < 10 ? `0${seconds}` : seconds;
};
timerReset();
resetBtn.addEventListener("click", timerReset);

// when the start button is clicked, the seconds start counting
const timer = () => {
  seconds--;
  secondsTextEl.innerText = seconds;
  if (seconds < 10) {
    secondsTextEl.innerText = `0${seconds}`;
  }
  // when seconds reach 0, minute reduces by 1 and seconds goes back to 59
  if (seconds == 0) {
    minutes--;
    minutesTextEl.innerText = minutes < 10 ? `0${minutes}` : minutes;
    seconds = 60;
  }
  if (minutes == 0) {
    if (hours == 0) {
      hours = `00`;
      minutes = `00`;
      seconds = `00`;
      hourTextEl.innerText = hours;
      minutesTextEl.innerText = minutes;
      secondsTextEl.innerText = seconds;
      alarm.play();
      // setTimeout(() => {
      //   alarm.pause();
      //   alarm.src = "";
      //   alarm.src = "alarm.mp3";
      // }, 10000);
      return;
    }
    hours--;
    hourTextEl.innerText = `0${hours}`;
    minutes = 59;
    minutesTextEl.innerText = `0${minutes}`;
  }
};
startBtn.addEventListener("click", () => {
  console.log("timer started");
  setInterval(timer, 1000);
  startBtn.classList.add("disable-button");
});
