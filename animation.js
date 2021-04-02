$(document).ready(function () {
    $(".lineP").hover(
      function () { 
      $("#dna *").css("animation-play-state", "paused"); 
        $("div.ele").toggleClass('special2');
        $(this).parent().next().toggleClass('special');
       $(this).css("color", "red");},
    function () {
         $("#dna *").css("animation-play-state", "running");
      $("div.ele").toggleClass('special2');
      $(this).parent().next().toggleClass('special');
      $(this).css("color", "white");}
      )
    
      $(".ele.link").hover(
      function () {
       $("#dna *").css("animation-play-state", "paused"); $("div.ele").toggleClass('special2');
      $(this).toggleClass('special');},
    function () {
         $("#dna *").css("animation-play-state", "running");
      $("div.ele").toggleClass('special2');
      $(this).toggleClass('special');}
      )
  });