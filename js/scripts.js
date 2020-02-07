$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $(".clickable").click(function() {
    $(".snowman-showing").toggle();
    $(".snowman-hidden").toggle();
  });
});

//$ short for jQuery when calling (document)