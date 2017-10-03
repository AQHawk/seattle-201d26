'use strict';

// array to store the objects
Goat.allGoats = [];

// make an object
// track how many times the picture was displayed
// track how many votes each picture received
function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Goat.allGoats.push(this);
}

// make new Goat instances
new Goat('Cruisin goat', 'img/cruisin-goat.jpg');
new Goat('Kissing goats', 'img/kissing-goat.jpg');
new Goat('Sassy goat', 'img/sassy-goat.jpg');
new Goat('Smiling goat', 'img/smiling-goat.jpg');
new Goat('Sweater goat', 'img/sweater-goat.jpg');
new Goat('Flower goat', 'img/flower-goat.jpg');
new Goat('Pushy goat', 'img/pushy-goat.jpg');
new Goat('Goat with it\'s tongue out', 'img/tongue.jpg');
new Goat('Underbite goat', 'img/underbite.jpg');
new Goat('Jumping goat', 'img/jumping.jpg');

// randomly display one of the pictures
function randomGoat() {
  // generate random indices
  var randomLeft = Math.floor(Math.random() * Goat.allGoats.length);
  var randomRight = Math.floor(Math.random() * Goat.allGoats.length);
}

// render two images on page load
randomGoat();
