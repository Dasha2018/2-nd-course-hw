let password = '1234';
let passwordquestion = prompt("Введите пароль");

if (password == passwordquestion) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}


let c = -10;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}


let d = 3;
let e = 150;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let a = '2';
let b = '3';
a = Number('2');
b = Number('3');
alert(a + b);

var monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '1':
        console.log('Зима');
        break;

    case '2':
        console.log('Зима');
        break;

    case '3':
        console.log('Весна');
        break;

    case '4':
        console.log('Весна');
        break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето');
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;

    case '9':
        console.log('Осень');
        break;

    case '10':
        console.log('Осень');
        break;

    case '11':
        console.log('Осень');
        break;

        case '12':
            console.log('Зима');
            break;
            default:
                console.log('ввели что-то не то');
    }


let n = prompt("Пожалуйста, введите любое число");
if(!isNaN(n)){
    if (n % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");		
    }  
}
else {
    console.log('Ввели не число')
}



var clientOS = prompt ("У вас IOS, введите-0. У вас Android, введите-1");
switch (clientOS) {
    case '0':
       console.log('Установите версию приложения для iOS по ссылке');
       break;
    case '1':
       console.log('Установите версию приложения для Android по ссылке');
       break;
    default:
       console.log('ввели что-то не то');
 }



 var clientOS = prompt ("У вас IOS, введите-0. У вас Android, введите-1");
 var clientDeviceYear = Number(prompt ("Укажите года выпуска вашего телефона"));
 switch (clientOS) {
    case '0':
       console.log(clientDeviceYear >= 2015 ? "Установите версию приложения для iOS по ссылке":"Установите облегченную версию приложения для iOS по ссылке");
       break;
    case '1':
       console.log(clientDeviceYear >= 2015 ? "Установите версию приложения для Android по ссылке" : "Установите облегченную версию приложения для Android по ссылке");
       break;
    default:
       console.log('ввели что-то не то');
 }







