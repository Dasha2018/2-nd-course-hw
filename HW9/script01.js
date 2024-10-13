//1

const title = document.querySelector('h1');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    // Проверяем видимость заголовка
    if (title.style.display === 'none') {
        // Если заголовок скрыт, показываем его
        title.style.display = 'block';
    } else {
        // Иначе скрываем 
        title.style.display = 'none';
    }
})

console.log(title);
console.log(btn);


//2
const paragraf = document.querySelector('p');
const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => {
    paragraf.style.color = 'blue';
})

console.log(paragraf);
console.log(btn1);

//3
// Используйте метод  querySelector для получения ссылки на заголовок и кнопку (для h1 в первом задании)
const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
    if (title) {
        title.textContent = 'Привет, мир!';
    }
})

console.log(btn2);

//4

const allDescriptions = document.querySelectorAll('.description');
console.log(allDescriptions);
allDescriptions.forEach(description => {
    description.textContent = 'Измененный текст';
});

//5

const allDescriptions1 = document.querySelectorAll('.description1');
const par1 = document.querySelector('.par1');
const par2 = document.querySelector('.par2');
const par3 = document.querySelector('.par3');
console.log(allDescriptions1);
console.log(par1);
console.log(par2);
console.log(par3);

allDescriptions1.forEach(description1 => {
    description1.textContent = 'Новый текст';
});

//6

const newP = document.createElement('p');
const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => {
    newP.textContent = 'Новый абзац';
    document.body.appendChild(newP);
})

//7

const firstDescription = document.querySelector('.description2');
const btn4 = document.querySelector('#btn4');
console.log(firstDescription);

btn4.addEventListener('click', () => {
    firstDescription.remove();
})
