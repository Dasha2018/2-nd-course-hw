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






