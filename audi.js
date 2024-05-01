document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelector('.card');
    var openModalBtn = document.querySelector('.card-header .card-title');
    var closeModalBtn = document.querySelector('.card-header .close');
    var tabLinks = document.querySelectorAll('.tabs .tablink');
    var tabContents = document.querySelectorAll('.tabcontent');
  
    openModalBtn.addEventListener('click', function() {
      modal.style.display = "block";
    });
  
    closeModalBtn.addEventListener('click', function() {
      modal.style.display = "none";
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  
    tabLinks.forEach(function(tabLink) {
      tabLink.addEventListener('click', function(event) {
        var tabName = this.getAttribute('onclick').match(/'(.*?)'/)[1];
        openTab(event, tabName);
      });
    });
  });
  
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Fülek elrejtése
    tabcontents = document.querySelectorAll('.tabcontent');
    tabcontents.forEach(function(tabcontent) {
      tabcontent.style.display = "none";
    });
  
    // Fül gombok inaktiválása
    tablinks = document.querySelectorAll('.tablink');
    tablinks.forEach(function(tablink) {
      tablink.classList.remove("active");
    });
  
    // Kiválasztott fül tartalmának megjelenítése
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  