/* ═══════════════════════════════════════════════════════════
   CONTACT.JS — Manejo del formulario de contacto
   Por defecto usa mailto:. Para envío real conecta con
   Formspree, EmailJS o tu propio backend.
═══════════════════════════════════════════════════════════ */

function initContactForm() {
  const form     = document.getElementById('contactForm');
  const btnText  = document.getElementById('formBtnText');
  const success  = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    /* Validación básica */
    if (!data.nombre || !data.email || !data.mensaje) return;

    /* Estado de carga */
    btnText.textContent = 'Enviando...';
    form.querySelector('button[type="submit"]').disabled = true;

    /* ──────────────────────────────────────────────────────────
       OPCIÓN A — Formspree (recomendado, gratis hasta 50 envíos/mes)
       1. Crea cuenta en formspree.io
       2. Crea un formulario y obtén tu endpoint
       3. Reemplaza la URL de abajo

    try {
      const res = await fetch('https://formspree.io/f/TU_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) showSuccess();
      else throw new Error();
    } catch {
      btnText.textContent = 'Error al enviar. Intenta de nuevo.';
    }
    ────────────────────────────────────────────────────────── */

    /* OPCIÓN B — mailto: (fallback sin backend) */
    const subject = encodeURIComponent(`Contacto portafolio — ${data.nombre}`);
    const body    = encodeURIComponent(
      `Nombre: ${data.nombre}\nEmpresa: ${data.empresa || 'No indicada'}\nEmail: ${data.email}\nServicio: ${data.servicio || 'No especificado'}\n\nMensaje:\n${data.mensaje}`
    );
    window.location.href = `mailto:tu@email.com?subject=${subject}&body=${body}`;

    setTimeout(showSuccess, 800);
  });

  function showSuccess() {
    form.reset();
    btnText.textContent = 'Enviar mensaje →';
    form.querySelector('button[type="submit"]').disabled = false;
    success.classList.add('visible');
    setTimeout(() => success.classList.remove('visible'), 5000);
  }
}

document.addEventListener('DOMContentLoaded', initContactForm);
