var signs = ["rock", "paper", "scissors"];
var randomSign = "";
var chosenSign = "";
var answer = "";
var userScore = 0;
var aiScore = 0;

// get random sign from signs[]
function getRandomSign() {
  var random = Math.floor(Math.random()*signs.length);
  randomSign = signs[random];
}

// get chosen sign from fa-icons
$("#rock").click(function() {
  chosenSign = "rock";
});
$("#paper").click(function() {
  chosenSign = "paper";
});
$("#scissors").click(function() {
  chosenSign = "scissors";
});

// get answer comparing signs
function getAnswer(randomSign, chosenSign) {
  if (randomSign === chosenSign) {
    answer = "<span class='btn btn-warning'>You tied with me, play again !</span>";
    $("#react").css("color", "#f0ad4e");
  }
  else if (chosenSign === "scissors" && randomSign === "paper") {
    answer = "<span class='btn btn-success'>You win !</span>";
    $("#react").css("color", "#5cb85c");
    userScore++;
  }
  else if (chosenSign === "scissors" && randomSign === "rock") {
    answer = "<span class='btn btn-danger'>You lose !</span>";
    $("#react").css("color", "#d9534f");
    aiScore++;
  }
  else if (chosenSign === "paper" && randomSign === "rock") {
    answer = "<span class='btn btn-success'>You win !</span>";
    $("#react").css("color", "#5cb85c");
    userScore++;
  }
  else if (chosenSign === "paper" && randomSign === "scissors") {
    answer = "<span class='btn btn-danger'>You lose !</span>";
    $("#react").css("color", "#d9534f");
    aiScore++;
  }
  else if (chosenSign === "rock" && randomSign === "scissors") {
    answer = "<span class='btn btn-success'>You win !</span>";
    $("#react").css("color", "#5cb85c");
    userScore++;
  }
  else if (chosenSign === "rock" && randomSign === "paper") {
    answer = "<span class='btn btn-danger'>You lose !</span>";
    $("#react").css("color", "#d9534f");
    aiScore++;
  }
  else {
    answer = "";
  }
}

// get reaction texts and signs
function getReact() {
  $("#chosen").html("You played <b>" + chosenSign + "</b> !");
  $("#signC").removeClass("fa-hand-rock-o");
  $("#signC").removeClass("fa-hand-paper-o");
  $("#signC").removeClass("fa-hand-scissors-o");
  $("#signC").addClass("fa-hand-" + chosenSign + "-o");
  $("#random").html("I played <b>" + randomSign + "</b> !");
  $("#signR").removeClass("fa-hand-rock-o");
  $("#signR").removeClass("fa-hand-paper-o");
  $("#signR").removeClass("fa-hand-scissors-o");
  $("#signR").addClass("fa-hand-" + randomSign + "-o");
  $("#answer").html(answer);
  $("#score").html(userScore + " vs " + aiScore);
}

// run shifumi :D
$(".gooo").on("click", function() {
  getRandomSign();
  getAnswer(randomSign, chosenSign);
  getReact();
  $("#react").addClass("well");
})