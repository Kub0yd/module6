const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    PromptText = prompt('Введите новый текст для ссылки:', link.textContent);
    link.textContent = PromptText;
    event.preventDefault();
})