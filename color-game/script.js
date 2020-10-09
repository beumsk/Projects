// reset button?
// add easy and hard options? (n3 and n9)

var n = 6;
var colorsBlocks = document.querySelectorAll(".colors__block");
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector(".status");
var colors = [];
resetGame();

for (var i=0; i<colorsBlocks.length; i++) {
  colorsBlocks[i].addEventListener("click", checkColors);
}

function checkColors(e) {
  if (colors[pickedColor] === e.target.style.backgroundColor) {
    statusEl.innerHTML = "Good job!<br>A new game will start right now.";
    document.body.style.color = colors[pickedColor];
    for (var i=0; i<colorsBlocks.length; i++) {
      colorsBlocks[i].style.backgroundColor = colors[pickedColor];
    }
    resetGame();
  }
  else {
    e.target.style.backgroundColor = "transparent";
    statusEl.innerHTML = "Try again!";
  }
}

function resetGame() {
  setTimeout(function() {
    document.body.style.color = "black";
    colors = [];
    pickColors();
    pickedColor = random(n);
    rgbEl.innerHTML = colors[pickedColor];
    setColors();
    statusEl.innerHTML = "Try to guess the right color based on the RGB value by clicking on the blocks.";
  }, 1000);
}

function setColors() {
  for (var i=0; i<colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i=0; i<n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random()*r)
}