$(document).ready(function() {
  $('#mySearch').addClass('mySearchHidden');
  // $('#search').hide();
});

$('#myTouchSearch').click(function() {
  $('#mySearch').removeClass('mySearchHidden');
  $('#mySearch').addClass('mySearchVisible');
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
