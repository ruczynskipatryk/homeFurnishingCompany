// script for navbar

hamburger = document.querySelector('.hamburger');

hamburger.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
};

// Script for slider
$('.option').click(function () {
  $('.option').removeClass('active');
  $(this).addClass('active');
});
