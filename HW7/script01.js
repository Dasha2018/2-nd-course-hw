
//1
let variable = ('js');
console.log(variable.toUpperCase());

//2

  function filterByPrefix(arr, prefix) {
    return arr.filter(str => str.toLowerCase().startsWith(prefix.toLowerCase()));
  }
  
  console.log(filterByPrefix(['Регистр', 'символов', 'не', 'влияет', 'на', 'результат'], 'ре'));

//3

let num = 32.58884;
console.log(Math.floor(num)); //округляет аргумент до ближайшего меньшего целого
let num1 = 32.58884;
console.log(Math.ceil(num1)); //округляет аргумент до ближайшего большего целого
let num2 = 32.58884;
console.log(Math.round(num2)); //возвращает число, округлённое к ближайшему целому

//4

let array = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...array));
console.log(Math.max(...array));

//5

let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);


//6

function getRandomArray(max) {
  const randomArray = [];
  for (let i = 0; i < max / 2; i++) {
    randomArray.push(Math.floor(Math.random() * max));
  }
  return randomArray;
}
console.log(getRandomArray(8));

//7

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(25, 50));

//8

let presentDate = new Date();
console.log(presentDate);

//9
let currentDate = new Date();
// Добавляем 73 дня к текущей дате
currentDate.setDate(currentDate.getDate() + 73);
// Выводим новую дату
console.log(new Date(currentDate));

//10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
  "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Майя", "Июня",
  "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() +
  " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];

console.log(fullDate);

// время
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(`Время: ${hours}:${minutes}:${seconds}`);




/* let date = new Date();
let hours = date.getHours() % 12 || 12; // Преобразуем из 24-часового формата в 12-часовой
let minutes = ('0' + date.getMinutes()).slice(-2); // Добавляем ведущий ноль к минутам, если это необходимо
let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
console.log(`${hours}:${minutes} ${ampm}`); */

