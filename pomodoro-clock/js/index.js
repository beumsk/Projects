
var time = document.getElementById("time"),
    minute = document.getElementById("min"),
    second = document.getElementById("sec"),
    startButton = document.getElementById("start"),
    resetButton = document.getElementById("reset");

startButton.addEventListener("click", function start () {
  if (startButton.innerHTML === "START") {
    startButton.innerHTML = "PAUSE";
    seti = setInterval(function () {
      if (second.value > 0) {
        second.value -= 1;
      }
      else if (minute.value > 0) {
        second.value = "59";
        minute.value -= 1;
      }
      else {
        clearInterval(seti);
        document.body.style.backgroundImage = "linear-gradient(to top left, #c0392b, #e74c3c , #9b59b6)";
        second.value = "";
        minute.value = "";
        alert("Time Out !");
      }
    }, 1000);
  }
  else {
    startButton.innerHTML = "START";
    clearInterval(seti);
  }
});

resetButton.addEventListener("click", function res () {
  clearInterval(seti);
  minute.value = "25";
  second.value = "00";
  startButton.innerHTML = "START";
  document.body.style.backgroundImage = "linear-gradient(to top left, #2980b9, #9b59b6)";
});