document.addEventListener('DOMContentLoaded', function() {
  const quotes = document.querySelectorAll('.carousel-quote');
  const dotsContainer = document.getElementById('carousel-dots');
  let current = 0;
  let intervalId;

  function showQuote(idx) {
    quotes.forEach((q, i) => {
      q.classList.toggle('active', i === idx);
      if (dotsContainer.children[i]) {
        dotsContainer.children[i].classList.toggle('active', i === idx);
      }
    });
  }

  function createDots() {
    dotsContainer.innerHTML = '';
    quotes.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'carousel-dot' + (i === current ? ' active' : '');
      dot.addEventListener('click', function() {
        current = i;
        showQuote(current);
        resetInterval();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function nextQuote() {
    current = (current + 1) % quotes.length;
    showQuote(current);
  }

  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextQuote, 5000);
  }

  createDots();
  showQuote(current);
  intervalId = setInterval(nextQuote, 5000);
});
