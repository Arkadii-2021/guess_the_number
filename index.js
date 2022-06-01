document.write('Hello, world!');
console.log('Hello, developers!');

while (true) {

    let n = Math.floor(Math.random() * 1000);
    console.log(n);
    const userGuess = prompt("Угадай число 0 до 999 (для выхода введите 'q' или 'exit')");

    if (userGuess === 'q' || userGuess === 'exit') {
        break;
    }
    if (+userGuess < n) {
        alert('Не угадали :( Вы ввели значение меньше чем нужно. Было загадано число: ' + n)
    } else if (+userGuess > n) {
        alert('Не угадали :( Вы вввели значение больше чем нужно. Было загадано число: ' + n)
    } else if (isNaN(userGuess) || (+userGuess > 999 && +userGuess < 0)) {
        alert('Вы ввели некорректное значение')
    } else if (userGuess == n) {
        alert('Вы угадали! :)');
    }
}