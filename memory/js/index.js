 
// host images on cloudinary !
// other themes to add (HP, )
// bigger memory?

var pokemon = [
  'http://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
  'http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png',
  'http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png',
  'http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
  'http://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png',
  'http://cdn.bulbagarden.net/upload/thumb/b/b1/151Mew.png/250px-151Mew.png',
  'http://cdn.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/250px-144Articuno.png',
  'http://cdn.bulbagarden.net/upload/thumb/e/e3/145Zapdos.png/250px-145Zapdos.png',
  'http://cdn.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/250px-146Moltres.png',
  'http://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png',
  'http://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
  'http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png',
  'http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png',
  'http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
  'http://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png',
  'http://cdn.bulbagarden.net/upload/thumb/b/b1/151Mew.png/250px-151Mew.png',
  'http://cdn.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/250px-144Articuno.png',
  'http://cdn.bulbagarden.net/upload/thumb/e/e3/145Zapdos.png/250px-145Zapdos.png',
  'http://cdn.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/250px-146Moltres.png',
  'http://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png'
];
var starwars = [
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/anakinskywalkerava.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/luke_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/obi_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/Hansoloava.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/vignettes_v6/chewbacca_vignette.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/yoda_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/sidious_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/vador_avv6.JPG',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/padme_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/leia_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/anakinskywalkerava.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/luke_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/obi_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/Hansoloava.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/vignettes_v6/chewbacca_vignette.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/yoda_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/sidious_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/vador_avv6.JPG',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/padme_avv6.jpg',
  'http://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/leia_avv6.jpg'
];
var lotr = [
  'http://lotrproject.com/char/images/150/gandalfhobbit.jpg',
  'http://www.thelandofshadow.com/wp-content/uploads/2014/04/EyeSauron.jpg',
  'http://www.catholiclane.com/wp-content/uploads/Aragorn-Lord-of-the-Rings-150x150.jpg',
  'http://www.monologuedb.com/wp-content/uploads/2011/09/Orlando-Bloom-as-Legolas-in-The-Lord-of-the-Rings-The-Return-of-the-King-150x150.jpg',
  'http://www.fantacalciopro.com/images/avatar/Gimli.jpg',
  'http://www.tolkiendrim.com/wp-content/uploads/2012/09/Frodon1-150x150.jpg',
  'https://i.imgflip.com/2/7dufj.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/e7/27/31/e72731c749905e03c8a5dafc7adf59c6.jpg',
  'http://www.tolkiendrim.com/wp-content/uploads/2012/09/Saroumane1-150x150.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/81/76/48/817648596b0448914fdc9ed645231310.jpg',
  'http://lotrproject.com/char/images/150/gandalfhobbit.jpg',
  'http://www.thelandofshadow.com/wp-content/uploads/2014/04/EyeSauron.jpg',
  'http://www.catholiclane.com/wp-content/uploads/Aragorn-Lord-of-the-Rings-150x150.jpg',
  'http://www.monologuedb.com/wp-content/uploads/2011/09/Orlando-Bloom-as-Legolas-in-The-Lord-of-the-Rings-The-Return-of-the-King-150x150.jpg',
  'http://www.fantacalciopro.com/images/avatar/Gimli.jpg',
  'http://www.tolkiendrim.com/wp-content/uploads/2012/09/Frodon1-150x150.jpg',
  'https://i.imgflip.com/2/7dufj.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/e7/27/31/e72731c749905e03c8a5dafc7adf59c6.jpg',
  'http://www.tolkiendrim.com/wp-content/uploads/2012/09/Saroumane1-150x150.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/81/76/48/817648596b0448914fdc9ed645231310.jpg'
];
var disney = [
  'http://www.popstickers.fr/4044-home_default/mickey.jpg', 
  'http://rs112.pbsrc.com/albums/n185/modest_me9/mowgli.jpg~c200',
  'https://qph.ec.quoracdn.net/main-thumb-t-29038-200-80YknGmQ2R9Hk9bEy43s7dHXNpvJtV8s.jpeg',
  'http://img.kbhgames.com/2016/07/Tarzan-Return-to-the-Jungle.jpg',
  'http://rs951.pbsrc.com/albums/ad356/MetallicAerin2/TLKpart3001_0001.jpg~c200',
  'https://s-media-cache-ak0.pinimg.com/736x/c4/df/97/c4df974ed6a9144b38e31360912898eb.jpg',
  'http://ekladata.com/aNG7q920ZA59GLvdh0SjQhXrWMs@200x200.jpg',
  'http://ekladata.com/-jQr-XuNktvvO6f4lo3CMMVK7ew@200x200.png',
  'http://neverpedia.com/wiki/images/thumb/2/21/DisneyPeterPan.jpg/200px-DisneyPeterPan.jpg',
  'https://www.ecranlarge.com/media/cache/200x200/uploads/image/000/938/pinocchio-photo-pinocchio-938230.jpg',
  'http://www.popstickers.fr/4044-home_default/mickey.jpg', 
  'http://rs112.pbsrc.com/albums/n185/modest_me9/mowgli.jpg~c200',
  'https://qph.ec.quoracdn.net/main-thumb-t-29038-200-80YknGmQ2R9Hk9bEy43s7dHXNpvJtV8s.jpeg',
  'http://img.kbhgames.com/2016/07/Tarzan-Return-to-the-Jungle.jpg',
  'http://rs951.pbsrc.com/albums/ad356/MetallicAerin2/TLKpart3001_0001.jpg~c200',
  'https://s-media-cache-ak0.pinimg.com/736x/c4/df/97/c4df974ed6a9144b38e31360912898eb.jpg',
  'http://ekladata.com/aNG7q920ZA59GLvdh0SjQhXrWMs@200x200.jpg',
  'http://ekladata.com/-jQr-XuNktvvO6f4lo3CMMVK7ew@200x200.png',
  'http://neverpedia.com/wiki/images/thumb/2/21/DisneyPeterPan.jpg/200px-DisneyPeterPan.jpg',
  'https://www.ecranlarge.com/media/cache/200x200/uploads/image/000/938/pinocchio-photo-pinocchio-938230.jpg'
];
var pixar = [
  'https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/0GCwOihe9dZPvHZrY.jpg',
  'https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/0pVhAbT15R95f4YJ5.jpg',
  'https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/0IEMOGh02Mk2gujgz.jpg',
  'https://cdn3.whatculture.com/images/2011/06/Remy.jpg',
  'https://cdn3.whatculture.com/images/2011/06/Mike.jpg',
  'https://7f9c61237bd6e732e57e-5fa18836a2ae6b5e7c49abcc89b20237.ssl.cf1.rackcdn.com/12300841_top-ten-non-human-pixar-characters_t4a51086e.jpg',
  'https://cdn3.whatculture.com/images/2011/06/Nemo.jpg',
  'http://img.phone.baidu.com/public/uploads/store_0/b/8/1/b81e0d3a4fd00ffe118313e8f981aef7_200x200.png',
  'http://trus.imageg.net/graphics/corp/2934995_Image_1.jpg',
  'https://cdn3.whatculture.com/images/2011/06/Mr-Incredible.jpg',
  'https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/0GCwOihe9dZPvHZrY.jpg',
  'https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/0pVhAbT15R95f4YJ5.jpg',
  'https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/0IEMOGh02Mk2gujgz.jpg',
  'https://cdn3.whatculture.com/images/2011/06/Remy.jpg',
  'https://cdn3.whatculture.com/images/2011/06/Mike.jpg',
  'https://7f9c61237bd6e732e57e-5fa18836a2ae6b5e7c49abcc89b20237.ssl.cf1.rackcdn.com/12300841_top-ten-non-human-pixar-characters_t4a51086e.jpg',
  'https://cdn3.whatculture.com/images/2011/06/Nemo.jpg',
  'http://img.phone.baidu.com/public/uploads/store_0/b/8/1/b81e0d3a4fd00ffe118313e8f981aef7_200x200.png',
  'http://trus.imageg.net/graphics/corp/2934995_Image_1.jpg',
  'https://cdn3.whatculture.com/images/2011/06/Mr-Incredible.jpg'
];
var harryPotter = [];

