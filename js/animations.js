/* ═══════════════════════════════════════════════════════════
   ANIMATIONS.JS — Animaciones de entrada y contador de stats
═══════════════════════════════════════════════════════════ */

/* ─── IntersectionObserver: fade-in general ─── */
function initFadeObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Observa todos los elementos con .fade-in que no sean dinámicos
  document.querySelectorAll(
    '.about-grid, .about-text, .about-tools, ' +
    '.contact-info, .contact-form, ' +
    '.section-header'
  ).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

/* ─── Contador animado de stats ─── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const statsSection = document.querySelector('.hero-stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    document.querySelectorAll('[data-target]').forEach(animateCounter);
    observer.disconnect();
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}

document.addEventListener('DOMContentLoaded', () => {
  initFadeObserver();
  initCounters();
});
