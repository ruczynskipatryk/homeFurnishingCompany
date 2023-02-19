// Script for navbar

hamburger = document.querySelector('.hamburger');

hamburger.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
};

// Script for h3
const typed = new Typed('.h3input', {
  strings: ['Drzwi', 'Okna', 'Rolety', 'Parapety'],
  typeSpeed: 150,
  backSpeed: 120,
  loop: true,
});

// Script for slider
$('.option').click(function () {
  $('.option').removeClass('active');
  $(this).addClass('active');
});
