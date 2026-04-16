const tooltips = document.querySelectorAll('.has-tooltip');

let activeTooltip = null;

tooltips.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    // если уже есть активная подсказка удаляем
    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }

    // создаём новую подсказку
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.textContent = el.getAttribute('title');

    document.body.appendChild(tooltip);

    // позиционирование
    const rect = el.getBoundingClientRect();

    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = rect.bottom + 'px';

    activeTooltip = tooltip;
  });
});
