$(document).ready(function() {
  $('#search').blur(function() {
    $('#mySearch').removeClass('visible');
  });
});

$('#myTouchSearch').click(function() {
  $('#mySearch').addClass('visible');
  $('#search').focus();
});









// $('#search').animate({width: 100+'%'}, 500);
// if ($('#mySearch').hasClass('mySearchOpen')) {
//   $('#mySearch').show();
//   $('#mySearch').transition({x: '+=100%'}, 500, 'ease');
//   $('#search').focus();
// } else {
//   $('#mySearch').transition({x: '+= -100%'}, 500, 'ease');
//   $('#mySearch').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
//     function(e) {
//       $('#mySearch').hide();
//     });
// }
