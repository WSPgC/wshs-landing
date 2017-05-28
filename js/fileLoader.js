$.get("nav.html", function(data) {
  $("#nav-placeholder").replaceWith(data);
});

$.get("files.html", function(data) {
  $("#fileLoader").replaceWith(data);
});
