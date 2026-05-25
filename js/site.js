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
});
