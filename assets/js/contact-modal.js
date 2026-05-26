// Contact Modal JS
// Handles opening, closing, and form submission via Google Apps Script

const CONTACT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw5dfCnkmiEMpk34kglapOcciRxczU0UselJcmk_j3yLuYvqK7rgadeFDdZHt0R-oY/exec';

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

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name    = document.getElementById('contact-name').value;
      var email   = document.getElementById('contact-email').value;
      var message = document.getElementById('contact-message').value;

      fetch(CONTACT_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          name:      name,
          email:     email,
          message:   message,
          timestamp: new Date().toISOString()
        })
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.result === 'success') {
          form.style.display = 'none';
          if (successMsg) successMsg.style.display = 'block';
          form.reset();
        } else {
          alert('Something went wrong. Please try again.');
        }
      })
      .catch(function() {
        alert('Something went wrong. Please try again.');
      });
    });
  }
});
