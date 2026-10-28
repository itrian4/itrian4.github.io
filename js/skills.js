/* ═══════════════════════════════════════════════════════════
   SKILLS.JS — Barras y badges multilingües
═══════════════════════════════════════════════════════════ */

function getLocalizedSkillBars(lang) {
  if (lang === 'es' || !SKILLS_I18N[lang]) return SKILLS_BARS;
  return SKILLS_BARS.map((bar, i) => ({
    ...bar,
    ...SKILLS_I18N[lang].bars[i]
  }));
}

function getLocalizedSkillBadges(lang) {
  if (lang === 'es' || !SKILLS_I18N[lang]) return SKILLS_BADGES;
  return SKILLS_BADGES.map((badge, i) => ({
    ...badge,
    category: SKILLS_I18N[lang].badges[i]?.category || badge.category
  }));
}

function buildSkillBar(skill) {
  return `
    <div class="skill-row fade-in">
      <div class="skill-meta">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level-text">${skill.label} · ${skill.level}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" data-level="${skill.level}"></div>
      </div>
    </div>`;
}

function buildSkillBadge(skill) {
  const dots = Array.from({ length: 5 }, (_, i) => {
    const filled = i < skill.dots;
    return `<span class="badge-dot-item ${filled ? 'filled' : ''} ${filled && skill.dots >= 4 ? 'high' : ''}"></span>`;
  }).join('');
  return `
    <div class="skill-badge fade-in">
      <span class="badge-icon">${skill.icon}</span>
      <div class="badge-info">
        <span class="badge-name">${skill.name}</span>
        <span class="badge-category">${skill.category}</span>
        <div class="badge-dots">${dots}</div>
      </div>
    </div>`;
}

function renderSkills(lang) {
  lang = lang || getCurrentLang();
  const barsContainer   = document.getElementById('skillsBars');
  const badgesContainer = document.getElementById('skillsBadges');

  const bars   = getLocalizedSkillBars(lang);
  const badges = getLocalizedSkillBadges(lang);

  if (barsContainer)   barsContainer.innerHTML   = bars.map(buildSkillBar).join('');
  if (badgesContainer) badgesContainer.innerHTML = badges.map(buildSkillBadge).join('');

  /* Re-observa para las animaciones de barras */
  initSkillsObserver();
}

function animateSkillBars(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.skill-fill').forEach(bar => {
      bar.style.width = bar.dataset.level + '%';
    });
    entry.target.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

function initSkillsObserver() {
  const section = document.getElementById('habilidades');
  if (!section) return;
  const obs = new IntersectionObserver(animateSkillBars, { threshold: 0.15 });
  obs.observe(section);
}

document.addEventListener('DOMContentLoaded', () => {
  /* renderSkills es llamado por lang.js → applyLang al inicializar */
});
