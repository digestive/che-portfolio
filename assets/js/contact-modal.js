// Contact Modal JS
// Handles opening, closing, and form submission

document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('open-contact-modal');
  const closeBtn = document.getElementById('close-contact-modal');
  const overlay = document.getElementById('contact-modal-overlay');
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('contact-form-success');

  if (openBtn && overlay) {
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      overlay.style.display = 'flex';
    });
  }
  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', function() {
      overlay.style.display = 'none';
      if (form) form.style.display = 'flex';
      if (successMsg) successMsg.style.display = 'none';
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.style.display = 'none';
        if (form) form.style.display = 'flex';
        if (successMsg) successMsg.style.display = 'none';
      }
    });
  }
  // Do NOT prevent default on form submit; let Formspree handle it
});
