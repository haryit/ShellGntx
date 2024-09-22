  $(document).ready(function() {
  
  $(".preloader").fadeIn();

  
  $(window).on("load", function() {
    $(".preloader").fadeOut();
  });
});
