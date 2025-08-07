document.addEventListener('DOMContentLoaded', function() {
  const quotes = document.querySelectorAll('.carousel-quote');
  const dotsContainer = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let current = 0;
  let intervalId;
  let interval = 13500;

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

  function prevQuote() {
    current = (current - 1 + quotes.length) % quotes.length;
    showQuote(current);
  }

  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextQuote, interval);
  }

  prevBtn.addEventListener('click', function() {
    prevQuote();
    resetInterval();
  });

  nextBtn.addEventListener('click', function() {
    nextQuote();
    resetInterval();
  });

  createDots();
  showQuote(current);
  intervalId = setInterval(nextQuote, interval);
});
