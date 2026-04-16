const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clear');

// Восстановление текста
const savedText = localStorage.getItem('editorText');
if (savedText) {
  editor.value = savedText;
}

// Сохранение текста
editor.addEventListener('input', () => {
  localStorage.setItem('editorText', editor.value);
});

// Очистка текста
clearBtn.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('editorText');
});