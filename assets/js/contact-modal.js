// Contact Modal JS
// Handles opening, closing, and form submission

document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('open-contact-modal');
  const closeBtn = document.getElementById('close-contact-modal');
  const overlay = document.getElementById('contact-modal-overlay');
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('contact-form-success');

  if (openBtn && overlay) {
    openBtn.addEventListener('click', function() {
      overlay.style.display = 'flex';
    });
  }
  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', function() {
      overlay.style.display = 'none';
      form.style.display = 'flex';
      successMsg.style.display = 'none';
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.style.display = 'none';
        form.style.display = 'flex';
        successMsg.style.display = 'none';
      }
    });
  }
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Simulate form submission
      form.style.display = 'none';
      successMsg.style.display = 'block';
    });
  }
});
