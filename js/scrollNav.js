$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('p').addClass('shrink');
    $('p').removeClass('z-depth-3');
  } else {
    $('p').removeClass('shrink');
    $('p').removeClass('z-depth-3');
  }
});
