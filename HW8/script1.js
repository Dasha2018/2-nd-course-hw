const button = document.querySelector('#Guessthenumber');


function startGame() {

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
button.addEventListener("click", startGame);



const button2 = document.querySelector('#Turnthetextover');

function startGame2() {
    let input = prompt("Введите текст");

    input = input.split("").reverse().join("");
    alert(`Перевёрнутый текст: ${input}`);
}
button2.addEventListener("click", startGame2);




const button3 = document.querySelector('#Quiz');

function startGame3() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", " 2. Синий", " 3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", " 2. Семь", " 3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре ", " 2. Пять ", " 3. Шесть"],
            correctAnswer: 2
        }
    ];

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i].question;
        const options = quiz[i].options;
        const correctAnswer = quiz[i].correctAnswer;
        alert(question);
        let userAnswer = prompt(options);

        checkAnswer({ question, options, correctAnswer }, userAnswer);
    }

    function checkAnswer(quiz, userAnswer) {
        if (userAnswer == quiz.correctAnswer) {
            alert("Правильный ответ!");
        } else {
            alert("Неправильный ответ!");
        }

    }

}
button3.addEventListener("click", startGame3);


const button4 = document.querySelector('#RockPaperScissors');

function startGame4() {

    alert('Сыгрвем в Камень, Ножницы, Бумага!');

    const selection = ["камень", "ножницы", "бумага"];

    let userSelection = prompt("Выберите 'камень', 'ножницы' или 'бумага':");
    userSelection = userSelection.toLowerCase();

    let computerSelection = selection[Math.floor(Math.random() * selection.length)];

    if (userSelection === computerSelection) {
        alert("Ничья!");
    } else if (userSelection == "камень") {
        if (computerSelection == "ножницы") {
            alert("Вы выиграли!");
        } else {
            alert("Компьютер выиграл!");
        }
    } else if (userSelection == "бумага") {
        if (computerSelection == "камень") {
            alert("Вы выиграли!");
        } else {
            alert("Компьютер выиграл!");
        }
    } else { // userChoice == "ножницы"
        if (computerSelection == "бумага") {
            alert("Вы выиграли!");
        } else {
            alert("Компьютер выиграл!");
        }
    }
}
button4.addEventListener("click", startGame4);



const Randomcolor = document.getElementById('random');


function changeColor() {
    // Генерируем случайное число
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);


    Randomcolor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
document.querySelector('#Randomcolor').addEventListener('click', changeColor);



document.getElementById("TopButton").addEventListener("click", function () {
    var start = document.querySelector("#start"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: start.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section1").addEventListener("click", function () {
    var section1 = document.querySelector("#msection1"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section1.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section2").addEventListener("click", function () {
    var section2 = document.querySelector("#msection2"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section2.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section3").addEventListener("click", function () {
    var section3 = document.querySelector("#msection3"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section3.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section4").addEventListener("click", function () {
    var section4 = document.querySelector("#msection4"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section4.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section5").addEventListener("click", function () {
    var section5 = document.querySelector("#msection5"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section5.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section6").addEventListener("click", function () {
    var section6 = document.querySelector("#msection6"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section6.offsetTop,
        behavior: "smooth"
    });
});



 // Получаем контейнер для бегущей строки
/* let creepingline = document.getElementById('#CreepingLine');
let text = creepingline.innerHTML;



// Определяем скорость движения строки (в пикселях за секунду)
const speed = 50;

// Функция для перемещения текста
function moveText() {
  // Получаем текущую позицию текста
  let currentPosition = creepingline.scrollLeft;

  // Перемещаем текст на один пиксель вправо
  currentPosition += speed;

  // Обновляем позицию текста в контейнере
  creepingline.scrollLeft = currentPosition;
}

// Запускаем функцию каждые 10 миллисекунд
setInterval(moveText, 10);  */

