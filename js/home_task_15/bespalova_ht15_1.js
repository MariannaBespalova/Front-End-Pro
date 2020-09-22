
const clock = document.querySelector(".wrapper");

for (let i = 0; i < 8; i++) {
  const divs = document.createElement("div");
  clock.appendChild(divs);
}

const colors = ["blue", "yellow", "green", "red", "purple", "pink", "orange", "grey"];
const divsForDigit = document.querySelectorAll(".wrapper div");

for (let i = 0; i < divsForDigit.length; i++) {
  divsForDigit[i].style.color = colors[i];
}

function myClock() {
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  const formatClock = `${hours}:${min}:${sec}`;
  
  let arrOfDigits = formatClock.split('');
  console.log(arrOfDigits);

  for (let i = 0; i < arrOfDigits.length; i++) {
    divsForDigit[i].innerHTML = arrOfDigits[i];
  }

  console.clear();
  console.log(formatClock);
}


function time(functime) {
  let start;
  start = setInterval(functime, 1000);
  functime();
}

time(myClock);

