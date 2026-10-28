/* ═══════════════════════════════════════════════════════════
   TESTIMONIALS.JS — Renderizado multilingüe de testimonios
═══════════════════════════════════════════════════════════ */

function getLocalizedTestimonials(lang) {
  if (lang === 'es' || !TESTIMONIALS_I18N[lang]) return TESTIMONIALS;
  return TESTIMONIALS_I18N[lang];
}

function buildTestimonialCard(t) {
  const stars = Array(t.stars).fill('<span class="star">★</span>').join('');
  return `
    <div class="testimonial-card fade-in">
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-stars">${stars}</div>
      <div class="testimonial-author">
        <div class="author-avatar">${t.initials}</div>
        <div>
          <span class="author-name">${t.name}</span>
          <span class="author-role">${t.role}</span>
        </div>
      </div>
    </div>`;
}

function renderTestimonials(lang) {
  lang = lang || getCurrentLang();
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  const data = getLocalizedTestimonials(lang);
  grid.innerHTML = data.map(buildTestimonialCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  /* renderTestimonials es llamado por lang.js → applyLang al inicializar */
});
