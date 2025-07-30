// Hamburger menu logic for global navigation

document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.nav-hamburger');
  var navOverlay = document.getElementById('navOverlay');
  var navOverlayBg = document.getElementById('navOverlayBg');
  var navLinksHTML = `
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#endorsements">Endorsements</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#samples">Work Samples</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  `;

  function openNav() {
    if (navOverlay && !navOverlay.innerHTML) {
      navOverlay.innerHTML = navLinksHTML;
      var navLinks = navOverlay.querySelector('.nav-links');
      navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', closeNav);
      });
    }
    if (navOverlay) navOverlay.classList.add('open');
    if (navOverlayBg) navOverlayBg.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    if (navOverlay) navOverlay.classList.remove('open');
    if (navOverlayBg) navOverlayBg.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openNav);
  if (navOverlayBg) navOverlayBg.addEventListener('click', closeNav);

  // Clear overlay and close menu when resizing to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 700) {
      if (navOverlay) {
        navOverlay.classList.remove('open');
        navOverlay.innerHTML = '';
      }
      if (navOverlayBg) {
        navOverlayBg.classList.remove('open');
      }
      document.body.style.overflow = '';
    }
  });
});
