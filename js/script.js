
let number = 5;
const leftBorderWidht = 1;

number = 10;
console.log(number);

// const obj = {
//     a:50
// };
// // obj.a = 10;

// // console.log(obj);

alert(5);
[].push('a');

const obj = {
    name:"Mila",
    age: '30',
    isMarried: true
};

const result = confirm('Are you here?');
console.log(result);

const answer = prompt('Вам есть 18?','18');
console.log(typeof(prompt));

const answers = [];
answers[0] = prompt('Как ваше имя?','');
answers[1] = prompt('Как ваше фАМИЛИЯ','');
answers[2] = prompt('Сколько вам лет?','');

// document.write(answers);

console.log(typeof(answers));

// урок 008 интерпляция - внутри строки вставляем переменную
const category = 'toys';

console.log(`https://someurl.com/${category}`/5);

const user = 'Ivan';
alert(`Привет, ${user}`);

//УРОК 009 операторы конгидинация   второй + унарный(использует один аргумент для своей работы) изменяет строчный элемент на числовой

console.log('arr' + '-object');
console.log(4 + '5');

// инклимет уменшает на единицу
let incr = 10;
    decr = 10;
// оператор инкримента +1 постфиксельные
incr++;  
// оператор декримента -1 постфиксельные
decr--;
// оператор инкримента +1 префиксельные
++incr; 
// оператор инкримента -1 префиксельные
--decr;

console.log(incr);
console.log(decr);

console.log(5%2);
// = присваевание (в переменную присваивают значение)
// == сравнение
// ===строгое сравнение (сравнивает и тип данных)

console.log(2*4==8);
console.log(2*4==='8');

console.log(2 + 2*2===8);

console.log(2 + 2 * 2 != 8); //не равен из за !
// && //оператор И работае когда два вырожения являются правдивыми 
// || //оператор ИЛИ когда хоть один элемент правдивый

// const isChecked = true,
//     isClose = false;

// console.log(isChecked && isClose);

// const isChecked = true,
//       isClose = false;

// console.log(isChecked || isClose);

// ! преыращает в отрицание
const isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);