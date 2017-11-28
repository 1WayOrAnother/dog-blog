$(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").css("background-color", "white");
    $("body").css("color", "black");
});
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").css("background-color", "black");
    $("body").css("color", "white");
  });
});
