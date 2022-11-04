const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    PromptText = prompt('Введите новый текст для ссылки:', link.textContent);
    //If 'Cancel' pressed, break out of the function early
    if (PromptText === null){
        return;
    }
    if (PromptText != ""){
    link.textContent = PromptText;
    event.preventDefault();
    } else {
        alert('Значение не может быть пустым!');
    }
    
})