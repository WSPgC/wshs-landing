$(document).ready(function() {
  $('#search').blur(function() {
    $('#mySearch').removeClass('visible');
  });
});

$('#myTouchSearch').click(function() {
  $('#mySearch').addClass('visible');
  $('#search').focus();
});
