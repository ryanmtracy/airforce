// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = open ? 'none' : 'flex';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { mobileMenu.style.display = 'none'; });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  revealEls.forEach(el => obs.observe(el));
}

// Active nav
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
})();
