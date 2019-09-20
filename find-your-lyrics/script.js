// getLyrics();
// https://lyricsovh.docs.apiary.io/#
// check that lyrics exist and warn if not

// function getLyrics() {
//   var artist = $("#artist").val();
//   var title = $("#title").val();
//   var url = "https://api.lyrics.ovh/v1/" + artist + "/" + title;
//   var url2 = "https://api.lyrics.ovh/v1/suggest/" + artist;

  
  // $.getJSON(url2 , function(json, status) {
  //   var data = JSON.parse(JSON.stringify(json));
  //   console.log("te");
  // });
  // Ajax call to lyrics API
  // $.getJSON(url , function(json, status) {
  //   var data = JSON.parse(JSON.stringify(json));
  //   $(".lyrics").html(data.lyrics);    
  // });
// }

// $("#search").on("click", getLyrics);




// 'use strict';

var input = $('#input');
var results = $('#results');
var apiUrl = 'https://api.lyrics.ovh';

var lyricsDiv = $('#lyrics');
var timeoutSuggest;
lyricsDiv.hide();
input.on('input', function() {
  suggestions();
});

function removeResults() {
  $('.result').remove();
}

function suggestions() {
  var value = input.val();
  if (!value) {
    removeResults();
    return;
  }
  console.log("Search suggestions for", value);
  $.getJSON(apiUrl + '/suggest/' + value, function (data) {
    removeResults();
    var finalResults = [];
    var seenResults = [];
    data.data.forEach(function (result) {
      if (seenResults.length >= 5) {
        return;
      }
      var info = result.title + ' - ' + result.artist.name;
      if (seenResults.indexOf(info) >= 0) {
        return;
      }
      seenResults.push(info);
      finalResults.push({
        display: info,
        artist: result.artist.name,
        title: result.title
      });
    });

    var length = finalResults.length;
    finalResults.forEach(function (result, i) {
      var classs = 'result';
      if (i == length-1) {
        classs += ' result-last'
      }
      var liElt = $('<li class="list-group-item list-group-item-action ' + classs + '">' + result.display + '</li>');
      results.append(liElt);
      liElt.click(function () {
        getLyrics(result);
      });
    });
  });
}

function getLyrics(song) {
  console.log("Search lyrics for", song);
  removeResults();
  lyricsDiv.slideUp();
  $.getJSON(apiUrl + '/v1/' + song.artist + '/' + song.title, function (data) {
    var html = '<h3 class="lyrics-title">' + song.display + '</h3>';
    html += '<div class="copy-lyrics btn" id="copy-lyrics" data-clipboard-target="#thelyrics">Copy the lyrics <span id="copy-ok"></span></div>';
    html += '<div id="thelyrics">' + data.lyrics.replace(/\n/g, '<br />') + '</div>';
    lyricsDiv.html(html);
    lyricsDiv.slideDown();
    var copyl = new Clipboard('#copy-lyrics');
    copyl.on('success', function(e) {
      e.clearSelection();
      $('#copy-lyrics').text('Copied !');
    });
  });
}