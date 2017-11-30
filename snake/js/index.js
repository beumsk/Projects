
// weird bug stopping the game
// ADD time?

var snakeTable = document.getElementsByClassName("snakeTable")[0],
    boxes = document.getElementsByClassName("box"),
    modul = document.getElementsByClassName("modul")[0],
    start = document.getElementsByClassName("start")[0];

var table = {
  rowsCols: 21,
  boxes: 21*21
};

var snake = {
  direction: "right",
  position: [[6,10], [7,10], [8,10], [9,10], [10,10]],
  speed: 200,
  score: 0,
  final: 0,
  time: 0,
  canTurn: 0,
  init: function() {
    snake.direction = "right";
    snake.position = [[6,10], [7,10], [8,10], [9,10], [10,10]];
    snake.speed = 200;
    snake.score = 0;
    snake.time = 0;
    snake.canTurn = 0;
    snakeTable.innerHTML = "";
    tableCreation();
  }
};

// init game
snake.init();

// start game
start.addEventListener("click", function() {
  modul.style.display = "none";
  renderSnake();
  randomFood();
  // interval, heart of the game
  setInt = setInterval(function() {
    move();
  }, snake.speed);
});

// end of game
function stopp() {
  clearInterval(setInt);
  snake.final = snake.score;
  start.querySelector("span").innerHTML = snake.final + " Points !";
  setTimeout(function() {
    start.querySelector("span").innerHTML = "Play Snake";
  }, 800);
  snake.init();
  modul.style.display = "block";
}

// move the snake function
function move() {
  snake.canTurn = 1;
  // check if move allowed
  hitFood();
  hitBorder();
  hitSnake();
  // remove last snake part (first snake pos)
  boxes[snake.position[0][0] + snake.position[0][1] * table.rowsCols].classList.remove("snake");
  snake.position.shift();
  let head = snake.position[snake.position.length - 1];
  // add new snake part
  switch (snake.direction) {
    case "left":
      snake.position.push([head[0] - 1, head[1]]);
      break;
    case "up":
      snake.position.push([head[0], head[1] - 1]);
      break;
    case "right":
      snake.position.push([head[0] + 1, head[1]]);
      break;
    case "down":
      snake.position.push([head[0], head[1] + 1]);
      break;
    default:
      console.log("no direction !");
  }
  // read positions and render snake parts
  renderSnake();
}

// checks border contact
function hitBorder() {
  let headPos = snake.position.length-1;
  // goes of limits
  if (((snake.position[headPos][0] === table.rowsCols-1) && (snake.direction === "right")) || ((snake.position[headPos][0] === 0) && (snake.direction === "left")) || ((snake.position[headPos][1] === table.rowsCols-1) && (snake.direction === "down")) ||  ((snake.position[headPos][1] === 0) && (snake.direction === "up"))) {
    console.log("border hit");
    stopp();
  }
}

// checks self contact
function hitSnake() {
  let headPos = snake.position.length-1;
  for (let i=0; i<headPos; i++) {
    if (snake.position[headPos].toString() === snake.position[i].toString()) {
      console.log("snake hit");
      stopp();
    }
  } 
}

// checks food contact
function hitFood() {
  let head = snake.position[snake.position.length-1];
  let tail = snake.position[0];
  if (head.toString() === foodPos.toString()) {
    boxes[random].classList.remove("food");
    switch (snake.direction) {
      case "left":
        snake.position.unshift([tail[0] + 1, tail[1]]);
        break;
      case "up":
        snake.position.unshift([tail[0], tail[1] + 1]);
        break;
      case "right":
        snake.position.unshift([tail[0] - 1, tail[1]]);
        break;
      case "down":
        snake.position.unshift([tail[0], tail[1] - 1]);
        break;
      default:
        console.log("no direction !");
    }
    randomFood();
    snake.score += 10;
    scoreElt.innerHTML = snake.score + " pts";
  }
}

// random 'food'
function randomFood() {
  var randomX = Math.floor(Math.random() * table.rowsCols);
  var randomY = Math.floor(Math.random() * table.rowsCols);
  random = randomX + randomY * table.rowsCols;
  boxes[random].classList.add("food");
  foodPos = [randomX, randomY];
}

// render the snake
function renderSnake() {
  for (let i=0; i<snake.position.length; i++) {
    boxes[snake.position[i][0] + snake.position[i][1] * table.rowsCols].classList.add("snake");
  }
}

// table creation
function tableCreation() {
  if (snakeTable.innerHTML === "") {
    // main table
    for (let i = 0; i<table.boxes; i++) {
      var divElt = document.createElement("div");
      divElt.classList.add("box");
      snakeTable.appendChild(divElt);
    }
    // status bar
    var statusElt = document.createElement("div");
    statusElt.classList.add("status");
    snakeTable.appendChild(statusElt);
    scoreElt = document.createElement("span");
    scoreElt.classList.add("score");
    scoreElt.innerHTML = snake.score + " pts";
    statusElt.appendChild(scoreElt);
  }
}

// keypress function
document.addEventListener("keydown", function(e) {
  if (snake.canTurn) {
    switch (e.keyCode) {
      case 13:
        stopp();
        break;
      // left
      case 37:
        if (snake.direction === "right") return;
        snake.direction = "left";
        break;
      // up
      case 38:
        if (snake.direction === "down") return;
        snake.direction = "up";
        break;
      // right
      case 39:
        if (snake.direction === "left") return;
        snake.direction = "right";
        break;
      // down
      case 40:
        if (snake.direction === "up") return;
        snake.direction = "down";
        break;
      default:
        console.log("wrong key");
    }
    snake.canTurn = 0;
  }
});

// https://www.theodinproject.com/courses/javascript-and-jquery/lessons/jquery-and-the-dom