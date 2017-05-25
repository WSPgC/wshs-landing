$(function() {
  $('#mynav-title').data('size', 'big');
});


$(window).scroll(function() {
  if ($(document).scrollTop() > 0) {
    if ($('#mynav-title').data('size') == 'big') {
      $('#mynav-title').data('size', 'small');
      $('#mynav-title').transition({
        height: '100%',
        'padding-top': 0,
        'padding-right': 0,
        'padding-bottom': 0,
        'padding-left': 0,
        fontSize: '48px'
      });
      $('#mynav-title').removeClass('z-depth-3', 400);
    }
  } else {
    if ($('#mynav-title').data('size') == 'small') {
      $('#mynav-title').data('size', 'big');
      $('#mynav-title').transition({
        height: '175%',
        'padding-top': 25,
        'padding-right': 25,
        'padding-bottom': 25,
        'padding-left': 25,
        fontSize: '64px'
      });
      // $('#mynav-title').stop().animate({
      //     height: '175%',
      //     'padding-top': 25,
      //     'padding-right': 25,
      //     'padding-bottom': 25,
      //     'padding-left': 25,
      //     fontSize: '64px'
      // }, 200);
      $('#mynav-title').addClass('z-depth-3', 400);
    }
  }
});
