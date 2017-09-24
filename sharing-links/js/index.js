// initial link list
var linkList = [
    {
        title: "Github",
        url: "https://github.com",
        author: "Octocat"
    },
    {
        title: "Medium",
        url: "https://medium.com",
        author: "Not a medium"
    },
    {
        title: "Wikipedia",
        url: "https://Wikipedia.org",
        author: "Wikimedian"
    }
];

// creates link element
function createLinkElt(link) {
    var titleElt = document.createElement("a");
    titleElt.href = link.url;
    titleElt.style.color = "#428bca";
    titleElt.style.textDecoration = "none";
    titleElt.style.marginRight = "5px";
    titleElt.appendChild(document.createTextNode(link.title));

    var urlElt = document.createElement("span");
    urlElt.appendChild(document.createTextNode(link.url));

    // title line
    var titleLineElt = document.createElement("h4");
    titleLineElt.style.margin = "0px";
    titleLineElt.appendChild(titleElt);
  
    // url line
    var urlLineElt = document.createElement("p");
    urlLineElt.style.margin = "10px 0";
    urlLineElt.style.color = "#333";
    urlLineElt.style.fontSize = "20px";
    urlLineElt.appendChild(urlElt);

    // author line
    var detailsLineElt = document.createElement("span");
    detailsLineElt.appendChild(document.createTextNode("Added by " + link.author));

    var divLinkElt = document.createElement("div");
    divLinkElt.classList.add("link");
    divLinkElt.appendChild(titleLineElt);
    divLinkElt.appendChild(urlLineElt);
    divLinkElt.appendChild(detailsLineElt);

    return divLinkElt;
}

var contentElt = document.getElementById("content");
// adds links
linkList.forEach(function (link) {
    var linkElt = createLinkElt(link);
    contentElt.appendChild(linkElt);
});

// creates input element
function createInputElt(placeholder, size) {
    var inputElt = document.createElement("input");
    inputElt.type = "text";
    inputElt.setAttribute("placeholder", placeholder);
    inputElt.setAttribute("size", size);
    inputElt.setAttribute("required", "true");
    return inputElt;
}

var addLinkElt = document.getElementById("addLink");
// handles a new link creation
addLinkElt.addEventListener("click", function () {
    var authorElt = createInputElt("Enter your name", 15);
    var titleElt = createInputElt("Enter link title", 30);
    var urlElt = createInputElt("Enter link URL", 30);

    var addElt = document.createElement("input");
    addElt.type = "submit";
    addElt.value = "Add";

    var formAddElt = document.createElement("form");
    formAddElt.appendChild(authorElt);
    formAddElt.appendChild(titleElt);
    formAddElt.appendChild(urlElt);
    formAddElt.appendChild(addElt);

    var p = document.querySelector("p");
    // replace form
    p.replaceChild(formAddElt, addLinkElt);

    // add new link
    formAddElt.addEventListener("submit", function (e) {
        e.preventDefault(); // no submit form
        
        var url = urlElt.value;
        if ((url.indexOf("http://") !== 0) && (url.indexOf("https://") !== 0)) {
            url = "http://" + url;
        }

        // new link creation
        var link = {
            title: titleElt.value,
            url: url,
            author: authorElt.value
        };

        var linkElt = createLinkElt(link);
        // New link first
        contentElt.insertBefore(linkElt, contentElt.firstChild);

        // replace form
        p.replaceChild(addLinkElt, formAddElt);

        // info message
        var infoElt = document.createElement("div");
        infoElt.classList.add("info");
        infoElt.textContent = "The link \"" + link.title + "\" has been added.";
        p.insertBefore(infoElt, addLinkElt);
        // Suppresion du message après 2 secondes
        setTimeout(function () {
            p.removeChild(infoElt);
        }, 2000);
    });
});