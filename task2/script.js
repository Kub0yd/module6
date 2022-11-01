const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
alert('Метод для вывода информации в консоль');
})
document.querySelector('#alert').addEventListener('click', () => {
   alert('Метод для вызова предупреждающего сообщения');
})
document.querySelector('#prompt').addEventListener('click', () => {
    prompt('Этот код отобразит модальное окно с текстом и полем для ввода текста. Попробуйте ввести текст:');
 })