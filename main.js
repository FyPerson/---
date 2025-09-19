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

  // 初始化未来规划彩蛋模块
  const futurePlanningSection = document.querySelector('.future-planning');
  if (futurePlanningSection) {
    // 添加键盘事件监听器
    document.addEventListener('keydown', function(e) {
      // 按F键显示未来规划
      if (e.key === 'f' || e.key === 'F') {
        if (futurePlanningSection.style.display === 'none') {
          futurePlanningSection.style.display = 'block';
          futurePlanningSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // 按Escape键隐藏未来规划
      if (e.key === 'Escape') {
        futurePlanningSection.style.display = 'none';
      }
    });
    
    // 添加点击事件监听器（双击页面任意位置显示未来规划）
    let clickCount = 0;
    document.addEventListener('click', function(e) {
      clickCount++;
      setTimeout(() => {
        if (clickCount === 2) {
          if (futurePlanningSection.style.display === 'none') {
            futurePlanningSection.style.display = 'block';
            futurePlanningSection.scrollIntoView({ behavior: 'smooth' });
          }
          clickCount = 0;
        } else if (clickCount > 2) {
          clickCount = 0;
        }
      }, 300);
    });
  }
})();