var images = [],
    theme = "",
    count = 19,
    rand = 0,
    tempElt1 = "",
    tempElt2 = "",
    click = -1,
    score = 0,
    win = 0,
    time = 0;

var preElt = document.querySelector("#pre"),
    themesElts = document.querySelectorAll(".themes"),
    boxElts = document.querySelectorAll(".box"),
    timeElt = document.querySelector("#time"),
    scoreElt = document.querySelector("#score"),
    postElt = document.querySelector("#post"),
    finalElt = document.querySelector("#final");

// initiate the game with chosen theme
for (let j=0; j<themesElts.length; j++) {
  themesElts[j].addEventListener("click", function () {
    theme = this.id;
    // insert theme in images array
    switch (theme) {
      case "pokemon":
        for (let i=0; i<20; i++) {images.push(pokemon[i]);}
        break;
      case "starwars":
        for (let i=0; i<20; i++) {images.push(starwars[i]);}
        break;
      case "lotr":
        for (let i=0; i<20; i++) {images.push(lotr[i]);}
        break;
      case "disney":
        for (let i=0; i<20; i++) {images.push(disney[i]);}
        break;
      case "pixar":
        for (let i=0; i<20; i++) {images.push(pixar[i]);}
        break;
    }

    // insert images in memory game
    for (let i=0; i<20; i++) {
      rand = Math.floor(Math.random() * count);
      boxElts[i].innerHTML = "<img src='" + images[rand] + "' alt='image' class='hidden'>";
      images.splice(rand, 1);
      count--;
    }
    preElt.style.display = "none";
  });
}


// Handle the play
for (let j=0; j<document.querySelectorAll(".play").length; j++) {
  document.querySelectorAll(".play")[j].addEventListener("click", function () {
    this.firstChild.classList.remove("hidden");

    // first of two click
    if (click < 1) {
      tempElt1 = this;
      // timer
      if (click === -1) {
        timer = setInterval(function() {
          time++;
          timeElt.innerHTML = time + " sec";
        }, 1000);
      }
      click = 1;
    }

    // second click
    else if (this !== tempElt1) {
      tempElt2 = this;

      // different images
      if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
        setTimeout( function() {
          tempElt1.firstChild.classList.add("hidden");
          tempElt2.firstChild.classList.add("hidden");
        }, 400);
        if (score > 0){
          score -= 2;
        }
        scoreElt.innerHTML = "score: " + score;
      }

      // same images
      else {
        score += 10;
        win += 2;
        tempElt1.firstChild.classList.add("outlined");
        tempElt2.firstChild.classList.add("outlined");
        tempElt1.classList.remove("play");
        tempElt2.classList.remove("play");
        scoreElt.innerHTML = "score: " + score;

        // game won
        if (win === 20) {
          clearTimeout(timer);
          finalElt.innerHTML = "You won " + score + " points <br> in " + time + " seconds";
          postElt.style.display = "flex";
        }
      }
      click = 0;
    }
  });
}