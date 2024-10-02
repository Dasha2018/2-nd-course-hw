//1

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] == 10) { break };
}

//2

const numb = [1, 5, 4, 10, 0, 3];

console.log(numb.indexOf(4));

//3

const numbs = [1, 3, 5, 10, 20];
console.log(numbs.join(' '));

//4

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i].push(1);
    }
}
console.log(arr);

//5

let arr5 = [1, 1, 1];
arr5.push(2, 2, 2);

console.log(arr5);

//6

let arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
console.log(arr6);
const filteredArr6 = arr6.filter(arr6 => arr6 != 'a');
console.log(filteredArr6);

//7

const arr7 = [9, 8, 7, 6, 5];
const userGuess = +prompt('Введите число');
if (arr7.includes(userGuess)) {
    alert('Угадал!');
}
else {
    alert('Не угадал!');
}


//8
let arr8 = 'abcdef';
arr8 = arr8.split('');
console.log(arr8);
arr8.reverse();
arr8 = arr8.join('');
console.log(arr8);



//9

const arr9 = [[1, 2, 3], [4, 5, 6]];
const newarr9 = [];

for (let i = 0; i < arr9.length; i++) {
    newarr9.push(...arr9[i]);
}

console.log(newarr9);


//10

const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i + 1]) {
        console.log(arr10[i] + arr10[i + 1]);
    }
}

//11

function sqr(arr11) {
    return arr11.map(x => x ** 2);
}
console.log(sqr([1, 2, 3, 4, 5]));

//12

const getLength = arr12 => arr12.map(str => str.length);

console.log(getLength(['wind', 'rainy', 'sun']));

//13

function negativeNumbers(arr13) {
    return arr13.filter(item => item < 0);
}
console.log(negativeNumbers([1, 2, 5, 4, 6, -8, -4, -1, 2]));

//14

function randomNumber() {
    return Math.floor(Math.random() * 10);
}
const arr14 = [];
for (let i = 0; i < 10; i++) {
    arr14.push(randomNumber());
}
console.log(arr14);

const evenArr14 = [];
for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] % 2 == 0) {
        evenArr14.push(arr14[i]);
    }
}
console.log(evenArr14);


//15
function randomNumber15() {
    return Math.floor(Math.random() * 10);
}
const arr15 = [];
for (let i = 0; i < 6; i++) {
    arr15.push(randomNumber15());
}
console.log(arr15);
console.log(arr15.reduce((a, b) => a + b) / arr15.length);



