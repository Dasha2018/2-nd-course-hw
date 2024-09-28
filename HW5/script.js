//1

function min(a, b) {
    let min = a < b ? a : b;
    console.log(`Меньшее число ${min}`);
}

min(56, 100);

//2

function isEven(number) {
    return number % 2 == 0 ? `Число четное` : `Число нечетное`;
}

console.log(isEven(8));

//3

function Quater(a) {
    let Quater = a ** 2;
    console.log(Quater);
}
Quater(5);

function squared(num) {
    return num ** 2;
}
let answer = squared(5);
console.log(answer);

//4

function Verifyage(age) {
    if (age < 0) {
        console.log('Вы ввели неправильное значение!');
    }
    else if (0 <= age && age <= 12) {
        console.log(`Привет, друг!`);
    }
    else {
        console.log(`Добро пожаловать!`);
    }
}
Verifyage(prompt(`Сколько тебе лет?`));

//5

function calc(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return ('Одно или оба значения не являются числом');
    } else {
        return (a * b);
    }
}
console.log(calc('hello', 9));

//6

function getNumber() {
    let number = prompt('Введите число');
    if (isNaN(number)) {
        return ('Переданный параметр не является числом');
    } else {
        return (`${number} в кубе равняется ${number ** 3}`);
    }
}
console.log(getNumber(3));

//7

function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}


const circle1 = {
    radius: 5,
    methodgetArea: getArea,
    methodgetPerimeter: getPerimeter,
}

const circle2 = {
    radius: 10,
    methodgetArea: getArea,
    methodgetPerimeter: getPerimeter,
}

console.log(circle1.methodgetArea());
console.log(circle2.methodgetArea());


