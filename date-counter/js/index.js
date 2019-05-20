// be smarter with selectors and events
// fix days in month --> can't have 31 feb

var day1 = document.querySelector("#day1");
var month1 = document.querySelector("#month1");
var year1 = document.querySelector("#year1");

var result1 = document.querySelector("#result1");

day1.addEventListener("input", dateProcess1);
month1.addEventListener("input", dateProcess1);
year1.addEventListener("input", dateProcess1);

function dateProcess1() {
  var comb = month1.value + "/" + day1.value + "/" + year1.value;
  var d = new Date(comb);
  var now = new Date();
  result1.innerHTML = dateDiff(d, now);
}

dateProcess1();



var day2 = document.querySelector("#day2");

var result2 = document.querySelector("#result2");

day2.addEventListener("input", dateProcess2);

function dateProcess2() {
  var days = parseInt(day2.value, 10);
  var now = new Date();
  var newDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()+days);
  if (days > 0) result2.innerHTML = convertDate(newDate);
}

dateProcess2();



var day3 = document.querySelector("#day3");
var month3 = document.querySelector("#month3");
var year3 = document.querySelector("#year3");
var day4 = document.querySelector("#day4");
var month4 = document.querySelector("#month4");
var year4 = document.querySelector("#year4");

var result3 = document.querySelector("#result3");
var result3 = document.querySelector("#result3");

day3.addEventListener("input", dateProcess3);
month3.addEventListener("input", dateProcess3);
year3.addEventListener("input", dateProcess3);
day4.addEventListener("input", dateProcess3);
month4.addEventListener("input", dateProcess3);
year4.addEventListener("input", dateProcess3);

function dateProcess3() {
  var comb1 = month3.value + "/" + day3.value + "/" + year3.value;
  var comb2 = month4.value + "/" + day4.value + "/" + year4.value;
  var d1 = new Date(comb1);
  var d2 = new Date(comb2);
  result3.innerHTML = dateDiff(d1, d2);
}

dateProcess3();



function dateDiff(d1, d2) {
  return Math.floor( (d2 - d1) / (1000 * 60 * 60 * 24) );
}

function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('.'); // dd.mm.yyyy
}