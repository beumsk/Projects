
// // button shadow
// $(".button").on("click", function () {
//   $(this).css("box-shadow", "none");
//   $(this).delay(100)
//   .queue(function (next) { 
//     $(this).css("box-shadow", "3px 3px 3px black"); 
//     next();
//   });
// });

// CALCULATOR
// display numbers and operators clicked
$(".number, .operator").on("click", function () {
  $("#screen").append($(this).html());
})
// clear the calc
$("#clear").on("click", function () {
  $("#screen").html("");
});
// process calc
$("#equal").on("click", function () {
  // round answer to have max 6 decimals
  $("#screen").html(Math.round(eval($("#screen").html()) * 1000000) / 1000000);
});


// handle wrong input 
// 2 operators
// first is NaN


/* old and way longer version
// two empty var; 
var curr = "";
var glob = [];

// number buttons
$(".number").on("click", function () {
  // deletes first 0
  if (curr.length === 0 && glob.length === 0) {
    $("#screen").html("");
  }
  $("#screen").append($(this).html());
  curr += $(this).html();
});

// operator buttons
$(".operator").on("click", function () {
  glob.push(curr);
  $("#screen").append($(this).html());
  glob.push($(this).html());
  curr = "";
});

// clear button
$("#clear").on("click", function () {
  $("#screen").html("0");
  // reset var
  curr = "";
  glob = [];
});

// equal button
$("#equal").on("click", function() {
  glob.push(curr);
  $("#screen").html(glob);
  //var calc = [];
  var calc = "";
  // go through array made of numbers and operators
  for (i=0; i<glob.length; i++) {
    calc += glob[i];
  }
  // turn string into calc and round it with max 9 decimals
  var result = Math.round(eval(calc) * 1000000000) / 1000000000;
  $("#screen").html(result);
  // reset arrays
  curr = "";
  glob = [];
});
*/