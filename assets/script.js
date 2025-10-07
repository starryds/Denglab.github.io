// Simple filter logic for category + year
(function(){
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = [...document.querySelectorAll('.card')];
  const yearSel = document.getElementById('year');
  const resetBtn = document.getElementById('resetFilters');
  const yearNow = document.getElementById('yearNow');
  if (yearNow) yearNow.textContent = new Date().getFullYear();

  let activeCategory = 'all';
  let activeYear = yearSel ? yearSel.value : 'all';

  function applyFilters(){
    cards.forEach(card => {
      const matchCategory = (activeCategory === 'all') || (card.dataset.category === activeCategory);
      const matchYear = (activeYear === 'all') || (card.dataset.year === activeYear);
      card.classList.toggle('hidden-card', !(matchCategory && matchYear));
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.filter;
      applyFilters();
    });
  });

  if (yearSel) {
    yearSel.addEventListener('change', () => {
      activeYear = yearSel.value;
      applyFilters();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeCategory = 'all';
      activeYear = 'all';
      yearSel.value = 'all';
      applyFilters();
    });
  }

  applyFilters();
})();
