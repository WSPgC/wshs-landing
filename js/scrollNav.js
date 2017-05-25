$(document).scroll(function() {
  if ($(this).scrollTop() > 0) { //Adjust 150
    $('#mynav-title').addClass('shrinked');
  } else {
    $('#mynav-title').removeClass('shrinked');
  }
});
