function scrollTab(direction) {
    // Get the tab panel element
    var tabPanel = document.querySelector('.apapunitusayang');
    
    // Get the current scroll position
    var currentScroll = tabPanel.scrollLeft;
    
    // Calculate the new scroll position
    var newScroll;
    if (direction === 'lefthary') {
      newScroll = currentScroll - 100; // scroll 100px to the left
    } else if (direction === 'righthary') {
      newScroll = currentScroll + 100; // scroll 100px to the right
    }
    
    // Animate the scroll
    var startTime = performance.now();
    var scrollDuration = 200; // adjust the duration to your liking
    
    function animateScroll() {
      var currentTime = performance.now();
      var progress = (currentTime - startTime) / scrollDuration;
      
      if (progress < 1) {
        tabPanel.scrollLeft = currentScroll + (newScroll - currentScroll) * progress;
        requestAnimationFrame(animateScroll);
      } else {
        tabPanel.scrollLeft = newScroll;
      }
    }
    
    animateScroll();
  }
function showTab(tabId) {
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabPanels.forEach((panel) => {
    panel.style.display = 'none';
  });
  const selectedTab = document.getElementById('tab-' + tabId);
  selectedTab.style.display = 'block';
}
