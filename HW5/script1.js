document.querySelector('#Guessthenumber').onclick = function () {

    alert('Загадано число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток, после каждой попытки будет подсказка.')


    let number = Math.ceil(Math.random() * 100);
    let Guessthenumber = prompt('Какое число загадано?');
    let numberofguess = 0;
    while (Guessthenumber != number) {
        if (Guessthenumber > number) {
            Guessthenumber = prompt('Много. Попробу ещё раз.');
            numberofguess = numberofguess + 1;
        }
        if (Guessthenumber < number) {
            Guessthenumber = prompt('Мало. Попробу ещё раз.');
            numberofguess = numberofguess + 1;
        }
    }
    alert('Число угадано ' + number + '. Число угадано за ' + numberofguess + ' попытки.');
}
