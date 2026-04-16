const loader = document.getElementById('loader');
const items = document.getElementById('items');

// отправляем запрос
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json())
  .then(data => {
    
    // получаем объект валют
    const valutes = data.response.Valute;

    // перебираем валюты
    for (let key in valutes) {
      const currency = valutes[key];

      const item = document.createElement('div');
      item.classList.add('item');

      item.innerHTML = `
        <div class="item__code">${currency.CharCode}</div>
        <div class="item__value">${currency.Value}</div>
        <div class="item__currency">руб.</div>
      `;

      items.appendChild(item);
    }

    // скрываем loader
    loader.classList.remove('loader_active');
  })
  .catch(error => {
    console.error('Ошибка:', error);
    loader.classList.remove('loader_active');
  });