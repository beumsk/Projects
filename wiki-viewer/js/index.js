
function wikiLove() {
  // delete old research
  $(".delete").remove();
  // get the input value
  var wikiSearch = $("#wiki").val();
  var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=";
  var apiEnd = "&callback=?";
  // use wiki API
  $.getJSON(api + wikiSearch + apiEnd, function(json) {
    var data = JSON.parse(JSON.stringify(json));
    // 5 first results
    for(var i = 0; i < 3; i++) {
      // should find a way to get working urls
      var wikiUrl = "https://en.wikipedia.org/" + data.query.search[i].title;
      var wikiTitle = data.query.search[i].title;
      var wikiContent = data.query.search[i].snippet;
      // put data in html
      $("section").append("<a class='delete' href='" + wikiUrl + "' target='_blank'><div class='well well-sm'><h3>" + wikiTitle + "</h3><hr><p>" + wikiContent + "...</p></div></a>");
    }
  })
}
// launch function on click
$("#search").click(function() {
  wikiLove();
});
// should add launch with enter
$('#wiki').keypress(function (e) {
  if (e.which == 13) {
    e.preventDefault();
    wikiLove();
  }
});