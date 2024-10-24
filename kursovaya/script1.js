const button = document.querySelector('#Guessthenumber');


function startGame() {

    alert('Загадано число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток, после каждой попытки будет подсказка.')


    let number = Math.ceil(Math.random() * 100);
    let Guessthenumber = prompt('Какое число загадано?');
    let numberofguess = 0;
    while (Guessthenumber != number) {
        if (Guessthenumber > number) {
            if (Guessthenumber !== null) {
                Guessthenumber = prompt('Много. Попробу ещё раз.');
                numberofguess = numberofguess + 1;
            }
        }
        if (Guessthenumber < number) {
            if (Guessthenumber !== null) { // Проверяю на нажатие кнопки «Отмена»
                Guessthenumber = prompt('Мало. Попробу ещё раз.');
                numberofguess = numberofguess + 1;
            }
        }
    }
    alert('Число угадано ' + number + '. Число угадано за ' + numberofguess + ' попытки.');
}
button.addEventListener("click", startGame);




const button1 = document.querySelector('#Simplearithmetic');


function createTask() {
    alert('Решите простые арифметические задачи и проверьте свои знания!');

    function addition(a, b) {
        return a + b;
    }

    function subtraction(a, b) {
        return a - b;
    }

    function multiplication(a, b) {
        return a * b;
    }

    function division(a, b) {
        if (b === 0) {
            return 'Деление на ноль не допускается';
        } else {
            return a / b;
        }
    }

    let signs = ['+', '-', '*', '/'];
    let index = Math.floor(Math.random() * 4);

    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let operation = signs[Math.floor(Math.random() * signs.length)];
    alert(`${a}  ${operation} ${b} = `);
    let answer = prompt(`Напиши ответ: `);

    if (answer == addition(a, b)) {
        alert(`Верно`);
    } else if (answer == subtraction(a, b)) {
        alert(`Верно`);
    } else if (answer == multiplication(a, b)) {
        alert(`Верно`);
    } else if (answer == division(a, b)) {
        alert(`Верно`);
    } else {
        alert(`Не верно`);
    }
}
button1.addEventListener("click", createTask);



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

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i].question;
        const options = quiz[i].options;
        const correctAnswer = quiz[i].correctAnswer;
        alert(question);
        let userAnswer = prompt(options);
        let score = 0;
        checkAnswer({ question, options, correctAnswer }, userAnswer);
    }

    function checkAnswer(quiz, userAnswer) {
        if (userAnswer == quiz.correctAnswer) {
            score++;
            alert("Правильный ответ!");
        } else {
            alert("Неправильный ответ!");
        }
    }
    alert(`Вы ответили правильно на ${score} вопросов.`);


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
    alert("Выбор компьютера " + computerSelection + ".");
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
    let start = document.querySelector("#start"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: start.offsetTop,
        behavior: "smooth"
    });
});

/* document.getElementById("Topbuttonmobile").addEventListener("click", function () {
    let start = document.querySelector("#minigamemobile"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: start.offsetTop,
        behavior: "smooth"
    });
});  */




/* document.getElementById("section1").addEventListener("click", function () {
    let section1 = document.querySelector("#msection1"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section1.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section2").addEventListener("click", function () {
    let section2 = document.querySelector("#msection2"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section2.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section3").addEventListener("click", function () {
    let section3 = document.querySelector("#msection3"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section3.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section4").addEventListener("click", function () {
   let section4 = document.querySelector("#msection4"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section4.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section5").addEventListener("click", function () {
    let section5 = document.querySelector("#msection5"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section5.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("section6").addEventListener("click", function () {
    let section6 = document.querySelector("#msection6"); // ID элемента, куда вы хотите проскроллить
    window.scrollTo({
        top: section6.offsetTop,
        behavior: "smooth"
    });
}); */



