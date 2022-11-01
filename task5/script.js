const InputField = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const Button = document.querySelector('button');
InputField.addEventListener('keypress', (event) => {
    duplicateField.textContent = event.target.value;
    //Значение выводится только после выполнения обработки, т.е. последний элемент не попадает в дуб. поле пока не пройдет обработка
    //Не знаю как обойти
})

Button.addEventListener('click', (event) => {
    console.log(InputField.value);
    InputField.value = '';
    duplicateField.textContent = '';
    event.preventDefault();
})