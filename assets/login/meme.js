
  $(document).ready(function() {
    $('a[href="/forgot"]').on('click', function(event) {
      event.preventDefault(); // prevent the default link behavior
      $('#memelupa').show(); // show the modal
    });
  });
