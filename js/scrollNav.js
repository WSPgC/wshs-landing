$(document).on("scroll", function() {
  if ($(document).scrollTop() > 10) {
    $('#myNav-title').addClass("shrink");
  } else {
    $('#myNav-title').removeClass("shrink");
  }
});
