

// let date = new Date()

// let dateStr = date.toJSON()

// console.log(dateStr, typeof dateStr)

// date.setHours
// console.log(date)

// var date = new Date();

// var options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric'
// };

// console.log(date.toLocaleString("ru", options)); // среда, 31 декабря 2014 г. н.э. 12:30:00

function myClock() {
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`
  }
  if (min < 10) {
    min = `0${min}`
  }
  if (sec < 10) {
    sec = `0${sec}`
  }

  let formatClock = `${hours} : ${min} : ${sec}`
  let clock = document.querySelector("body");
  clock.innerHTML = formatClock
  console.clear()
  console.log(formatClock);

}

// function initClock() {
//   let time;
//   time = setInterval(myClock, 1000);
// }



// function curHour() {
//   var date = new Date();
//   let dateStr = date.toTimeString()
//   let clock = dateStr.slice(0, 8)

//   let body = document.querySelector("body");
//   body.innerHTML = clock;
// }

// function curHourCons() {
//   var date = new Date();
//   let dateStr = date.toTimeString()
//   let clock = dateStr.slice(0, 8)
//   console.clear()
//   console.log(clock);

// }

function time(functime) {
  let start;
  start = setInterval(functime, 1000);
  functime();
}


time(myClock);




