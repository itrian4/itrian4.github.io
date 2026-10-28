/* ═══════════════════════════════════════════════════════════
   MAIN.JS — Punto de entrada. Observador global de fade-in
   para elementos generados dinámicamente.
═══════════════════════════════════════════════════════════ */

/* Observador que activa .visible en cualquier .fade-in nuevo en el DOM */
function initGlobalFadeObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  /* Observa elementos ya presentes */
  function observeAll() {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      observer.observe(el);
    });
  }

  /* MutationObserver: detecta elementos dinámicos añadidos por JS */
  const mutationObs = new MutationObserver(() => observeAll());
  mutationObs.observe(document.body, { childList: true, subtree: true });

  observeAll();
}

document.addEventListener('DOMContentLoaded', initGlobalFadeObserver);
