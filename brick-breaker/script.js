// improve points, speed
// add levels??
// improved solution from:
// https://developer.mozilla.org/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript

var canvas = document.getElementById("canvas");
var modalElt = document.getElementById("modal");
var ctx = canvas.getContext("2d");
var ballRadius = 6;
var x = canvas.width/2;
var y = canvas.height-10-ballRadius;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;
var gameColor = "#e53935";
var animm;
var playing;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}

function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        // fix collision below -> ballRadius to remove/add?
        if(x > b.x-ballRadius && x < b.x+brickWidth+ballRadius && y > b.y-ballRadius && y < b.y+brickHeight+ballRadius) {
          dy = -dy;
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColumnCount) {
            // console.log("YOU WIN, CONGRATS!");
            modalElt.firstElementChild.innerHTML = "You win, congrats!";
            gameReset();
          }
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = gameColor;
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = gameColor;
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = gameColor;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = gameColor;
  ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = gameColor;
  ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  // paddle hit
  if(y + dy > canvas.height-ballRadius-paddleHeight) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
  }
  // side canvas hit
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  // top canvas hit
  if(y + dy < ballRadius) {
    dy = -dy;
  }
  // bottom canvas hit
  else if(y + dy > canvas.height-ballRadius) {
    if(!(x > paddleX && x < paddleX + paddleWidth)) {
      lives--;
      if(!lives) {
        // console.log("GAME OVER");
        modalElt.firstElementChild.innerHTML = "Game over...";
        gameReset();
      }
      else {
        x = canvas.width/2;
        y = canvas.height-10-ballRadius;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width-paddleWidth)/2;
      }
    }
  }

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  
  if (playing) {
    animm = requestAnimationFrame(draw);
  }
}

draw();

modalElt.addEventListener("click", function() {
  modalElt.classList.add("hidden");  
  playing = true;
  animm = requestAnimationFrame(draw);
});

function gameReset() {
  cancelAnimationFrame(animm);
  playing = false;
  modalElt.classList.remove("hidden");
  // reset variables
  score = 0;
  lives = 3;
  x = canvas.width/2;
  y = canvas.height-10-ballRadius;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width-paddleWidth)/2;
  // show all bricks back
  for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
  setTimeout(function() {
    modalElt.firstElementChild.innerHTML = "Start";
  }, 1000);
}