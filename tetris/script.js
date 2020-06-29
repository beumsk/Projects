// add mobile swipe
// total bottom with space bar
// change tetrominoes appearing -> only first block, not full shape
// add reversed tetrominoes

var screen = document.querySelector("#screen");
var previewScreen = document.querySelector("#preview-screen");
// create play screen
for (let i = 0; i < 200; i++) {
  createEl("div", "", screen);
}
// create frozen screen
for (let i = 0; i < 20; i++) {
  createEl("div", "", screen, "taken");
}
// create preview screen
for (let i = 0; i < 20; i++) {
  createEl("div", "", previewScreen);
}

let squares = Array.from(document.querySelectorAll("#screen div"));

const scoreEl = document.querySelector("#score");
const startEl = document.querySelector("#start");
const width = 10;
let nextRandom = 0;
let timerId;
let speed = 500;
let score = 0;
let started = false;
const colors = ["#e53935", "#fdd835", "#43a047", "#3949ab", "#8e24aa"];

// the tetrominoes
const lt = [
[1, width + 1, width * 2 + 1, 2],
[width, width + 1, width + 2, width * 2 + 2],
[1, width + 1, width * 2 + 1, width * 2],
[width, width * 2, width * 2 + 1, width * 2 + 2]];


const zt = [
[0, width, width + 1, width * 2 + 1],
[width + 1, width + 2, width * 2, width * 2 + 1],
[0, width, width + 1, width * 2 + 1],
[width + 1, width + 2, width * 2, width * 2 + 1]];


const tt = [
[1, width, width + 1, width + 2],
[1, width + 1, width + 2, width * 2 + 1],
[width, width + 1, width + 2, width * 2 + 1],
[1, width, width + 1, width * 2 + 1]];


const ot = [
[0, 1, width, width + 1],
[0, 1, width, width + 1],
[0, 1, width, width + 1],
[0, 1, width, width + 1]];


const it = [
[1, width + 1, width * 2 + 1, width * 3 + 1],
[width, width + 1, width + 2, width + 3],
[1, width + 1, width * 2 + 1, width * 3 + 1],
[width, width + 1, width + 2, width + 3]];


const tetrominoes = [lt, zt, tt, ot, it];

let currentPosition = 4;
let currentRotation = 0;

let random = Math.floor(Math.random() * tetrominoes.length);
let current = tetrominoes[random][currentRotation];

// draw the tetromino
function draw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.add("tetromino");
    squares[currentPosition + index].style.backgroundColor = colors[random];
  });
}

function undraw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.remove("tetromino");
    squares[currentPosition + index].style.backgroundColor = "";
  });
}

// assign function to keyCodes
function control(e) {
  if (e.keyCode === 37) {
    moveLeft();
  } else
  if (e.keyCode === 38) {
    rotate();
  } else
  if (e.keyCode === 39) {
    moveRight();
  } else
  if (e.keyCode === 40) {
    moveDown();
  } else
  if (e.keyCode === 32) {
    console.log("space -> move bottom");
    e.preventDefault();
    // moveDown();
  } else
  if (e.keyCode === 27) {
    startPause();
  } else
  {
    console.log(e.keyCode);
  }
}

function moveDown() {
  undraw();
  currentPosition += width;
  draw();
  freeze();
}

//freeze when tetromino touches taken square
function freeze() {
  if (current.some(index => squares[currentPosition + index + width].classList.contains("taken"))) {
    current.forEach(index => squares[currentPosition + index].classList.add("taken"));
    // start a new tetromino falling
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * tetrominoes.length);
    current = tetrominoes[random][currentRotation];
    currentPosition = 4;
    draw();
    displayShape();
    addScore();
    gameOver();
  }
}

// move tetromino left if room
function moveLeft() {
  undraw();
  const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
  if (!isAtLeftEdge) {
    currentPosition -= 1;
  }
  if (current.some(index => squares[currentPosition + index].classList.contains("taken"))) {
    currentPosition += 1;
  }
  draw();
}

// move tetromino right if room
function moveRight() {
  undraw();
  const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1);
  if (!isAtRightEdge) {
    currentPosition += 1;
  }
  if (current.some(index => squares[currentPosition + index].classList.contains("taken"))) {
    currentPosition -= 1;
  }
  draw();
}

// rotate tetromino
function rotate() {
  undraw();
  currentRotation++;
  if (currentRotation === current.length) {
    currentRotation = 0;
  }
  current = tetrominoes[random][currentRotation];
  draw();
}

// show next tetromino in preview
const displaySquares = document.querySelectorAll("#preview-screen div");
const displayWidth = 4;
const displayIndex = 0;

const upNextTetrominoes = [
[1, displayWidth + 1, displayWidth * 2 + 1, 2], //lTetromino
[0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], //zTetromino
[1, displayWidth, displayWidth + 1, displayWidth + 2], //tTetromino
[0, 1, displayWidth, displayWidth + 1], //oTetromino
[1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] //iTetromino
];

// display the preview tetromino
function displayShape() {
  displaySquares.forEach(square => {
    square.classList.remove("tetromino");
    square.style.backgroundColor = "";
  });
  upNextTetrominoes[nextRandom].forEach(index => {
    displaySquares[displayIndex + index].classList.add("tetromino");
    displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom];
  });
}

function startPause() {
  // pause
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    startEl.innerHTML = "Play";
    document.removeEventListener("keyup", control);
  }
  // resume
  else if (started) {
      startEl.innerHTML = "Pause";
      draw();
      timerId = setInterval(moveDown, speed);
      document.addEventListener("keyup", control);
    }
    // play
    else {
        started = true;
        startEl.innerHTML = "Pause";
        draw();
        timerId = setInterval(moveDown, speed);
        nextRandom = Math.floor(Math.random() * tetrominoes.length);
        displayShape();
        document.addEventListener("keyup", control);
      }
}

startEl.addEventListener("click", e => {
  e.preventDefault();
  startPause();
});

function addScore() {
  for (let i = 0; i < 199; i += width) {
    const row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9];
    if (row.every(index => squares[index].classList.contains("taken"))) {
      score += 10;
      scoreEl.innerHTML = score;
      row.forEach(index => {
        squares[index].classList.remove("taken");
        squares[index].classList.remove("tetromino");
        squares[index].style.backgroundColor = "";
      });
      const squaresRemoved = squares.splice(i, width);
      squares = squaresRemoved.concat(squares);
      squares.forEach(cell => screen.appendChild(cell));
    }
  }
}

function gameOver() {
  if (current.some(index => squares[currentPosition + index].classList.contains("taken"))) {
    scoreEl.innerHTML = "end";
    clearInterval(timerId);
  }
}



function createEl(el, txt, prnt, cls) {
  var newEl = document.createElement(el);
  newEl.classList.add(cls);
  newEl.innerText = txt;
  prnt.appendChild(newEl);
}