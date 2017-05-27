$(document).on('scroll', function() {
  if ($(document).scrollTop() > 10) {
    $('#myNav-titleShort').removeClass('shrink');
    $('#myNav-title').addClass('shrink');
  } else {
    $('#myNav-title').removeClass('shrink');
    $('#myNav-titleShort').addClass('shrink');
  }
});
