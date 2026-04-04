const rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let index = cases.findIndex(el => el.classList.contains('rotator__case_active'));

  setInterval(() => {
    // убираем активный класс
    cases[index].classList.remove('rotator__case_active');

    // переходим к следующему элементу
    index++;

    // если вышли за пределы - начинаем сначала
    if (index >= cases.length) {
      index = 0;
    }

    // добавляем активный класс
    cases[index].classList.add('rotator__case_active');
  }, 1000);
});