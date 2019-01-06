
var drumPads = document.querySelectorAll(".drum-pad");

for (let i=0; i<drumPads.length; i++) {
  drumPads[i].addEventListener("mouseup", startAudio);
}

document.addEventListener("keyup", startAudio);

function startAudio(e) {
  let idd = e.target.id;
  let keyy = e.keyCode;
  
  if (idd == "") {
    // console.log("keyyyy");
    switchKey(keyy, e);
  }
  
  if (keyy == undefined) {
    // console.log("idddd");
    switchId(idd, e);
    keyActivation(e);
  }
  
}

function switchId(check, e) {
  switch (check) {
    case "audioA":
      let audioA = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
      audioA.play();
      break;
    case "audioZ":
      let audioZ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audioZ.play();
      break;
    case "audioE":
      let audioE = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
      audioE.play();
      break;
    case "audioQ":
      let audioQ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
      audioQ.play();
      break;
    case "audioS":
      let audioS = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
      audioS.play();
      break;
    case "audioD":
      let audioD = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
      audioD.play();
      break;
    case "audioW":
      let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
      audioW.play();
      break;
    case "audioX":
      let audioX = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
      audioX.play();
      break;
    case "audioC":
      let audioC = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
      audioC.play();
      break;
      
  }
}

function switchKey(check) {
  switch (check) {
    case 65:
      let audioA = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
      audioA.play();
      keyActivation("", "audioA");
      break;
    case 90:
      let audioZ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
      audioZ.play();
      keyActivation("", "audioZ");
      break;
    case 69:
      let audioE = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
      audioE.play();
      keyActivation("", "audioE");
      break;
    case 81:
      let audioQ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
      audioQ.play();
      keyActivation("", "audioQ");
      break;
    case 83:
      let audioS = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
      audioS.play();
      keyActivation("", "audioS");
      break;
    case 68:
      let audioD = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
      audioD.play();
      keyActivation("", "audioD");
      break;
    case 87:
      let audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
      audioW.play();
      keyActivation("", "audioW");
      break;
    case 88:
      let audioX = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
      audioX.play();
      keyActivation("", "audioX");
      break;
    case 67:
      let audioC = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
      audioC.play();
      keyActivation("", "audioC");
      break;
  }
}

function keyActivation(e, elt) {
  var displayy = document.getElementById("display");
  // console.log(e.target.childNodes[1].id);
  if (e) {
    e.target.classList.add("active");
    setTimeout(function() {
      e.target.classList.remove("active");
    }, 100);
    displayy.innerHTML = e.target.childNodes[1].id;
  }
  if (elt) {
    let curr = document.getElementById(elt);
    curr.classList.add("active");
    setTimeout(function() {
      curr.classList.remove("active");
    }, 100);
    displayy.innerHTML = curr.childNodes[1].id;
  }
}

// var audioA = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
// var audioZ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
// var audioE = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
// var audioQ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
// var audioS = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
// var audioD = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
// var audioW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
// var audioX = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
// var audioC = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");