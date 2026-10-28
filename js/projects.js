/* ═══════════════════════════════════════════════════════════
   PROJECTS.JS — Renderizado multilingüe de tarjetas y modal
═══════════════════════════════════════════════════════════ */

let activeFilter = 'all';

/* Mezcla los datos base (ES) con las traducciones del idioma activo */
function getLocalizedProjects(lang) {
  if (lang === 'es' || !PROJECTS_I18N[lang]) return PROJECTS;
  const translations = PROJECTS_I18N[lang];
  return PROJECTS.map(p => {
    const tr = translations.find(t => t.id === p.id);
    return tr ? { ...p, ...tr } : p;
  });
}

function buildProjectCard(project, lang) {
  const s = LANG_STRINGS[lang].projects;
  const preview = project.image
    ? `<img class="project-preview-img" src="${project.image}" alt="${project.title}" loading="lazy" />`
    : `<div class="project-preview-placeholder">${project.emoji}</div>`;

  const embedBadge = project.embedUrl
    ? `<span class="embed-available-badge">▶ Live demo</span>` : '';

  const tools = project.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
  const kpis  = project.kpis.map(k => `<span class="kpi-chip">${k}</span>`).join('');

  return `
    <article class="project-card fade-in" data-category="${project.category}" data-id="${project.id}">
      <div class="project-preview">
        ${preview}
        <span class="project-category-badge">${project.categoryLabel}</span>
        ${embedBadge}
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-problem">${project.problem}</p>
        <div class="project-kpis">${kpis}</div>
        <div class="project-tools">${tools}</div>
        <div class="project-footer">
          <button class="btn-project btn-project-ghost" onclick="openModal(${project.id})">
            ${s.btnDetails}
          </button>
          ${project.embedUrl
            ? `<button class="btn-project btn-project-primary" onclick="openModal(${project.id}, true)">${s.btnDashboard}</button>`
            : project.demoUrl
              ? `<a class="btn-project btn-project-primary" href="${project.demoUrl}" target="_blank">${project.demoLabel} ↗</a>`
              : ''
          }
        </div>
      </div>
    </article>
  `;
}

function renderProjects(filter = 'all', lang) {
  lang = lang || getCurrentLang();
  activeFilter = filter;
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const allProjects = getLocalizedProjects(lang);
  const filtered = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => buildProjectCard(p, lang)).join('');

  requestAnimationFrame(() => {
    grid.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });
}

/* ─── Filtros ─── */
function initProjectFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter, getCurrentLang());
    });
  });
}

/* ─── Modal ─── */
function openModal(projectId, showEmbed = false) {
  const lang = getCurrentLang();
  const s = LANG_STRINGS[lang].projects;
  const allProjects = getLocalizedProjects(lang);
  const project = allProjects.find(p => p.id === projectId);
  if (!project) return;

  const hasEmbed = Boolean(project.embedUrl);

  const tabsHtml = hasEmbed ? `
    <div class="modal-tabs">
      <button class="modal-tab ${!showEmbed ? 'active' : ''}" onclick="switchModalTab(${projectId}, false)">
        📋 ${s.btnDetails}
      </button>
      <button class="modal-tab ${showEmbed ? 'active' : ''}" onclick="switchModalTab(${projectId}, true)">
        ${s.btnDashboard}
      </button>
    </div>` : '';

  const kpisHtml = project.kpis.map(k => {
    const spaceIdx = k.search(/\s/);
    const value = spaceIdx > -1 ? k.slice(0, spaceIdx) : k;
    const label = spaceIdx > -1 ? k.slice(spaceIdx + 1) : 'KPI';
    return `<div class="modal-kpi">
      <span class="modal-kpi-value">${value}</span>
      <span class="modal-kpi-label">${label}</span>
    </div>`;
  }).join('');

  const toolsHtml = project.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');

  const previewHtml = project.image
    ? `<img class="modal-preview-img" src="${project.image}" alt="${project.title}" />`
    : `<div class="modal-preview-placeholder">${project.emoji}</div>`;

  const detailsPanel = `
    <div class="modal-panel" id="panelDetails" ${showEmbed ? 'style="display:none"' : ''}>
      ${previewHtml}
      <p class="modal-section-title">${s.labelProblem}</p>
      <p class="modal-text">${project.problem}</p>
      <p class="modal-section-title">${s.labelETL}</p>
      <p class="modal-text">${project.etl}</p>
      <p class="modal-section-title">${s.labelKPIs}</p>
      <div class="modal-kpis">${kpisHtml}</div>
      <p class="modal-section-title">${s.labelTools}</p>
      <div class="project-tools" style="margin-bottom:0">${toolsHtml}</div>
      <p class="modal-section-title">${s.labelResult}</p>
      <p class="modal-text">${project.result}</p>
      <div class="modal-actions">
        ${hasEmbed
          ? `<button class="btn-primary" onclick="switchModalTab(${projectId}, true)">${s.btnDashboard}</button>`
          : project.demoUrl
            ? `<a class="btn-primary" href="${project.demoUrl}" target="_blank">${project.demoLabel} ↗</a>`
            : ''
        }
        <button class="btn-secondary" onclick="closeModal()">${s.btnClose}</button>
      </div>
    </div>`;

  const embedPanel = hasEmbed ? `
    <div class="modal-panel" id="panelEmbed" ${!showEmbed ? 'style="display:none"' : ''}>
      <div class="pbi-embed-wrapper">
        <div class="pbi-embed-loader" id="pbiLoader">
          <div class="pbi-spinner"></div>
          <span>Cargando dashboard…</span>
        </div>
        <iframe class="pbi-iframe" id="pbiIframe"
          src="${project.embedUrl}" frameborder="0" allowFullScreen="true"
          title="${project.title}"
          onload="document.getElementById('pbiLoader').style.display='none'">
        </iframe>
      </div>
      <div class="modal-actions" style="padding:1rem 0 0">
        <a class="btn-primary" href="${project.embedUrl}" target="_blank">${s.btnFullscreen}</a>
        <button class="btn-secondary" onclick="closeModal()">${s.btnClose}</button>
      </div>
    </div>` : '';

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-header">
      <span class="project-category-badge" style="position:static;display:inline-block;margin-bottom:.75rem">${project.categoryLabel}</span>
      <h2 class="modal-title">${project.title}</h2>
    </div>
    ${tabsHtml}
    ${detailsPanel}
    ${embedPanel}
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchModalTab(projectId, showEmbed) {
  const detailsPanel = document.getElementById('panelDetails');
  const embedPanel   = document.getElementById('panelEmbed');
  document.querySelectorAll('.modal-tab').forEach((tab, i) => {
    tab.classList.toggle('active', showEmbed ? i === 1 : i === 0);
  });
  if (detailsPanel) detailsPanel.style.display = showEmbed ? 'none' : 'block';
  if (embedPanel)   embedPanel.style.display   = showEmbed ? 'block' : 'none';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

document.addEventListener('DOMContentLoaded', () => {
  initProjectFilters();
  initModal();
  /* renderProjects es llamado por lang.js → applyLang al inicializar */
});
