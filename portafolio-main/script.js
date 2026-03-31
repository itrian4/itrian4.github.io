/* ═══════════════════════════════════════════════════════════════
   PORTAFOLIO INGRIS — script.js
═══════════════════════════════════════════════════════════════ */

/* ── CURSOR PERSONALIZADO ────────────────────────────────────── */
const cursorDot  = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top  = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .tech-card, .proj-card, .tab-btn, .car-btn, .contact-item')
  .forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot.style.transform  = 'translate(-50%,-50%) scale(2.2)';
      cursorDot.style.background = 'var(--accent2)';
      cursorRing.style.width     = '52px';
      cursorRing.style.height    = '52px';
    });
    el.addEventListener('mouseleave', () => {
      cursorDot.style.transform  = 'translate(-50%,-50%) scale(1)';
      cursorDot.style.background = 'var(--accent)';
      cursorRing.style.width     = '36px';
      cursorRing.style.height    = '36px';
    });
  });

/* ── SCROLL REVEAL ───────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── EFECTO TYPING ───────────────────────────────────────────── */
const words = ['Analista de Datos', 'BI Developer', 'Ingeniera de Sistemas', 'Power BI Expert', 'Automatización'];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typeTarget = document.getElementById('typeTarget');

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typeTarget.textContent = currentWord.slice(0, --charIndex);
  } else {
    typeTarget.textContent = currentWord.slice(0, ++charIndex);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => { isDeleting = true; }, 1800);
    setTimeout(typeEffect, 100);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 350);
    return;
  }
  setTimeout(typeEffect, isDeleting ? 60 : 90);
}
typeEffect();

/* ── MENÚ HAMBURGUESA ────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Cerrar menú al hacer click en un link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── TABS DE PROYECTOS ───────────────────────────────────────── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.proj-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

/* ── CARRUSEL POWER BI ───────────────────────────────────────── */
const track         = document.getElementById('pbiTrack');
const cards         = track.querySelectorAll('.proj-card');
const dotsContainer = document.getElementById('carDots');
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
let currentIndex    = 0;

// Crear dots
cards.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
});

function goTo(i) {
  currentIndex = Math.max(0, Math.min(i, cards.length - 1));
  const cardWidth = cards[0].getBoundingClientRect().width + 24; // 24 = gap en px
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  // Actualizar dots
  dotsContainer.querySelectorAll('.dot').forEach((d, j) => {
    d.classList.toggle('active', j === currentIndex);
  });

  // Estados de los botones
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === cards.length - 1;
}

prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
nextBtn.addEventListener('click', () => goTo(currentIndex + 1));
window.addEventListener('resize', () => goTo(currentIndex));

// Inicializar estado de botones
goTo(0);

// Swipe táctil
let touchStartX = 0;
track.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
track.addEventListener('touchend', e => {
  const dx = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 40) goTo(currentIndex + (dx > 0 ? 1 : -1));
});

/* ── ACORDEÓN ────────────────────────────────────────────────── */
function toggleAcc(btn) {
  // Cerrar otros del mismo card si se quiere
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}
window.toggleAcc = toggleAcc; // exponer globalmente para onclick en HTML

/* ── ACTIVAR EMBED POWER BI ──────────────────────────────────── */
function activateEmbed(overlayId, iframeId) {
  const overlay = document.getElementById(overlayId);
  overlay.style.opacity = '0';
  overlay.style.pointerEvents = 'none';
  const iframe = document.getElementById(iframeId);
  iframe.style.display = 'block';
  // ↓ Descomenta y reemplaza con tu URL pública de Power BI:
  // iframe.src = 'https://app.powerbi.com/view?r=TU_TOKEN';
}
window.activateEmbed = activateEmbed;

/* ── FORMULARIO → MAILTO ─────────────────────────────────────── */
function sendMail(e) {
  e.preventDefault();
  const name    = document.getElementById('fname').value;
  const email   = document.getElementById('femail').value;
  const subject = document.getElementById('fsubject').value || 'Contacto desde portafolio';
  const message = document.getElementById('fmessage').value;
  const body    = encodeURIComponent(`Hola Ingris,\n\nMi nombre es ${name} (${email}).\n\n${message}`);
  window.location.href = `mailto:tu@email.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}
window.sendMail = sendMail;

/* ── RESALTADO ACTIVO NAV ────────────────────────────────────── */
const navSections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  navSections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });
