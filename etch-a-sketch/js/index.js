
var containerSide = "300px",
    type = "gradient",
    box = document.getElementsByClassName("box"),
    table = document.querySelector(".table"),
    gradient = document.querySelector("#gradient"),
    random = document.querySelector("#random"),
    reset = document.querySelector("#reset"),
    size = document.querySelector("#size"),
    boxSide = 16;

table.style.width = containerSide;

init();

// Event listeners 
reset.addEventListener("click", function() {
  resetGrid(size.value);
});

random.addEventListener("click", function() {
  type = "random";
  this.classList.add("active");
  gradient.classList.remove("active");
});

gradient.addEventListener("click", function() {
  type = "gradient";
  this.classList.add("active");
  random.classList.remove("active");
});

size.addEventListener("input", function(e) {
  if (e.target.value !== 16) {
    resetGrid(e.target.value);
  }
});

// init function
function init() {
  for(var i=0; i<boxSide*boxSide; i++) {
    createDiv();
  }
  main();
}

// reset function
function resetGrid(sidee) {
  boxSide = sidee;
  table.innerHTML = "";
  init();
  size.value = sidee;
}

function main() {
  for (var i=0; i<box.length; i++) {
    box[i].addEventListener("mouseover", function() {
      if (type === "random") {
        randomColor(this);
      }
      else {
        opacityIncrement(this);
      }
    });
  }
}

function opacityIncrement(event) {
  event.style.background = "#f5f5f5";
  event.style.opacity = parseFloat(event.style.opacity) + 0.2;
}

// get random color
function randomColor(event) {
  event.style.opacity = 1;
  event.style.background = "#"+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}

// creates div and append it to the table
function createDiv() {
  var divElt = document.createElement("div");
  divElt.classList.add("box");
  divElt.style.height = table.offsetWidth / boxSide + "px";
  divElt.style.width = table.offsetWidth / boxSide + "px";
  divElt.style.opacity = 0.1;
  table.appendChild(divElt);
}