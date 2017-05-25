$.getScript('js/scrollspeedmonitor.js')

$(function() {
  $('#mynav-title').data('size', 'big');
});

var scrollSpeedMonitor = new ScrollSpeedMonitor(function (speedInPxPerMs, timeStamp, newDirection)
{
    console.log('Scroll speed: ' + speedInPxPerMs);
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 0) {
    if ($('#mynav-title').data('size') == 'big') {
      $('#mynav-title').data('size', 'small');
      $('#mynav-title').stop().animate({
        height: '100%',
        'padding-top' : 0,
        'padding-right' : 0,
        'padding-bottom' : 0,
        'padding-left' : 0,
        fontSize: '48px'
      }, 250);
      $('#mynav-title').removeClass('z-depth-3');
    }
  } else {
    if ($('#mynav-title').data('size') == 'small') {
      $('#mynav-title').data('size', 'big');
      $('#mynav-title').stop().animate({
        height: '175%',
        'padding-top' : 25,
        'padding-right' : 25,
        'padding-bottom' : 25,
        'padding-left' : 25,
        fontSize: '64px'
      }, 50);
      $('#mynav-title').addClass('z-depth-3');
    }
  }
});
