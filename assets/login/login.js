 function hideUsernameErrorMessage() {
        document.getElementById("username-error-message").style.display = "none";
    }
  $(document).ready(function() {
    $('#lupakahmaniez').on('click', function() {
      $('#memelupa').hide();
      setTimeout(function() {
        window.location.href = '<?php echo $urlweb;?>/forgot';
      }, 3000);
    });
  });
  $('#2fa-form').on('click', 'button[type="button"]', function() {
  $('#2fa-form').hide();
});
