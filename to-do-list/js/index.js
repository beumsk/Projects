$("button").on("click", function(e) {
  e.preventDefault();
});


$(function() {
  $("button").on("click", function() {
    var input = $("#inp").val();
    if (input.length > 0) {
      $("#bottom").prepend("<p class='elt'>" + input + "<span class='del' title='Delete element'>x</span></p>");
      $(".elt").eq(0).fadeIn(800);
      $("#inp").val("");
    }
    
    /*$(".elt").on("click", function() {
      $(this).toggleClass("crossed");
    });*/
    
    $(".del").on("click", function() {
      $(this).parent().fadeOut(400);
      $(this).remove();
    });
  });
  
  
});