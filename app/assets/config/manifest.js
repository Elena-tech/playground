//= link_tree ../images
//= link_directory ../stylesheets .css
// vanilla JS
var grid = document.querySelector('.grid');
// initialize with element
var pckry = new Packery( grid, {
  // options...
  itemSelector: '.grid-item'
});

// initialize with selector string
var pckry = new Packery('.grid', {
  // options...
});
