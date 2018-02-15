
var $newQuote = $("#newQuote"),
    $quote = $("#quote"),
    $author = $("#author"),
    $twitter = $("#twitter"),
    $share = $(".share");

// clicking on new quote button -> get quote from forismatic through json
$newQuote.on("click", function() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      // replace content with new quote
      $quote.html(response.quoteText);
      $author.html(response.quoteAuthor);
      // enable tweet button
      $twitter.removeClass("disabled");
      $share.attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(response.quoteText + "\n - " + response.quoteAuthor + "\n #RandomQuote"));
    }
  });
});