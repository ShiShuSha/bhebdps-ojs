const tooltips = document.querySelectorAll('.has-tooltip');

let activeTooltip = null;

tooltips.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    // Если уже есть активная подсказка — удаляем
    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }

    // Создаём новую подсказку
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.textContent = el.getAttribute('title');

    document.body.appendChild(tooltip);

    // Позиционирование
    const rect = el.getBoundingClientRect();

    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = rect.bottom + 'px';

    activeTooltip = tooltip;
  });
});