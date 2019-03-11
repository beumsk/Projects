
// add keypress events to put data

var operationElts = document.querySelectorAll(".number, .operator"),
    clearElt = document.querySelector("#clear"),
    equalElt = document.querySelector("#equal"),
    screenElt = document.querySelector("#screen");

// CALCULATOR
// display numbers and operators clicked
for (let i=0; i<operationElts.length; i++) {
  operationElts[i].addEventListener("click", function() {
    screenElt.insertAdjacentHTML("beforeEnd", this.innerHTML);
  });
}
// clear the calc
clearElt.addEventListener("click", function() {
  screenElt.innerHTML = "";
});
// process calc
equalElt.addEventListener("click", function() {
  // round answer to have max 6 decimals
  screenElt.innerHTML = Math.round(eval(screenElt.innerHTML) * 1000000) / 1000000;
});