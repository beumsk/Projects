
var containerSide = "300px";
var type = "gradient";
var box = document.getElementsByClassName("box");
var section = document.querySelector("section");
var gradient = document.querySelector("#gradient");
var random = document.querySelector("#random");
var reset = document.querySelector("#reset");
var size = document.querySelector("#size");
var boxSide = 16;

section.style.width = containerSide;
section.style.height = containerSide;

init();

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
  if (this.value !== 16) {
    console.log(this.value);
    resetGrid(this.value);
  }
});

function init() {
  for(var i=0; i<boxSide*boxSide; i++) {
    createDiv();
  }
  main();
}

function resetGrid(sidee) {
  boxSide = sidee;
  section.innerHTML = "";
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

function randomColor(event) {
  event.style.opacity = 1;
  event.style.background = "#"+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}

function createDiv() {
  var divElt = document.createElement("div");
  divElt.classList.add("box");
  divElt.style.height = section.offsetWidth / boxSide + "px";
  divElt.style.width = section.offsetWidth / boxSide + "px";
  divElt.style.opacity = 0.1;
  section.appendChild(divElt);
}