
var date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    hourElt = document.getElementsByClassName("hour")[0],
    minElt = document.getElementsByClassName("min")[0],
    secElt = document.getElementsByClassName("sec")[0],
    digit = document.getElementsByClassName("digit")[0];

moveTime();

function moveTime() {
  moveSec();
  moveMin();
  moveHour();  
}

function moveSec() {
  var turnSec = sec*6;
  secElt.style.transform = "rotate(" + turnSec + "deg)";
  secElt.style.webkitTransform = "rotate(" + turnSec + "deg)";
  // for each sec after first
  var eachSec = setInterval(function () {
    turnSec += 6;
    secElt.style.transform = "rotate(" + turnSec + "deg)";
    secElt.style.webkitTransform = "rotate(" + turnSec + "deg)";
  }, 1000);
}

function moveMin() {
  var turnMin = min*6;
  minElt.style.transform = "rotate(" + turnMin + "deg)";
  minElt.style.webkitTransform = "rotate(" + turnMin + "deg)";
  // display digit on hover; short condition to keep 00:00 format
  digit.innerHTML = (new Date().getHours()<10?'0':'') + date.getHours() + ":" + (new Date().getMinutes()<10?'0':'') + date.getMinutes();
  // after first min leftovers
  setTimeout(function () {
    turnMin += 6;
    minElt.style.transform = "rotate(" + turnMin + "deg)";
    minElt.style.webkitTransform = "rotate(" + turnMin + "deg)";
    // display digit on hover; short condition to keep 00:00 format
    digit.innerHTML = (new Date().getHours()<10?'0':'') + new Date().getHours() + ":" + (new Date().getMinutes()<10?'0':'') + new Date().getMinutes();
    // for each min after first
    var eachMin = setInterval(function () {
      turnMin += 6;
      minElt.style.transform = "rotate(" + turnMin + "deg)";
      minElt.style.webkitTransform = "rotate(" + turnMin + "deg)";
      // display digit on hover; short condition to keep 00:00 format
      digit.innerHTML = (new Date().getHours()<10?'0':'') + new Date().getHours() + ":" + (new Date().getMinutes()<10?'0':'') + new Date().getMinutes();
    }, 60000);
  }, (60 - sec) * 1000);
}

function moveHour() {
  if(hour > 11) {hour -= 12;}
  var turnHour = hour*30;
  hourElt.style.transform = "rotate(" + turnHour + "deg)";
  hourElt.style.webkitTransform = "rotate(" + turnHour + "deg)";
  // after first hour leftovers
  setTimeout(function () {
    turnHour += 30;
    hourElt.style.transform = "rotate(" + turnHour + "deg)";
    hourElt.style.webkitTransform = "rotate(" + turnHour + "deg)";
    // for each hour after first
    var eachHour = setInterval(function () {
      turnHour += 30;
      hourElt.style.transform = "rotate(" + turnHour + "deg)";
      hourElt.style.webkitTransform = "rotate(" + turnHour + "deg)";
    }, 3600000);
  }, (60 - min) * 60000);
}