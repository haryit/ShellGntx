document.addEventListener('click', function(event) {
  var rinuksayang = document.getElementById('exampleModal');
  var modal = document.getElementById('headlessui-dialog-panel-:r7:');
  if (!modal.contains(event.target)) {
    // Clicked outside the modal, close it
    rinuksayang.style.display = 'none';
  }
});