document.addEventListener('DOMContentLoaded', () => {
  const sliderEl = document.getElementById('slider');
  if (!sliderEl) return;

  // Image list — these are online Unsplash images so it works even if you don't have local files.
  // Replace with local paths like "images/europe1.jpg" if you prefer.
  const images = [
    'https://images.unsplash.com/photo-1505765052241-8c4fa1c2a3d5?auto=format&fit=crop&w=1400&q=60',
    'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=60',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=60'
  ];

  // create <img> elements and append
  images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `slide ${i+1}`;
    if (i === 0) img.classList.add('active');
    sliderEl.appendChild(img);
  });

  const slides = sliderEl.querySelectorAll('img');
  let current = 0;
  const total = slides.length;
  let interval = null;

  function next() {
    slides[current].classList.remove('active');
    current = (current + 1) % total;
    slides[current].classList.add('active');
  }

  function start() {
    if (interval) return;
    interval = setInterval(next, 3000);
  }
  function stop() {
    if (!interval) return;
    clearInterval(interval);
    interval = null;
  }

  // start slider
  start();

  // pause on hover (desktop)
  sliderEl.addEventListener('mouseenter', stop);
  sliderEl.addEventListener('mouseleave', start);
});
