$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $(".clickable").click(function() {
    $(".snowman-showing").fadeToggle();
    $(".snowman-hidden").fadeToggle();
  });
});

//$ short for jQuery when calling (document)