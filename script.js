// ----Задание 1----

/*let num1 = +prompt('Введите начало отсчёта:','');
let num2 = +prompt('Введите конец отсчёта:','');
let sum = 0;

for (let i = num1; i <= num2; i++) {
    sum += i;
}
alert(sum);*/

// ----Задание 2----

/*let num1 = +prompt('Введите первое число:','');
let num2 = +prompt('Введите второе число:','');

for (let i = num1; i > 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
        alert(i);
        break;
    }
}*/

// ----Задание 3----

/*let num1 = +prompt('Введите число:','');

for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) alert(i);
}*/

// ----Задание 4----

// let num1 = +prompt('Введите число:', '');

// let result = 0;

// for (let i = 1; ;  ++i) {

//     result = num1 /(10 ** i);
//     if (result < 1) {
//     alert(i);
//     break;
//     }
// }

// ----Задание 5----

/*let result1 = 0;
let result2 = 0;
let result3 = 0;
let resultOdd = 0;
let resultEven = 0;

for (let i = 1; i <= 10; i++) {

    let num = prompt('Введите число:', '');

    if (num == '') {
        continue;
    } else if (num % 2 === 0) {
        resultEven += 1;
    } else {
        resultOdd += 1;
    }

    if (num == '') {
        continue;
    } else if (num == 0) {
        result1 += 1;
    }

    if (num > 0) {
        result2 += 1;
    }

    if (num < 0) {
        result3 += 1;
    }
}
console.log(`Нулей: ${result1}`);
console.log(`Положительнх: ${result2}`);
console.log(`Отрицательных: ${result3}`);
console.log(`Чётных: ${resultEven}`);
console.log(`Нечётных: ${resultOdd}`);*/

// ----Задание 6----

/*let result;

for (let i = 1; ; i++) {

    let num1 = +prompt('Введите число:', '');
    let znak = prompt('Введите знак:', '');
    let num2 = +prompt('Введите число:', '');

    switch (znak) {

        case '+': result = num1 + num2;
        break;

        case '-': result = num1 - num2;
        break;

        case '/': result = num1 / num2;
        break;

        case '*': result = num1 * num2;
        break;
    }

    alert(result);

    let choise = confirm('Желаете продолжить?');

    if (choise === false) break;

}*/

// ----Задание 7----

/*let num = +prompt('Введите число:', '');
let change = +prompt('На сколько цифр сдвинуть:', '');
let result = 0;

for (let i = 1; ; i++) {

    result = num / 10 ** i;

    if (result < 1) {

        let num1 = num % 10 ** (i - change);
        console.log(num1);
        let num2 = (num - num1) / 10 ** (i - change);
        console.log(num2);
        alert(String(num1) + String(num2));
        break;

    }
}*/

// ----Задание 8----

/*let day = prompt('Введите день недели:', 'Пн');
let result;

for (let i = 1; ; i++) {

    switch (day) {

        case 'Пн': result = 'Вторник';
        break;

        case 'Вт': result = 'Среда';
        break;

        case 'Ср': result = 'Четверг';
        break;

        case 'Чт': result = 'Пятница';
        break;

        case 'Пт': result = 'Суббота';
        break;

        case 'Сб': result = 'Воскресенье';
        break;

        case 'Вс': result = 'Понедельник';
        break;
        
    }

let choise = confirm(`${result}: Хотите увидеть следующий день?`);
if (choise === false) break;

}*/

// ----Задание 9----

/*for (let j = 2; j <=9; j++ ) {
for (let i = 1; i <= 10; i++) {

    let result = j * i;
    console.log(`${j} * ${i} = ${result}`);

}
}*/

// ----Задание 10----

/*let N;

for (let i = 100; i >= 1 && i <= 100; i / 2) {
    N = Math.floor(i);

    let answer = prompt(`Ваше число: ${N}?`, '');
    if (answer === 'да') {
        break;
    }
        answer = prompt(`Ваше число больше: ${N}?`, '');

    if (answer === 'да') {
        i += i / 2;
        continue;
    } 
        answer = prompt(`Ваше число меньше: ${N}?`, '');

    if (answer === 'да') {
        i -= i / 2;
    
    } 
}
alert(`Число: ${N}!`);*/