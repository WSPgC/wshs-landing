$(document).ready(function() {
  $('.scrollspy').scrollSpy({
    scrollOffset: 64
  });
});

$(document).ready(function() {
  $('select').material_select();
});

$(".button-collapse").sideNav();

$(document).ready(function() {
  $('.tooltipped').tooltip({
    delay: 50
  });
});

var clipboard = new Clipboard('button');
clipboard.on('success', function(e) {
    e.clearSelection();
    showTooltip(e.trigger, 'Copied!');
});
