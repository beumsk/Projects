
var launch = document.getElementsByClassName("launch"),
    rocket = document.getElementsByClassName("rocket"),
    footer = document.getElementsByTagName("footer");

launch[0].addEventListener("click", function () {
  launch[0].style.display = "none";
  rocket[0].style.animation = "fire 20s";
  footer[0].style.opacity = 1;
  setTimeout(function () {
    rocket[0].style.animation = "";
    launch[0].style.display = "block";
    footer[0].style.opacity = 0;
  }, 20000)
});