'use strict';

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thor\'s Day', 'Friday', 'Saturday', 'Sunday'];

// Favorite Seattle beaches

 var alki = {
  count: [67, 34, 346, 35, 56, 93,88],
  render: function(){
    for (var i = 0; i < this.count.length; i++) {
      // create a new HTML element
      var liEl = document.createElement('li');
      // give that element content
      liEl.textContent = days[i] + ': ' + this.count[i];
      // append that element to the right spot in the DOM
      // parentElement.appendChild(childElement);
      var alkiUl = document.getElementById('alki');
      alkiUl.appendChild(liEl);
    }
  }
 };

var goldenGarden = {
  count: [55, 77, 876, 32, 67, 99, 12],
  render: function(){
    for (var i = 0; i < this.count.length; i++) {
      // create a new HTML element
      var liEl = document.createElement('li');
      // give that element content
      liEl.textContent = days[i] + ': ' + this.count[i];
      // append that element to the right spot in the DOM
      // parentElement.appendChild(childElement);
      var ggUl = document.getElementById('gg');
      ggUl.appendChild(liEl);
    }
  }
};

var edmondsBeach = {
  count: [53, 74, 223, 67, 765, 89, 34],
  render: function(){
    for (var i = 0; i < this.count.length; i++) {
      // create a new HTML element
      var liEl = document.createElement('li');
      // give that element content
      liEl.textContent = days[i] + ': ' + this.count[i];
      // append that element to the right spot in the DOM
      // parentElement.appendChild(childElement);
      var edmondsUl = document.getElementById('edmonds');
      edmondsUl.appendChild(liEl);
    }
  }
};

alki.render();
edmondsBeach.render();
goldenGarden.render();
