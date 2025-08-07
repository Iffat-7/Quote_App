 // Full list of 100 motivational quotes with unique dates
    const quotes = [
      { text: "The best way to get started is to quit talking and begin doing.", date: "2025-01-01" },
      { text: "Don't let yesterday take up too much of today.", date: "2025-01-02" },
      { text: "It's not whether you get knocked down, it's whether you get up.", date: "2025-01-03" },
      { text: "If you are working on something exciting, it will keep you motivated.", date: "2025-01-04" },
      { text: "Success is not in what you have, but who you are.", date: "2025-01-05" },
      { text: "The harder you work for something, the greater you'll feel when you achieve it.", date: "2025-01-06" },
      { text: "Dream bigger. Do bigger.", date: "2025-01-07" },
      { text: "Don't watch the clock; do what it does. Keep going.", date: "2025-01-08" },
      { text: "Great things never come from comfort zones.", date: "2025-01-09" },
      { text: "Push yourself, because no one else is going to do it for you.", date: "2025-01-10" },
      { text: "Wake up with determination. Go to bed with satisfaction.", date: "2025-04-10" }
    ];

    const quoteTextEl = document.getElementById('quote-text');
    const quoteDateEl = document.getElementById('quote-date');
    const quoteCardEl = document.getElementById('quote-card');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;

    function formatDate(dateStr) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const date = new Date(dateStr);
      return date.toLocaleDateString(undefined, options);
    }

    function showQuote(index) {
      quoteCardEl.classList.add('fade-out');

      setTimeout(() => {
        const { text, date } = quotes[index];
        quoteTextEl.textContent = `"${text}"`;
        quoteDateEl.textContent = formatDate(date);
        quoteCardEl.classList.remove('fade-out');
      }, 400);
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
      showQuote(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % quotes.length;
      showQuote(currentIndex);
    });

    window.addEventListener('DOMContentLoaded', () => {
      showQuote(currentIndex);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevBtn.click();
      } else if (e.key === 'ArrowRight') {
        nextBtn.click();
      }
    });
