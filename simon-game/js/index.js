
// fix mobile audio delay

var index = 0,
    strict = 0,
    compColors = [],
    // playerColors = [],
    colors = ["green", "red", "yellow", "blue"];

var onOffElt = document.querySelector("#on-off"),
    levelElt = document.querySelector("#level"),
    basicElt = document.querySelector("#basic"),
    strictElt = document.querySelector("#strict"),
    colorElts = document.querySelectorAll(".colors");

// on off button
onOffElt.addEventListener("click", function(e) {
  // turning ON
  if (!this.childNodes[1].classList.contains("active")) {
    onOffElt.classList.remove("glow");
    reset();
    this.childNodes[1].classList.add("active");
    this.childNodes[3].classList.remove("active");
    levelElt.value = "--";
    basicElt.addEventListener("click", start);
    strictElt.addEventListener("click", start);
  }
  //turning OFF
  else if (!this.childNodes[3].classList.contains("active")) {
    reset();
    turnOff();
  }
});
 
// start when basic or strict pressed
function start(e) {
  var curr = e.target;
  if (curr.getAttribute("id") == "basic") {
    if (!curr.classList.contains("active")) {
      reset();
      curr.classList.add("active");
      strictElt.classList.remove("active");
      goo();
    }
    else {
      curr.classList.remove("active");
    }
  }
  else if (curr.getAttribute("id") == "strict") {
    if (!curr.classList.contains("active")) {
      reset();
      strict = 1;
      curr.classList.add("active");
      basicElt.classList.remove("active");
      goo();
    }
    else {
      strict = 0;
      curr.classList.remove("active");
    }
  }
}

function goo() {
  randomizer();
  playList(compColors);
  addColorEvents();
}

// gets a random color and updates round number
function randomizer() {
  var random = Math.floor(Math.random() * 4);
  compColors.push(colors[random]);
  levelElt.value = compColors.length;
  return compColors;
}

function playList(array) {
  var i = 0;
  var interval = setInterval(function() {
    playSong(array[i]);
    i++;
    if (i >= array.length) {
      clearInterval(interval);
    }
  }, 650);
}

function playSong(color) {
  if (color === "green") {
    greenAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    greenAudio.play();
    colorElts[0].classList.add("active");
    setTimeout(function() {
      colorElts[0].classList.remove("active");
    }, 200);
  }
  if (color === "red") {
    redAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    redAudio.play();
    colorElts[1].classList.add("active");
    setTimeout(function() {
      colorElts[1].classList.remove("active");
    }, 200);
  }
  if (color === "yellow") {
    yellowAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    yellowAudio.play();
    colorElts[2].classList.add("active");
    setTimeout(function() {
      colorElts[2].classList.remove("active");
    }, 200);
  }
  if (color === "blue") {
    blueAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
    blueAudio.play();
    colorElts[3].classList.add("active");
    setTimeout(function() {
      colorElts[3].classList.remove("active");
    }, 200);
  }
}

function checker(e) {
  var currColor = e.target.getAttribute("id");
  playSong(currColor);
  // playerColors.push(currColor);

  // failed the serie
  if (currColor !== compColors[index]) {
    index = 0;
    levelElt.value = "X";
    removeColorEvents();
    if (strict) {
      reset();
      strict = 1;
      setTimeout(function () {
        levelElt.value = "--";
        goo();
      }, 1000);
      return false;
    }
    setTimeout(function() {
      levelElt.value = compColors.length;
      playList(compColors);
      addColorEvents();
    }, 1000);
  }
  // win the serie
  else if (typeof compColors[index+1] === "undefined") {
    removeColorEvents();
    // win the game
    if (typeof compColors[19] !== "undefined") {
      removeColorEvents();
      levelElt.value = "GG";
      setTimeout(function() {
        winAnimation();
      }, 500);
      return false;
    }
    setTimeout(function() {
      index = 0;
      goo();
    }, 1000);
  }
  // win a sound
  else {
    index++;
  }
}

function addColorEvents() {
  for (var j=0; j<colorElts.length; j++) {
    colorElts[j].addEventListener("click", checker);
  }
}

function removeColorEvents() {
  for (var i=0; i<colorElts.length; i++) {
    colorElts[i].removeEventListener("click", checker);
  }
}

function winAnimation() {
  var iterations = 3;
  var sett = setInterval(function() {
    colorElts[0].classList.add("active");
    colorElts[1].classList.add("active");
    colorElts[2].classList.add("active");
    colorElts[3].classList.add("active");
    setTimeout(function(){
      colorElts[0].classList.remove("active");
      colorElts[1].classList.remove("active");
      colorElts[2].classList.remove("active");
      colorElts[3].classList.remove("active");
    }, 200);
    iterations--;
    if (iterations < 1) {
      clearInterval(sett);
    }
  }, 400);
  setTimeout(function() {
    reset();
    turnOff();
  }, 1600);
}

function reset() {
  compColors = [];
  // playerColors = [];
  j = 0;
  strict = 0;
  removeColorEvents()
}

function turnOff() {  
  levelElt.value = "";
  basicElt.removeEventListener("click", start);
  strictElt.removeEventListener("click", start);
  basicElt.classList.remove("active");
  strictElt.classList.remove("active");
  onOffElt.childNodes[1].classList.remove("active");
  onOffElt.childNodes[3].classList.add("active");
}