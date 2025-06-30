document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
});