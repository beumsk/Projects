
// add auto change interval
// add transitions

var prev = document.getElementById("prev");
var next = document.getElementById("next");
var statusDot = document.getElementsByClassName("status-dot");
var img = document.getElementById("carousel");
var count = 0;

// click on prev
prev.addEventListener("click", function () {
  arrow("prev");
});

// click on next
next.addEventListener("click", function () {
  arrow("next");
});

// click on bullets
for (var i=0; i<statusDot.length; i++) {
  statusDot[i].addEventListener("click", function () {
    statusChange(this);
  })
}

//
function statusChange (event) {
  for (var j=0; j<statusDot.length; j++) {
    statusDot[j].classList.remove('current')
  }
  event.classList.add('current');
  count = event.id;
  img.style.backgroundImage = "url(" + images[count] + ")";
}

function arrow (sign) {
  if (sign == "next") {
    if (count < images.length-1) {count ++;}
    else {count = 0;}
    img.style.backgroundImage = "url(" + images[count] + ")";
    for (var j=0; j<statusDot.length; j++) {
      statusDot[j].classList.remove('current')
    }
    statusDot[count].classList.add('current');
  }
  else if (sign == "prev") {
    if (count > 0) {count --;}
    else {count = images.length-1;}
    img.style.backgroundImage = "url(" + images[count] + ")";
    for (var k=0; k<statusDot.length; k++) {
      statusDot[k].classList.remove('current')
    }
    statusDot[count].classList.add('current');
  }
}

// images
var images = [
  'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
  'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider1.jpg',
  'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider3.jpg'
];