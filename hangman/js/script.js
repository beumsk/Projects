// add drawings
// add basic words
// add max number of try
// add difficulty option

var words = {
  w3: ["car", "bus", "red", "fun", "arm", "leg", "hat", "dog", "cat", "pie", "egg", "cow", "pen", "key", "mug", "tea"],
  w4: ["boat", "ball", "blue", "rose", "hero", "city", "shoe", "hand", "sock", "head", "back", "foot", "bear", "beer", "duck", "lion", "wine", "milk", "meat", "rice", "kiwi", "peer", "salt", "fish", "rock", "bike", "book"],
  w5: ["green", "black", "white", "house", "world", "space", "earth", "night", "shirt", "boxer", "scarf", "glove", "sheep", "snake", "horse", "water", "juice", "pasta", "apple", "mango", "melon", "salad", "candy", "bread", "ruler", "phone", "paper", "plane", "train"],
  w6: ["yellow", "pencil", "finger", "street", "jacket", "rabbit", "monkey", "cookie", "banana", "potato", "orange", "carrot", "tomato", "cheese", "pepper", "letter", "cisors", "wallet", "bottle", "coffee"],
  w7: ["morning", "sweater", "coconut", "ketchup", "mostard", "chicken", "country"],
  w8: ["elephant", "zucchini", "eggplant", "computer"]
};
var allWords = words.w3.concat(words.w4, words.w5, words.w6, words.w7, words.w8);

getRandomWord();

function getRandomWord() {
  var randomWord = allWords[Math.floor(Math.random() * allWords.length)];
  $(".word").html("");
  var randomWordSplitted = randomWord.split("");
  randomWordSplitted.forEach(function(x){
    $(".word").append("<span class='"+x+"'>"+x+"</span>");
  });

  $(".alphabet span").on("click", function() {
    var letter = $(this).text();
    if(checkLetter(letter, randomWordSplitted)) {
      $(this).addClass("green");
      $("."+letter).addClass("found");

      if (checkWin(randomWordSplitted.length)) {
        $(".alphabet, .word").hide().delay(400);
        gameReset();
      }
    }
    else {
      $(this).addClass("red");
    }
  });
}

$("button").on("click", function() {
  gameReset();
});

function checkWin(length) {
  if($(".found").length === length) {
    return true;
  }
}

function checkLetter(letter, arr) {
  if(arr.indexOf(letter) !== -1) {
    return true;
  }
  else {
    return false;
  }
}

function gameReset() {  
  $(".alphabet span").off().removeClass();
  $(".word span").removeClass("found");
  $(".alphabet, .word").fadeIn();
  getRandomWord();
}