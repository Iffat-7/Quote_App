const quotes = [
  "Believe in yourself and all that you are.",
  "Every day is a new beginning.",
  "Push yourself, because no one else is going to do it for you.",
  "You are capable of amazing things.",
  "Dream it. Wish it. Do it.",
  "Stay positive, work hard, make it happen.",
  "You’ve got this.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Act as if what you do makes a difference. It does.",
  "Success is not for the lazy.",
  "Make today ridiculously amazing.",
  "Start where you are. Use what you have. Do what you can."
];

function getQuoteOfTheDay() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  return quotes[dayOfYear % quotes.length];
}

document.addEventListener('DOMContentLoaded', () => {
  const quoteText = document.getElementById('quote');
  const dateText = document.getElementById('date');
  const today = new Date();

  quoteText.textContent = `"${getQuoteOfTheDay()}"`;
  dateText.textContent = today.toDateString();
});
