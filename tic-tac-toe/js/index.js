
// TODO create AI

var playerSign = "",
    compSign = "",
    grid = ["e","e","e", "e","e","e", "e","e","e"],
    turn = 0,
    next = 1;

var dark = document.querySelector("#dark"),
    message = document.querySelector("#message"),
    playX = document.querySelector("#playX"),
    playO = document.querySelector("#playO"),
    plays = document.querySelectorAll(".play");

playX.addEventListener("click", startGame);
playO.addEventListener("click", startGame);

// choose sign
function startGame(e) {
  clearInterval(checkPageInterval);
  dark.classList.add("hidden");
  playerSign = e.target.getAttribute("data-sign");
  compSign = playerSign == "x" ? "o" : "x";
  for (var i=0; i<plays.length; i++) {
    plays[i].addEventListener("click", playerMove);
  }
}

// player move
function playerMove(e) {
  e.target.innerHTML = playerSign;
  e.target.classList.remove("playable");
  grid[e.target.id] = playerSign;
  turn++;
  checker("player");
  if (turn < 8 && next) {
    setTimeout(function() {
      compMove();
    }, 200);
  }
  e.target.removeEventListener("click", playerMove);
}

// AI move
function compMove() {
  var randd = rand(plays.length);
  while (grid[randd] === playerSign || grid[randd] === compSign) {
    randd = rand(plays.length);
  }
  plays[randd].innerHTML = compSign;
  plays[randd].classList.remove("playable");
  plays[randd].removeEventListener("click", playerMove);
  grid[randd] = compSign;
  turn++;
  setTimeout(function() {
    checker("comp");
  }, 100);
}

// end game checker (win, lose, tie)
function checker(whoo) {
  // win
  if (    (whoo === "player") 
      && ((grid[0]===playerSign && grid[1]===playerSign && grid[2]===playerSign)
      ||  (grid[3]===playerSign && grid[4]===playerSign && grid[5]===playerSign)
      ||  (grid[6]===playerSign && grid[7]===playerSign && grid[8]===playerSign)
      ||  (grid[0]===playerSign && grid[3]===playerSign && grid[6]===playerSign)
      ||  (grid[1]===playerSign && grid[4]===playerSign && grid[7]===playerSign)
      ||  (grid[2]===playerSign && grid[5]===playerSign && grid[8]===playerSign)
      ||  (grid[0]===playerSign && grid[4]===playerSign && grid[8]===playerSign)
      ||  (grid[2]===playerSign && grid[4]===playerSign && grid[6]===playerSign))
    ) {
    next = 0;
    setTimeout(function() {
      reset("You win !");
    }, 500);
  }
  // lose
  else if ( (whoo === "comp") 
        && ((grid[0]===compSign && grid[1]===compSign && grid[2]===compSign)
        ||  (grid[3]===compSign && grid[4]===compSign && grid[5]===compSign)
        ||  (grid[6]===compSign && grid[7]===compSign && grid[8]===compSign)
        ||  (grid[0]===compSign && grid[3]===compSign && grid[6]===compSign)
        ||  (grid[1]===compSign && grid[4]===compSign && grid[7]===compSign)
        ||  (grid[2]===compSign && grid[5]===compSign && grid[8]===compSign)
        ||  (grid[0]===compSign && grid[4]===compSign && grid[8]===compSign)
        ||  (grid[2]===compSign && grid[4]===compSign && grid[6]===compSign))
    ) {
    setTimeout(function() {
      reset("You lose !");
    }, 500);
  }
  // tie
  else if (turn === 9) {
    setTimeout(function() {
      reset("You tied !");
    }, 500);
  }
}

// reset func
function reset(msg) {
  playX.classList.add("hidden");
  playO.classList.add("hidden");
  message.textContent = msg;
  message.classList.remove("hidden");
  dark.classList.remove("hidden");
  grid = ["e","e","e", "e","e","e", "e","e","e"];
  turn = 0;
  next = 1;
  for (var j=0; j<plays.length; j++) {
    plays[j].innerHTML = "";
    plays[j].classList.add("playable");
    plays[j].removeEventListener("click", playerMove);
  }
  setTimeout(function() {
    playX.classList.remove("hidden");
    playO.classList.remove("hidden");
    message.classList.add("hidden");
  }, 1500);
}

// random func
function rand(num) {
  return Math.floor(Math.random() * num); 
}

// handle focus of the page
function checkPageFocus() {
  if (document.hasFocus()) {
    dark.classList.remove("hidden");
  }
  else {
    dark.classList.add("hidden");
  }
}
var checkPageInterval = setInterval(checkPageFocus, 300);