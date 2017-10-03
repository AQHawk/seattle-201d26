'use strict';

// array to store the objects
Goat.allGoats = [];

// keep track of previously displayed images
Goat.lastDisplayed = [];

// keep track of total clicks
Goat.totalClicks = 0;

// goat section from our HTML
Goat.section = document.getElementById('goat-section');

// have a place to add the list
Goat.resultsList = document.getElementById('results');

// make an object
// track how many times the picture was displayed
// track how many votes each picture received
function Goat(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.timesDisplayed = 0;
  this.votes = 0;
  Goat.allGoats.push(this);
}

// make new Goat instances
new Goat('Cruisin goat', 'img/cruisin-goat.jpg', 'cruisin');
new Goat('Kissing goats', 'img/kissing-goat.jpg', 'kissing');
new Goat('Sassy goat', 'img/sassy-goat.jpg', 'sassy');
new Goat('Smiling goat', 'img/smiling-goat.jpg', 'smiling');
new Goat('Sweater goat', 'img/sweater-goat.jpg', 'sweater');
new Goat('Flower goat', 'img/flower-goat.jpg', 'flower');
new Goat('Pushy goat', 'img/pushy-goat.jpg', 'pushy');
new Goat('Goat with it\'s tongue out', 'img/tongue.jpg', 'tongue');
new Goat('Underbite goat', 'img/underbite.jpg', 'underbite');
new Goat('Jumping goat', 'img/jumping.jpg', 'jumping');

// refer to imgs from HTML
var leftEl = document.getElementById('left');
var rightEl = document.getElementById('right');

// randomly display one of the pictures
function randomGoat() {
  // generate random indices
  var randomLeft = Math.floor(Math.random() * Goat.allGoats.length);
  var randomRight = Math.floor(Math.random() * Goat.allGoats.length);

  // check left image and make sure right image is unique
  // check the last displayed for duplicates
  while(Goat.lastDisplayed.includes(randomRight) || Goat.lastDisplayed.includes(randomLeft) || randomLeft === randomRight) {
    // console.log('duplicate caught and corrected!');
    randomRight = Math.floor(Math.random() * Goat.allGoats.length);
    randomLeft = Math.floor(Math.random() * Goat.allGoats.length);
  }

  // update src for left image
  leftEl.src = Goat.allGoats[randomLeft].filepath;
  leftEl.alt = Goat.allGoats[randomLeft].altText;

  // update src for right image
  rightEl.src = Goat.allGoats[randomRight].filepath;
  rightEl.alt = Goat.allGoats[randomRight].altText;

  // increment the number of times the left and right were displayed
  Goat.allGoats[randomRight].timesDisplayed += 1;
  Goat.allGoats[randomLeft].timesDisplayed += 1;

  // keep track of these two images
  // method 1:
  // Goat.lastDisplayed = [];
  // Goat.lastDisplayed.push(randomLeft, randomRight);

  // method 2:
  // Goat.lastDisplayed = [];
  // Goat.lastDisplayed.unshift(randomLeft, randomRight);

  // method 3:
  // reassigns the values of each index every time, so no need to reset to an empty array in this case
  Goat.lastDisplayed[0] = randomLeft;
  Goat.lastDisplayed[1] = randomRight;
}

// callback function to deal with the click event
function handleClick(e) {
  if(e.target.id === 'goat-section') {
    return alert('Click on a picture, dummy!');
  }

  // track number of total clicks
  Goat.totalClicks += 1;

  // count votes for each image
  // console.log('e.target', e.target.alt);
  for(var i = 0; i < Goat.allGoats.length; i++) {
    if(event.target.alt === Goat.allGoats[i].altText) {
      Goat.allGoats[i].votes += 1;
    }
  }

  // what do we do when we hit ten clicks
  if(Goat.totalClicks > 9) {
    Goat.section.removeEventListener('click', handleClick);
    // display the results
    showResults();
  }

  // call randomGoat function again
  randomGoat();
}

// show the results on the page as a list
function showResults() {
  for(var i = 0; i < Goat.allGoats.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Goat.allGoats[i].name + ' has ' + Goat.allGoats[i].votes + ' votes in ' + Goat.allGoats[i].timesDisplayed + ' times shown.';
    Goat.resultsList.appendChild(liEl);
  }
}

// add event listener
Goat.section.addEventListener('click', handleClick);

// render two images on page load
randomGoat();
