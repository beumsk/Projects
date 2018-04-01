
// add rounds (eg first to 5) and try again button to start over

var signs = ["rock", "paper", "scissors"],
    chosenSign = "",
    randomSign = "",
    answer = "",
    userScore = 0,
    aiScore = 0,
    $react = $("#react"),
    $chosen = $("#chosen"),
    $random = $("#random"),
    $signChosen = $("#signChosen"),
    $signRandom = $("#signRandom"),
    $answer = $("#answer"),
    $score = $("#score");

// get random sign from signs[]
function getRandomSign() {
  var random = Math.floor(Math.random()*signs.length);
  randomSign = signs[random];
}

// get answer comparing signs
function getAnswer(randomSign, chosenSign) {
  // tie
  if (randomSign === chosenSign) {
    answer = "<span class='btn btn-warning'>You tied with me, play again !</span>";
    $react.css("color", "#f0ad4e");
  }
  // win
  else if ((chosenSign === "scissors" && randomSign === "paper") || 
           (chosenSign === "rock" && randomSign === "scissors") || 
           (chosenSign === "paper" && randomSign === "rock")) {
    answer = "<span class='btn btn-success'>You win !</span>";
    $react.css("color", "#5cb85c");
    userScore++;
  }
  // lose
  else if ((chosenSign === "scissors" && randomSign === "rock") || 
           (chosenSign === "paper" && randomSign === "scissors") || 
           (chosenSign === "rock" && randomSign === "paper")) {
    answer = "<span class='btn btn-danger'>You lose !</span>";
    $react.css("color", "#d9534f");
    aiScore++;
  }
  else {
    answer = "";
  }
}

// get reaction texts and signs
function getReact() {
  // player action
  $chosen.html("You played <b>" + chosenSign + "</b> !");
  $signChosen.removeClass("fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $signChosen.addClass("fa-hand-" + chosenSign + "-o");
  // computer action
  $random.html("I played <b>" + randomSign + "</b> !");
  $signRandom.removeClass("fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $signRandom.addClass("fa-hand-" + randomSign + "-o");
  // results
  $answer.html(answer);
  $score.html(userScore + " vs " + aiScore);
  // display the box
  $react.fadeIn();
}

// run shifumi :D
$(".gooo").on("click", function() {
  $react.hide();
  var $current = $(this);
  chosenSign = $current.attr("id");
  getRandomSign();
  getAnswer(randomSign, chosenSign);
  getReact();
});