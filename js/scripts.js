$(document).ready(function() {
//alert("jQuery loaded..."); //testing for jQuery setup
$("button#gocats").click(function() {
  $("ul#cats").prepend("<li>Meow, meow!</li>");
  $("ul#dogs").prepend("<li><strong>BARK!! BARK!!!</li>");
  $(".cats").css("opacity", ".25");
  $(".dogs").css("opacity", ".99");
});
$("button#godogs").click(function() {
  $("ul#dogs").prepend("<li>Bark, bark!</li>");
  $("ul#cats").prepend("<li><strong>MEOW!! MEOW!!!</li>");
  $(".dogs").css("opacity", ".25");
  $(".cats").css("opacity", ".99");
});
});
