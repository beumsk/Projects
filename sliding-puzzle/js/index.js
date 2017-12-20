
// https://www.sitepoint.com/image-manipulation-with-html5-canvas-a-sliding-puzzle-2/

init();

// random values in boxes; insert values and add classnames
function init() {
  var puzzleValues = [1, 2, 3, 4, 5, 6, 7, 8, ""],
      $puzzleBox = $(".puzzle");
  $puzzleBox.html("");
  for (let i=0; i<9; i++) {
    var $newDiv = $("<div>");
    let numb = random(puzzleValues);
    $newDiv.html(numb);
    $newDiv.addClass("items item"+numb);
    $puzzleBox.append($newDiv);
  }
  $(".item").css("background-image", "none");
  $puzzleItems = $(".items");
  move();
}

// on every move, check if the game is won
function check() {
  let checkArr = [];
  for (let i=0; i<9; i++) {
    if ($(".items").eq(i).hasClass("item"+(i+1))) {
      checkArr.push(i+1);
      console.log(checkArr);
    }
  }
  if (checkArr.length === 8) {
    $(".item").css("background-image", "url(https://res.cloudinary.com/beumsk/image/upload/v1513108563/tiger_veeob8.jpg)");
    setTimeout(function() {
      alert("You won !");
      init();
    }, 200);
  }
}

// takes random element af an array and deletes it
function random(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  let toReturn = arr[rand];
  arr.splice(rand, 1);
  return toReturn; 
}

// change 2 elts positions in DOM
function swapElts(elt1, elt2) {
  var $temp = $("<div>");
  elt1.before($temp);
  elt2.before(elt1);
  $temp.before(elt2);
  $temp.remove;
}

// on click, move this box to the 'empty' box
function move() {
  $(".items").on("click", function(e) {
    // item 0
    if ($(this).is($(".items").eq(0))) {
      if      ($(".items").eq(1).hasClass("item")) swapElts($(this), $(".items").eq(1));
      else if ($(".items").eq(3).hasClass("item")) swapElts($(this), $(".items").eq(3));
    }
    // item 1
    else if ($(this).is($(".items").eq(1))) {
      if      ($(".items").eq(0).hasClass("item")) swapElts($(this), $(".items").eq(0));
      else if ($(".items").eq(2).hasClass("item")) swapElts($(this), $(".items").eq(2));
      else if ($(".items").eq(4).hasClass("item")) swapElts($(this), $(".items").eq(4));
    }
    // item 2
    else if ($(this).is($(".items").eq(2))) {
      if      ($(".items").eq(1).hasClass("item")) swapElts($(this), $(".items").eq(1));
      else if ($(".items").eq(5).hasClass("item")) swapElts($(this), $(".items").eq(5));
    }
    // item 3
    else if ($(this).is($(".items").eq(3))) {
      if      ($(".items").eq(0).hasClass("item")) swapElts($(this), $(".items").eq(0));
      else if ($(".items").eq(4).hasClass("item")) swapElts($(this), $(".items").eq(4));
      else if ($(".items").eq(6).hasClass("item")) swapElts($(this), $(".items").eq(6));
    }
    // item 4
    else if ($(this).is($(".items").eq(4))) {
      if      ($(".items").eq(1).hasClass("item")) swapElts($(this), $(".items").eq(1));
      else if ($(".items").eq(3).hasClass("item")) swapElts($(this), $(".items").eq(3));
      else if ($(".items").eq(5).hasClass("item")) swapElts($(this), $(".items").eq(5));
      else if ($(".items").eq(7).hasClass("item")) swapElts($(this), $(".items").eq(7));
    }
    // item 5
    else if ($(this).is($(".items").eq(5))) {
      if      ($(".items").eq(2).hasClass("item")) swapElts($(this), $(".items").eq(2));
      else if ($(".items").eq(4).hasClass("item")) swapElts($(this), $(".items").eq(4));
      else if ($(".items").eq(8).hasClass("item")) swapElts($(this), $(".items").eq(8));
    }
    // item 6
    else if ($(this).is($(".items").eq(6))) {
      if      ($(".items").eq(3).hasClass("item")) swapElts($(this), $(".items").eq(3));
      else if ($(".items").eq(7).hasClass("item")) swapElts($(this), $(".items").eq(7));
    }
    // item 7
    else if ($(this).is($(".items").eq(7))) {
      if      ($(".items").eq(4).hasClass("item")) swapElts($(this), $(".items").eq(4));
      else if ($(".items").eq(6).hasClass("item")) swapElts($(this), $(".items").eq(6));
      else if ($(".items").eq(8).hasClass("item")) swapElts($(this), $(".items").eq(8));
    }
    // item 8
    else if ($(this).is($(".items").eq(8))) {
      if      ($(".items").eq(5).hasClass("item")) swapElts($(this), $(".items").eq(5));
      else if ($(".items").eq(7).hasClass("item")) swapElts($(this), $(".items").eq(7));
    }
    // perform the check
    check();
  });
}