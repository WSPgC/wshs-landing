$(document).on('scroll', function() {
  if ($(document).scrollTop() > 50) {
    $('#myNav-title').addClass('shrink');
  } else {
    $('#myNav-title').removeClass('shrink');
  }
});
