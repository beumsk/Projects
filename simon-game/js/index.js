
$(document).ready(function () {
  
  // game variables
  var comp = [],
      player = [],
      count = 0,
      j = 0,
      strict = false,
      divs = ["green", "red", "yellow", "blue"],
      greenAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
      redAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
      yellowAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
      blueAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
  
  // jQuery variables
  var $start = $("#start"),
      $strict = $("#strict"),
      $startStrict = $("#start, #strict"),
      $on = $("#on"),
      $off = $("#off"),
      $onOff = $("#on, #off"),
      $colors = $(".colors"),
      $count = $("#count"),
      $green = $("#green"),
      $red = $("#red"),
      $yellow = $("#yellow"),
      $blue = $("#blue");
  
  // switch on/off
  $onOff.on("click", function () {
    $on.toggleClass("on");
    $off.toggleClass("off");
    if ($on.hasClass("on")) {
      $count.val("--");
      $startStrict.removeAttr("disabled");
    }
    if ($off.hasClass("off")) {
      $count.val("");
      $startStrict.attr("disabled", "disabled");
      $startStrict.removeClass("start-strict");
    }
  });
  
  // reset colors
  function resetColor() {
    $green.css("background", "#27ae60");
    $red.css("background", "#c0392b");
    $yellow.css("background", "#f39c12");
    $blue.css("background", "#2980b9");
  }
  
  // random color picker
  function randomizer() { 
    count++;    
    $count.val(count);
    var length = $colors.length;
    var random = Math.floor(Math.random() * length);
    comp.push(divs[random]);
    displaySet(comp);
  }
  
  // current color animation
  function currentDisplay(color) {
    switch (color) {
      case "green":
        $green.css("background", "#2ecc71");
        greenAudio.play();
        break;
      case "red":
        $red.css("background", "#e74c3c");
        redAudio.play();
        break;
      case "yellow":
        $yellow.css("background", "#f1c40f");
        yellowAudio.play();
        break;
      case "blue":
        $blue.css("background", "#3498db");
        blueAudio.play();
        break;
    }
    window.setTimeout(function() {
      resetColor();
    }, 300);
  }
  
  // run the color list
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
  
  // checks player action
  function checkIds() {
    $colors.click(function() {
      var ID = $(this).attr("id");
      currentDisplay(ID);
      player.push(ID);
      
      if (ID !== comp[j]) {
        j = 0;
        $count.val("X");
        $colors.off();
        if(strict){
          return false;
        }
        setTimeout(function() {
          $count.val(count);
          displaySet(comp);
          checkIds();
        }, 1000);

      } else if (typeof comp[20] !== 'undefined'){
        $colors.off();
        $count.val("GG");
        
      } else if (typeof comp[j+1] === 'undefined'){
        $colors.off();
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
  
  // set/reset everything 
  function reset(){
    resetColor();
    $colors.off();
    comp = []; count = 0; j = 0; player = [];
    randomizer();
    displaySet(comp);
    checkIds();
    $startStrict.removeClass("start-strict");
  }
  
  // normal mode button
  $start.on("click", function sta() {
    strict = false;
    reset();
    $(this).addClass("start-strict");
  });
  
  // strict mode button
  $strict.on("click", function str(){
    strict = true;
    reset();
    $(this).addClass("start-strict");
  });
  
});