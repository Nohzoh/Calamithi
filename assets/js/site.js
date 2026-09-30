document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-button');
  const cards = document.querySelectorAll('.gallery-card');

  if (filterButtons.length && cards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        filterButtons.forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;
        cards.forEach((card) => {
          const series = card.dataset.series;
          card.style.display = filter === 'all' || series === filter ? 'block' : 'none';
        });
      });
    });
  }

  const bodyClass = document.body.classList;
  if (bodyClass.contains('oeuvre-page')) {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        const prev = document.querySelector('.nav-prev');
        const next = document.querySelector('.nav-next');
        if (event.key === 'ArrowLeft' && prev) {
          window.location = prev.href;
        }
        if (event.key === 'ArrowRight' && next) {
          window.location = next.href;
        }
      }
    });
  }

  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dots button');
    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');
    let current = 0;

    const goTo = (i) => {
      const target = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: target * track.clientWidth });
    };
    const update = () => {
      current = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach((dot, i) => dot.setAttribute('aria-current', i === current ? 'true' : 'false'));
      prev.disabled = current === 0;
      next.disabled = current === slides.length - 1;
    };

    prev.addEventListener('click', () => goTo(current - 1));
    next.addEventListener('click', () => goTo(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
    track.addEventListener('scroll', () => window.requestAnimationFrame(update), { passive: true });
    // Les flèches du clavier naviguent dans le carrousel quand il a le focus, sinon entre les œuvres.
    track.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        event.stopPropagation();
        goTo(current + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    update();
  });

  // Bloc d'achat : le bouton suit le format sélectionné.
  document.querySelectorAll('[data-buy]').forEach((card) => {
    const button = card.querySelector('.buy-button');
    const price = card.querySelector('[data-buy-price]');
    const inputs = card.querySelectorAll('input[name="format"]');
    inputs.forEach((input) => {
      input.addEventListener('change', () => {
        button.href = input.dataset.url;
        price.textContent = input.dataset.price;
        inputs.forEach((other) => other.closest('.buy-option').classList.toggle('is-selected', other === input));
      });
    });
  });

  // Ces mesures sont uniquement dissuasives et ne constituent pas une protection technique réelle.
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
    img.addEventListener('dragstart', function (event) {
      event.preventDefault();
    });
    img.addEventListener('mousedown', function (event) {
      if (event.target === img) {
        event.preventDefault();
      }
    });
  });
});
