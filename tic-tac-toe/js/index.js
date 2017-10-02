// $(this).find("i").css("color", "whitesmoke");

var playerSign = "";
var compSign = "";
var playerClass = "";
var compClass = "";
var victory = "";


// if X chosen; hide dark box and set variables
$("#playX").on("click", function () {
  $("#dark").fadeOut();
  playerSign = '<i class="fa fa-times fa-5x"></i>';
  compSign = '<i class="fa fa-circle-o fa-5x"></i>';
  playerClass = "xxx";
  compClass = "ooo";
  setTimeout(function () {
    $("h1").html("X turn !");
  }, 1000);
});

// if O chosen; hide dark box and set variables
$("#playO").on("click", function () {
  $("#dark").fadeOut();
  playerSign = '<i class="fa fa-circle-o fa-5x"></i>';
  compSign = '<i class="fa fa-times fa-5x"></i>';
  playerClass = "ooo";
  compClass = "xxx";
  setTimeout(function () {
    $("h1").html("O turn !");
  }, 1000);
});

// click on boxes
$(".playable").on("click", function () {
  
  // make sign visible and remove box from playable ones
  $(this).html(playerSign);
  $(this).find("i").css("visibility", "visible");
  $(this).removeClass("playable");
  $(this).addClass(playerClass);
  
  // AI scripts; must be more complex !
  var checker = true;
    for (var i=1; i<10; i++) {
      if (!$("#c" + i).hasClass(playerClass) && !$("#c" + i).hasClass(compClass) && checker) {
        $("#c" + i).html(compSign);
        $("#c" + i).find("i").css("visibility", "visible");
        $("#c" + i).removeClass("playable");
        $("#c" + i).addClass(compClass);
        checker = false;
      }
    }
  
  // checks if player won; alert winner/loser and reset game
  if (($("#c1").hasClass(playerClass) && $("#c2").hasClass(playerClass) && $("#c3").hasClass(playerClass)) || ($("#c4").hasClass(playerClass) && $("#c5").hasClass(playerClass) && $("#c6").hasClass(playerClass)) || ($("#c7").hasClass(playerClass) && $("#c8").hasClass(playerClass) && $("#c9").hasClass(playerClass)) || ($("#c1").hasClass(playerClass) && $("#c4").hasClass(playerClass) && $("#c7").hasClass(playerClass)) || ($("#c2").hasClass(playerClass) && $("#c5").hasClass(playerClass) && $("#c8").hasClass(playerClass)) || ($("#c3").hasClass(playerClass) && $("#c6").hasClass(playerClass) && $("#c9").hasClass(playerClass)) || ($("#c1").hasClass(playerClass) && $("#c5").hasClass(playerClass) && $("#c9").hasClass(playerClass)) || ($("#c3").hasClass(playerClass) && $("#c5").hasClass(playerClass) && $("#c7").hasClass(playerClass))) {
    $("h1").html("You won !");
    setTimeout(function () {
      alert("You won against the computer !");
    }, 10);
    $("#dark").fadeIn();
    // reset game !
    setTimeout(function () {
      $("h1").html("OXO");
      $(".play").attr("class", "playable");
      $(".playable").addClass("play");
      $(".play").find("i").css("visibility", "hidden");
    }, 10);
  }
  
  // check if computer won; alert winner/loser and reset game
  else if (($("#c1").hasClass(compClass) && $("#c2").hasClass(compClass) && $("#c3").hasClass(compClass)) || ($("#c4").hasClass(compClass) && $("#c5").hasClass(compClass) && $("#c6").hasClass(compClass)) || ($("#c7").hasClass(compClass) && $("#c8").hasClass(compClass) && $("#c9").hasClass(compClass)) || ($("#c1").hasClass(compClass) && $("#c4").hasClass(compClass) && $("#c7").hasClass(compClass)) || ($("#c2").hasClass(compClass) && $("#c5").hasClass(compClass) && $("#c8").hasClass(compClass)) || ($("#c3").hasClass(compClass) && $("#c6").hasClass(compClass) && $("#c9").hasClass(compClass)) || ($("#c1").hasClass(compClass) && $("#c5").hasClass(compClass) && $("#c9").hasClass(compClass)) || ($("#c3").hasClass(compClass) && $("#c5").hasClass(compClass) && $("#c7").hasClass(compClass))) {
    $("h1").html("You lose !");
    setTimeout(function () {
      alert("You lose against the computer !");
    }, 10);
    $("#dark").fadeIn();
    // reset game !
    setTimeout(function () {
      $("h1").html("OXO");
      $(".play").attr("class", "playable");
      $(".playable").addClass("play");
      $(".play").find("i").css("visibility", "hidden");
    }, 10);
  }
  
  // check if player and computer tied
  if (!$("#c1, #c2, #c3, #c4, #c5, #c6, #c7, #c8, #c9").hasClass("playable")) {
    $("h1").html("You tied !");
    setTimeout(function () {
      alert("You tied with the computer !");
    }, 10);
    $("#dark").fadeIn();
    // reset game !
    setTimeout(function () {
      $("h1").html("OXO");
      $(".play").attr("class", "playable");
      $(".playable").addClass("play");
      $(".play").find("i").css("visibility", "hidden");
    }, 10);
  }
  
    
});






// https://medium.com/front-end-hacking/tic-tac-toe-javascript-game-b0cd6e98edd9
// http://codereview.stackexchange.com/questions/60871/tic-tac-toe-in-plain-javascript