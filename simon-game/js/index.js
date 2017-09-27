$(document).ready(function () {
  var comp = [];
  var player = [];
  var count = 0;
  var j = 0;
  var strict = false;
  var divs = ["green", "red", "yellow", "blue"];
  var greenAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  var redAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  var yellowAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  var blueAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
  
  $("#start, #strict").attr("disabled", "disabled");
  $("#on-off").on("click", function () {
    $("#on").toggleClass("on");
    $("#off").toggleClass("off");
    if ($("#on").hasClass("on")) {
      $("#count").val("--");
      $("#start, #strict").removeAttr("disabled");
    }
    if ($("#off").hasClass("off")) {
      $("#count").val("");
      $("#start, #strict").attr("disabled", "disabled");
      $("#start, #strict").removeClass("start-strict");
    }
  });
  
  $("#start, #strict").on("click", function () {
    $(this).toggleClass("start-strict");
  });
  
  function resetColor() {
    $("#green").css("background", "#27ae60");
    $("#red").css("background", "#c0392b");
    $("#yellow").css("background", "#f39c12");
    $("#blue").css("background", "#2980b9");
  }
  
  function randomizer() { 
    count++;    
    $("#count").val(count);
    var length = $(".colors").length;
    var random = Math.floor(Math.random() * length);
    comp.push(divs[random]);
    displaySet(comp);
  }
  
  function currentDisplay(color) {
    switch (color) {
      case "green":
        $("#green").css("background", "#2ecc71");
        greenAudio.play();
        break;
      case "red":
        $("#red").css("background", "#e74c3c");
        redAudio.play();
        break;
      case "yellow":
        $("#yellow").css("background", "#f1c40f");
        yellowAudio.play();
        break;
      case "blue":
        $("#blue").css("background", "#3498db");
        blueAudio.play();
        break;
    }
    window.setTimeout(function() {
      resetColor();
    }, 300);
  }
  
  function displaySet(array) {
    var i = 0;
    var interval = setInterval(function() {
      currentDisplay(array[i]);
      i++;
      if (i >= array.length) {
        clearInterval(interval);
      }
    }, 650);
  }
  
  function checkIds() {
    $(".colors").click(function() {
      var ID = $(this).attr("id");
      currentDisplay(ID);
      player.push(ID);
      
      if (ID !== comp[j]) {
        j = 0;
        $("#count").val("X");
        $(".colors").off();
        if(strict){
          return false;
        }
        setTimeout(function() {
          $("#count").val(count);
          displaySet(comp);
          checkIds();
        }, 1000);

      } else if (typeof comp[20] !== 'undefined'){
        $(".colors").off();
        $("#count").val("GG");
        
      } else if (typeof comp[j+1] === 'undefined'){
        $(".colors").off();
        setTimeout(function() {
          j=0;
          randomizer();
          checkIds();
        }, 1000);
      }
      else{
        j++;
      }
    });
  }  
  
  function reset(){
    resetColor();
    $(".colors").off();
    comp = []; count = 0; j = 0; player = [];
    randomizer();
    displaySet(comp);
    checkIds();
  }

  $("#start").on("click", function sta() {
    strict = false;
    reset();
  });
  
  $("#strict").on("click", function str(){
    strict = true;
    reset();    
  });
  
});

// https://codepen.io/Kornil/pen/qZMPGa?editors=0010