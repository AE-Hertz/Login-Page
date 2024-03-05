document.addEventListener("DOMContentLoaded", function() {
  function showContent() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';

    content.style.opacity = '0';
    content.style.display = 'flex';
    content.style.transition = 'opacity 0.5s ease';

    setTimeout(function() {
      loader.style.display = 'none'; 
    }, 500); 
    setTimeout(function() {
      content.style.opacity = '1'; 
    }, 50); 
  }
  setTimeout(showContent, 3000);
});
