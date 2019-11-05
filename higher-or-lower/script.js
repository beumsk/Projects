// improve design

var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
var streak = 0;

var cardElt = document.querySelector(".card");
var streakElt = document.querySelector(".streak");

var currentCard = getRandomCard(cards);
setValues(currentCard, streak);

document.querySelector("#lower").addEventListener("click", function() {checker("lower")} );
document.querySelector("#equal").addEventListener("click", function() {checker("equal")} );
document.querySelector("#higher").addEventListener("click", function() {checker("higher")} );

function checker(comparison) {
  var newCard = getRandomCard(cards);
  if( (comparison === "higher" && cards.indexOf(newCard) >  cards.indexOf(currentCard)) 
   || (comparison === "equal"  && cards.indexOf(newCard) == cards.indexOf(currentCard))
   || (comparison === "lower"  && cards.indexOf(newCard) <  cards.indexOf(currentCard)) ) {
    streak ++;
  }
  else {
    streak = 0;
  }
  currentCard = newCard;
  setValues(currentCard, streak);
}

function setValues(card, streak) {
  cardElt.style.backgroundColor = "black";
  cardElt.innerHTML = card;
  streakElt.innerHTML = streak;
  setTimeout(function() {
    cardElt.style.backgroundColor = "white";
  }, 400);
}

function getRandomCard(arr) {
  return cards[Math.floor(Math.random() * arr.length)];
}