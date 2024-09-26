for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


for (let i = 7; i <= 22; i++) {
    console.log(i);
}


let obj = { 'Коля': 200, 'Вася': 300, 'Петя': 400 };
let key = { 'Коля': ['Коля'], 'Вася': ['Вася'], 'Петя': ['Петя'] };
for (key in obj) {
    console.log(key + ' - зарплата ' + obj[key] + ' долларов.')
}



let n = 1000, num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
    console.log(n);
}
console.log("Итераций: " + num + ", получилось число " + n);


let dayFriday = 5;
let allDay = 31;

for (let i = dayFriday; i <= allDay; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}

//доп задания

let k = 100, iterations = 0;
while (k >= 0) {
    k = k - 7;
    iterations++;
    console.log(k);
}
console.log("Итераций: " + iterations + ", получилось число " + k);


let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
    'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

for (i = 0; i < 12; i++) {

    console.log(i + 1, months[i]);

}

const book = {
    namebook: 'Источник',
    author: 'Айн Рэнд',
    genre: 'Роман',
    yearofpublication: 2022
}

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}


let Arr = [5, 25, 69, 87, 58, 45, 47, 51, 96, 36];
let minValue = Math.min(...Arr);
let maxValue = Math.max(...Arr);
console.log("Minimum element is:" + minValue);
console.log("Maximum Element is:" + maxValue);