(() => {
  const backTop = document.getElementById('backTop');
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Smooth anchor scrolling for header nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Accordion functionality
  document.querySelectorAll('.card-header').forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.getAttribute('data-target');
      const content = document.getElementById(targetId);
      const card = header.closest('.card');
      
      if (card.classList.contains('active')) {
        // Collapse
        card.classList.remove('active');
        content.classList.add('collapsed');
        header.querySelector('.toggle-icon').textContent = '+';
      } else {
        // Expand
        card.classList.add('active');
        content.classList.remove('collapsed');
        header.querySelector('.toggle-icon').textContent = '−';
      }
    });
  });
})();


