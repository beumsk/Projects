$("#newQuote").click(function() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function(response) {
          $("#quote").html(response.quoteText);
          $("#author").html(response.quoteAuthor);
          $("#twitter").removeClass("disabled");
          $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(response.quoteText + "\n - " + response.quoteAuthor + "\n #RandomQuote"));
        }
    });
});