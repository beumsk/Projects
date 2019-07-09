getDJ();

function getDJ() {
  // Ajax call to SW API  
  $.getJSON("https://icanhazdadjoke.com/", "Accept: application/json", function(json) {
    var data = JSON.parse(JSON.stringify(json));
    // console.log(data.joke);
    $(".joke").html(data.joke);
  });
}

$("button").on("click", getDJ);