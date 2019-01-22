
// adapt speed to device
// prevent multiple click by apparition


var score = 0;
var time = 30;
var speed = 600;
var images = document.querySelectorAll(".box img");
var scoreElt = document.querySelector(".score");
var timeElt = document.querySelector(".time");
var modal = document.querySelector(".modal");
var modalP = document.querySelector(".modal p");
var modalBtn = document.querySelector(".modal .end");
var setTimer, setShowHide;

// play button
modalBtn.addEventListener("click", function() {
  clearInterval(checkPageInterval);
  modal.classList.add("hidden");
  setTimer = setInterval(timer, 1000);
  setShowHide = setInterval(showHide, speed*2);
});

// click handler and score updater
for(let i=0; i<images.length; i++) {
  images[i].addEventListener("click", hitKong);
}

function hitKong(e) {
  curr = e.target;
  curr.parentNode.classList.add("touched");
  score += 10;
  scoreElt.innerHTML = score;
  setTimeout(function() {
    curr.parentNode.classList.remove("touched");
  }, speed/2);
}

// show and hide with interval
function showHide() {
  var randd = randomize(9);
  images[randd].style.top = "30px";
  setTimeout(function() {
    images[randd].style.top = "100px";
  }, speed);
}

// manage timer
function timer() {
  if (time) {
    time -= 1;
    timeElt.innerHTML = time;
  }
  else {
    restart();
  }
}

function restart() {
  modalP.innerHTML = "You scored " + score + " !";
  modal.classList.remove("hidden");
  clearInterval(setTimer);
  clearInterval(setShowHide);
  time = 30;
  score = 0;
  timeElt.innerHTML = time;
  scoreElt.innerHTML = score;
}

// function random
function randomize(rand) {
  return Math.floor(Math.random() * rand);
}

// handle focus of the page
function checkPageFocus() {
  if (document.hasFocus()) {
    modal.classList.remove("hidden");
  }
  else {
    modal.classList.add("hidden");
  }
}
var checkPageInterval = setInterval(checkPageFocus, 300);