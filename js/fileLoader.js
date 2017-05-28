// $(function(){
//   $('#fileLoader').load('files.html');
//   $('#nav-placeholder').load('nav.html');
// });


$.get("nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

$.get("files.html", function(data){
    $("#fileLoader").replaceWith(data);
});
