
// change auto block revealing with on click ?

var d = new Date(),
    toDate = d.getDate(),
    month = d.getMonth(),
    $modal = $(".modal"),
    $modalP = $(".modal div p"),
    $items = $(".items");

adventCalendar();
 
// main function
function adventCalendar() {
  // checks if advent time and opens passed dates on click
  if (month === 11 && toDate < 25) {
    $modal.on("click", function() {
      openDatesAuto();
      // openDatesClick();
    });
    //checks if christmas
  } else if (month === 11 && toDate === 25) {
    modalText("Merry Christmas !");
    // not advent time nor christmas
  } else {
    modalText("Be patient, it's not advent time yet !");
  }
}
 
// open passed dates on click
function openDatesClick() {
  $modal.fadeOut();
  for (let i=0; i<=toDate; i++) {
    $(".item" + i).addClass("active");
  }
  $(".active").on("click", function() {
    $(this).css("opacity", 0).removeClass("active");
  });
}

// open passed dates automatically
function openDatesAuto() {
  $modal.fadeOut();
  for (let i=0; i<=toDate; i++) {
    (function(ind) {
      setTimeout(function() { 
        $(".item" + ind).css("opacity", 0);
      }, 1000 * i);
    })(i);
  }
}

// shows modal window
function modalText(message) {
  $modalP.html(message);
  $modal.css("display", "flex");
}