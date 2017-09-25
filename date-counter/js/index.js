$("button").on("click", function(e) {
  e.preventDefault();
});

$("#sinceX").find($("button")).on("click", function(e) {
  var date1 = new Date($("#year").val() + '-' + $("#month").val() + '-' + $("#day").val());
  var date2 = new Date();
  var dateDiff = date2 - date1;
  dateDiff = (dateDiff / 1000 / 60 / 60 / 24).toFixed(0);
  $("#sinceA").html('<p>' + dateDiff + ' days !</p>');
});

$("#dayX").find($("button")).on("click", function(e) {
  var date3 = new Date().getTime();
  var dateAdd = $("#date").val() * 24 * 60 * 60 * 1000 + date3;
  $(("#dayA")).html('<p>' + new Date(dateAdd) + '</p>');
});