// add drawings
// improve design
// add basic words
// add max number of try
// add difficulty option

var words = {
  w3: ["car", "bus", "red", "fun", "arm", "leg", "hat", "dog", "cat", "pie", "egg", "cow", "pen", "key", "mug", "tea", "air"],
  w4: ["boat", "ball", "blue", "rose", "hero", "city", "shoe", "hand", "sock", "head", "back", "foot", "bear", "beer", "duck", "lion", "wine", "milk", "meat", "rice", "kiwi", "peer", "salt", "fish", "rock", "bike", "book", "fire", "tree"],
  w5: ["green", "black", "white", "house", "world", "space", "earth", "night", "shirt", "boxer", "scarf", "glove", "sheep", "snake", "horse", "water", "juice", "pasta", "apple", "mango", "melon", "salad", "candy", "bread", "ruler", "phone", "paper", "plane", "train", "mouse", "chair"],
  w6: ["yellow", "pencil", "finger", "street", "jacket", "rabbit", "monkey", "cookie", "banana", "potato", "orange", "carrot", "tomato", "cheese", "pepper", "letter", "cisors", "wallet", "bottle", "coffee", "laptop", "screen", "garden", "toilet"],
  w7: ["morning", "sweater", "coconut", "ketchup", "mostard", "chicken", "country", "kitchen"],
  w8: ["elephant", "zucchini", "eggplant", "computer", "keyboard", "bathroom", "basement"],
  w9: ["aardvarks", "alligator", "boulevard", "hamburger", "turquoise", "telephone", "furniture", "checklist", "container", "professor", "frequency", "spaceship", "scarecrow", "deodorant", "cranberry"],
  w10: ["department", "watermelon", "strawberry", "skateboard", "rainforest", "helicopter", "percentage", "restaurant", "microscope", "vegetables", "university", "volleyball", "toothbrush", "laboratory", "calculator", "wheelchair", "chandelier", "blackberry", "binoculars"],
  all: []
};

words.all = words.w3.concat(words.w4, words.w5, words.w6, words.w7, words.w8);

getRandomWord();

function getRandomWord() {
  var randomWord = words.all[Math.floor(Math.random() * words.all.length)];
  $(".word").html("");
  console.log(randomWord);
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
        $(".alphabet").fadeOut();
        // setTimeout(function(){
        //   $(".word").hide(400);
        //   gameReset();
        // }, 800); 
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