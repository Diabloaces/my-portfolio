// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Parallax hero columns
const heroCols = document.querySelectorAll('.hero-frame-col');
const heroSection = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  heroCols.forEach(col => {
    const speed = parseFloat(col.dataset.speed) || 0.3;
    col.style.transform = `translateY(${scrollY * speed}px)`;
  });

  if (heroSection) {
    const fadeStart = heroSection.offsetTop;
    const fadeRange = heroSection.offsetHeight * 0.35;
    const fade = Math.min(Math.max((scrollY - fadeStart) / fadeRange, 0), 1);
    heroSection.style.setProperty('--hero-fade', fade.toFixed(3));
  }
});

// Close drawer on outside click
document.addEventListener('click', (e) => {
  const drawer = document.getElementById('drawer');
  if (drawer.classList.contains('open') && !drawer.contains(e.target) && !e.target.closest('.hamburger')) {
    drawer.classList.remove('open');
  }
});