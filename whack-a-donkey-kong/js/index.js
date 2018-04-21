
// pre modal for instructions
// end of game + reset
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


// click handler and score updater
for(let i=0; i<images.length; i++) {
  images[i].addEventListener("click", function() {
    curr = this;
    // show user he clicked well
    curr.style.opacity = "0.7";
    score += 10;
    scoreElt.innerHTML = score;
    setTimeout(function() {
      curr.style.opacity = "1";
    }, speed);
  });
}

// show and hide with interval
setInterval(function() {
  var randd = randomize(9);
  images[randd].style.top = "30px";
  setTimeout(function() {
    images[randd].style.top = "100px";
  }, speed);
}, speed*2);

// manage timer
setInterval(function() {
  if (time) {
    time -= 1;
    timeElt.innerHTML = time;
  }
  else {
    // show score and reload
    modalP.innerHTML = "You scored " + score + " !";
    modal.style.display = "flex";
  }
}, 1000);

// play again button
modalBtn.addEventListener("click", function() {
  document.location.reload(true);
});

// function random
function randomize(rand) {
  return Math.floor(Math.random() * rand);
}