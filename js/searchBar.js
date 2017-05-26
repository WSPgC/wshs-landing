$(document).ready(function() {
  $('#mySearch').css('width', '0');
  $('#mySearch').hide();
});

$('#myTouchSearch').click(function() {
  $('#search').toggleClass('mySearchOpen');
  if ($('#search').hasClass('mySearchOpen')) {
    $('#search').show();
    $('#search').transition({width: 1000}, 1000)

  } else {
    $('#search').transition({x: 100}, 500)
    $('#search').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      function(e) {
        // code to execute after transition ends
      });
  }
});
