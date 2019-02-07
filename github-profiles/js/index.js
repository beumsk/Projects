// ajaxGet func
function ajaxGet(url, callback) { 
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
      callback(req.responseText);
    }
    else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function () {
    console.error("Network error with URL " + url);
  });
  req.send(null);
}

// Get user value on click
document.querySelector("form").addEventListener("submit", function (e) { 
  user = document.querySelector("#user").value;
  e.preventDefault();
  // Request API
  ajaxGet("https://api.github.com/users/" + user, function (answer) { 
    var profile = JSON.parse(answer);
    
    // Avatar
    img = document.querySelector("img");
    img.src = profile.avatar_url;
    
    // Pseudo
    h1 = document.createElement("h1");
    h1.innerHTML = "<a href='" + profile.html_url + "' target='_blank'>" + profile.name + "</a>";
    
    // Location
    h3 = document.createElement("h3");
    h3.innerHTML = profile.location;
    
    // Website
    p = document.createElement("p");
    if (profile.blog !== null) {
      p.innerHTML = "<a href='" + profile.blog + "' target='_blank'>" + profile.blog + "</a>";
    }
    
    //
    var profile = document.querySelector("#profile");
    profile.innerHTML = ""; // empty previous search (and remove github logo)
    profile.appendChild(img);
    profile.appendChild(h1);
    profile.appendChild(h3);
    profile.appendChild(p);
  });
});