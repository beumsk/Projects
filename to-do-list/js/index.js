// TODO: use local storage => https://www.taniarascia.com/how-to-use-local-storage-with-javascript/

// var buttonElt = document.querySelector("#button"),
//     inputElt = document.querySelector("#inp"),
//     bottomElt = document.querySelector("#bottom"),
//     count = -1,
//     // checks if there is local storage
//     itemsArr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArr));
// var data = JSON.parse(localStorage.getItem('items'));

// function addElt(text) {
//   bottomElt.insertAdjacentHTML("beforeEnd", "<p class='elt'>" + text + "<span class='del' title='Delete element'>x</span></p>");
// };

// // input handler; add to do elements
// buttonElt.addEventListener("click", function(e) {
//   e.preventDefault();
//   var inputVal = inputElt.value;
  
//   // local storage lines
//   itemsArr.push(inputVal);
//   localStorage.setItem('items', JSON.stringify(itemsArr));
  
//   addElt(inputVal);
//   inputElt.value = "";
//   count++;  
  
//   // mark element as done
//   document.querySelectorAll(".elt")[count].addEventListener("click", function() {
//     this.classList.toggle("crossed");
//   });
  
//   // hide and delete element
//   document.querySelectorAll(".del")[count].addEventListener("click", function() {
//     var currentElt = this.parentNode;
//     currentElt.style.display = "none";
//     currentElt.parentNode.removeChild(currentElt);
//     count--;
//   });
// });
  
// // add element
// data.forEach(item => {
//   addElt(item);
// });
  



var buttonElt = document.querySelector("#button"),
    inputElt = document.querySelector("#inp"),
    bottomElt = document.querySelector("#bottom"),
    count = -1;

// input handler; add to do elements
buttonElt.addEventListener("click", function(e) {
  e.preventDefault();
  var inputVal = inputElt.value;
  if (inputVal.length > 0) {
    bottomElt.insertAdjacentHTML("beforeEnd", "<p class='elt'>" + inputVal + "<span class='del' title='Delete element'>x</span></p>");
    inputElt.value = "";
    count++;

    // mark element as done
    document.querySelectorAll(".elt")[count].addEventListener("click", function() {
      this.classList.toggle("crossed");
    });

    // hide and delete element
    document.querySelectorAll(".del")[count].addEventListener("click", function() {
      var currentElt = this.parentNode;
      currentElt.style.display = "none";
      currentElt.parentNode.removeChild(currentElt);
      count--;
    });
  }
});