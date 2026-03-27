// Находим все ссылки меню
const links = Array.from(document.querySelectorAll('.menu__link'));

links.forEach(link => {
    link.onclick = function () {
        // Ищем родительский элемент 
        const parentItem = link.closest('.menu__item');

        // Ищем вложенное меню внутри него
        const subMenu = parentItem.querySelector('.menu_sub');

        // Если есть вложенное меню
        if (subMenu) {
            // Переключаем класс активности
            subMenu.classList.toggle('menu_active');

            return false;
        }
    };
});