/* ═══════════════════════════════════════════════════════════
   LANG.JS — Switcher de idioma + aplicación de traducciones
   Depende de: i18n.js (cargado antes)
═══════════════════════════════════════════════════════════ */

function getCurrentLang() {
  return localStorage.getItem('lang') || 'es';
}

/* Accede a un objeto anidado por ruta tipo "hero.title1" */
function t(path, lang) {
  const langObj = LANG_STRINGS[lang || getCurrentLang()];
  return path.split('.').reduce((acc, key) => acc?.[key], langObj) ?? '';
}

/* ── Aplica todas las traducciones al DOM ── */
function applyLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  /* 1. Texto simple: data-i18n="section.key" */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n, lang);
    if (val) el.textContent = val;
  });

  /* 2. HTML interior (subtítulo con <strong>): data-i18n-html */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.dataset.i18nHtml, lang);
    if (val) el.innerHTML = val;
  });

  /* 3. Placeholder de inputs/textarea: data-i18n-ph */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = t(el.dataset.i18nPh, lang);
    if (val) el.placeholder = val;
  });

  /* 4. Select de servicios */
  const select = document.getElementById('servicio');
  if (select) {
    const services = LANG_STRINGS[lang].contact.services;
    select.innerHTML = services
      .map(s => `<option value="${s.value}">${s.label}</option>`)
      .join('');
  }

  /* 5. Re-renderiza secciones dinámicas */
  if (typeof renderProjects   === 'function') renderProjects(getActiveFilter(), lang);
  if (typeof renderSkills     === 'function') renderSkills(lang);
  if (typeof renderTestimonials === 'function') renderTestimonials(lang);

  /* 6. Marca el botón activo */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ── Devuelve el filtro activo actual en proyectos ── */
function getActiveFilter() {
  const active = document.querySelector('.filter-btn.active');
  return active ? active.dataset.filter : 'all';
}

/* ── Inicializa botones y carga idioma guardado ── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  /* Aplica el idioma guardado (o español por defecto) */
  applyLang(getCurrentLang());
}

document.addEventListener('DOMContentLoaded', initLangSwitcher);
