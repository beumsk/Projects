
var $search = $("#search"),
    $wiki = $("#wiki"),
    $section = $("section");

// launch function on click
$search.click(function() {
  wikiLove();
});

//launch function with enter
$wiki.keypress(function (e) {
  if (e.which == 13) {
    e.preventDefault();
    wikiLove();
  }
});

function wikiLove() {
  // delete old research
  $(".delete").remove();
  // get the input value
  var wikiSearch = $wiki.val();
  $wiki.val("");
  // use wiki API
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + wikiSearch + "&callback=?", function(json) {
    var data = JSON.parse(JSON.stringify(json));
    // first 3 results
    for(var i = 0; i < 3; i++) {
      // should find a way to get working urls
      var wikiUrl = "https://en.wikipedia.org/?curid=" + data.query.search[i].pageid;
      var wikiTitle = data.query.search[i].title;
      var wikiContent = data.query.search[i].snippet;
      // put data in html
      $section.append("<a class='delete' href='" + wikiUrl + "' target='_blank'><div class='well well-sm'><h3>" + wikiTitle + "</h3><hr><p>" + wikiContent + "...</p></div></a>");
    }
  })
}