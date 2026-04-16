const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clear');

// восстановление текста
const savedText = localStorage.getItem('editorText');
if (savedText) {
  editor.value = savedText;
}

// сохранение текста
editor.addEventListener('input', () => {
  localStorage.setItem('editorText', editor.value);
});

// очистка текста
clearBtn.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('editorText');
});
