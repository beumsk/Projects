// style it!!
// end game reset
// create a less verbose win test
// add IA

var main = document.querySelector(".main");
var statusElt = document.querySelector(".status");
var nodes;
var col = 7;
var row = 6;
var grid = [];
var turn = 0;
var playing;

initiate();

setStatus();

main.addEventListener("click", function(e) {
  // check is box
  if (e.target.classList.contains("box")) {
    // check box is playable
    if (!e.target.classList.contains("full")) {
      goDown(nodes.indexOf(e.target));
      if (playing) {
        turn++;
        setStatus();
      }
    }
  }
});

function winCheck(ind) {
  color = getColor();
  // 4 vertical
  if ( grid[ind+col] === color && grid[ind+col+col] === color && grid[ind+col+col+col] === color ) {
    endGame();
  }
  // 4 horizontal or diagonal
  // col1
  if (ind%7 === 0) {
    checkH1(ind);
    checkD1(ind);
  }
  // col2
  else if (ind%7 === 1) {
    checkH1(ind);
    checkH2(ind);
    checkD1(ind);
    checkD2(ind);
  }
  // col3
  else if (ind%7 === 2) {
    checkH1(ind);
    checkH2(ind);
    checkH3(ind);
    checkD1(ind);
    checkD2(ind);
    checkD3(ind);
  }
  // col4
  if (ind%7 === 3) {
    checkH1(ind);
    checkH2(ind);
    checkH3(ind);
    checkH4(ind);
    checkD1(ind);
    checkD2(ind);
    checkD3(ind);
    checkD4(ind);
  }
  // col5
  if (ind%7 === 4) {
    checkH2(ind);
    checkH3(ind);
    checkH4(ind);
    checkD2(ind);
    checkD3(ind);
    checkD4(ind);
  }
  // col6
  if (ind%7 === 5) {
    checkH3(ind);
    checkH4(ind);
    checkD3(ind);
    checkD4(ind);
  }
  // col7
  if (ind%7 === 6) {
    checkH4(ind);
    checkD4(ind);
  }
}

function endGame() {
  playing = 0;
  setStatus(true);
  setTimeout(function() {
    main.textContent = "";
    grid = [];
    turn = 0;
    initiate();
    setStatus();
  }, 1000); 
}

// get the .full and color as down as possible
function goDown(index) {
  while (nodes[index+col] && !nodes[index+col].classList.contains("full")) {
    index += col;
  }
  fillBox(nodes[index]);
  winCheck(index);
}

function fillBox(elt) {
  elt.classList.add("full");
  elt.classList.add(getColor());
  grid[elt.id] = getColor();
}

function emptyBox(elt) {
  elt.classList.remove("full");
  elt.classList.remove(getColor());
  grid[elt.id] = "";
}

function setStatus(bool) {
  if(!bool) {
    statusElt.innerHTML = getColor().toUpperCase() + " turn";
    statusElt.classList.remove("red", "yellow");
    statusElt.classList.add(getColor());
  }
  else {
    console.log(bool);
    console.log(getColor() + " Win!");
    statusElt.innerHTML = getColor().toUpperCase() + " WIN!!!";
  }
}

function getColor() {
  if (turn % 2 === 1) return "yellow";
  else return "red";
}

function initiate() {
  for (var i = 0; i < col * row; i++) {
    createEl("div", i, main, "box", i);
    grid.push("");
  }
  // array of .box elts
  nodes = Array.prototype.slice.call( document.querySelector('.main').children );
  playing = 1;
}

function createEl(el, txt, prnt, cls, id) {
  var newEl = document.createElement(el);
  newEl.classList.add(cls);
  newEl.id = id;
  newEl.innerText = txt;
  prnt.appendChild(newEl);
}



// horizontal case 1
function checkH1(ind) {
  if ( grid[ind+1] === color && grid[ind+2] === color && grid[ind+3] === color ) {
    endGame();
  }
}
// horizontal case 2
function checkH2(ind) {
  if ( grid[ind-1] === color && grid[ind+1] === color && grid[ind+2] === color ) {
    endGame();
  }
}
// horizontal case 3
function checkH3(ind) {
  if ( grid[ind-2] === color && grid[ind-1] === color && grid[ind+1] === color ) {
    endGame();
  }
}
// horizontal case 4
function checkH4(ind) {
  if ( grid[ind-3] === color && grid[ind-2] === color && grid[ind-1] === color ) {
    endGame();
  }
}

// diagonal case 1
function checkD1(ind) {
  if ( ( grid[ind+8] === color && grid[ind+16] === color && grid[ind+24] === color ) 
      || ( grid[ind-6] === color && grid[ind-12] === color && grid[ind-18] === color ) ) {
    endGame();
  }
}
// diagonal case 2
function checkD2(ind) {
  if ( ( grid[ind-8] === color && grid[ind+8] === color && grid[ind+16] === color ) 
      || ( grid[ind+6] === color && grid[ind-6] === color && grid[ind-12] === color ) ) {
    endGame();
  }
}
// diagnoal case 3
function checkD3(ind) {
  if ( ( grid[ind-16] === color && grid[ind-8] === color && grid[ind+8] === color ) 
      || ( grid[ind+12] === color && grid[ind+6] === color && grid[ind-6] === color ) ) {
    endGame();
  }
}
// diagonal case 4
function checkD4(ind) {
  if ( ( grid[ind-24] === color && grid[ind-16] === color && grid[ind-8] === color ) 
      || ( grid[ind+18] === color && grid[ind+12] === color && grid[ind+6] === color ) ) {
    endGame();
  }
}