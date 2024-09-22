  const dialogPanel = document.getElementById("headlessui-dialog-panel-:r4b:");
  document.getElementById('search-button').addEventListener('click', function() {
    document.getElementById('popup').hidden = false;
  });

  document.addEventListener('mousedown', function(event) {
    if (event.target.id !== 'popup' && !event.target.closest('#popup') && !event.target.closest('#search-button')) {
      document.getElementById('popup').hidden = true;
    }
  });

  document.addEventListener('focusout', function(event) {
    if (event.target.id !== 'popup' && !event.relatedTarget || !event.relatedTarget.closest('#popup')) {
      document.getElementById('popup').hidden = true;
    }
  });