$(document).on("scroll", function() {
  if ($(document).scrollTop() > 10) {
    $('#mynav-title').addClass("shrink");
  } else {
    $('#mynav-title').removeClass("shrink");
  }
});
