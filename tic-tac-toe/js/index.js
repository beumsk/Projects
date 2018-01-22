
// prevent clicking

// general var
var playerIcon = "",
    compIcon = "",
    playerSign = "",
    compSign = "",
    grid = ["e","e","e", "e","e","e", "e","e","e"],
    turn = 0,
    next = 1;

// DOM var
var dark = document.querySelector("#dark"),
    playX = document.querySelector("#playX"),
    playO = document.querySelector("#playO"),
    plays = document.querySelectorAll(".play");

playX.addEventListener("click", function() { startGame("x") });
playO.addEventListener("click", function() { startGame("o") });

// choose sign
function startGame(sign) {
  dark.style.display = "none";
  playerSign = sign;
  
  if (sign === "x") {
    playerIcon = "<i class='fa fa-times fa-5x'></i>";
    compIcon = "<i class='fa fa-circle-o fa-5x'></i>";
    compSign = "o";
  }
  else if (sign === "o") {
    playerIcon = "<i class='fa fa-circle-o fa-5x'></i>";
    compIcon = "<i class='fa fa-times fa-5x'></i>";
    compSign = "x";
  }
  
  playerMove();
}

// player move
function playerMove() {
  for (let i=0; i<plays.length; i++) {
    plays[i].addEventListener("click", function lol() {
      this.innerHTML = playerIcon;
      this.classList.remove("playable");
      grid[this.id] = playerSign;
      turn++;
      checker("player");
      
      if (turn < 8 && next) {
        setTimeout(function() {
          compMove();
        }, 100);
      }
      // this.removeEventListener("click", lol());
    });
  }
}

// AI move
function compMove() {
  var randd = rand(plays.length);
  while (grid[randd] === playerSign || grid[randd] === compSign) {
    randd = rand(plays.length);
  }
  plays[randd].innerHTML = compIcon;
  plays[randd].classList.remove("playable");
  grid[randd] = compSign;
  turn++;
  
  setTimeout(function() {
    checker("comp");
  }, 100);
}

// end game check func (win, lose, tie)
function checker(whoo) {
  console.log(grid);
  
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
      alert("win");
      // reset();
      document.location.reload(true);
    }, 100);
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
      alert("lose");
      // reset();
      document.location.reload(true);
    }, 100);
  }
  
  // tie
  else if (turn === 9) {
    setTimeout(function() {
      alert("tie");
      // reset();
      document.location.reload(true);
    }, 100);
  }
}

// reset func
function reset() {
  dark.style.display = "flex";
  playerIcon = "";
  compIcon = "";
  grid = ["e","e","e", "e","e","e", "e","e","e"];
  turn = 0;
  for (var i=0; i<plays.length; i++) {
    plays[i].innerHTML = "";
    plays[i].classList.add("playable");
    // plays[i].removeEventListener("click", lol());
  }
}

// random func
function rand(num) {
  return Math.floor(Math.random() * num); 
}