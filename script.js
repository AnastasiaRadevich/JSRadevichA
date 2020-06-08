// ----Задание 1----

/*let age = prompt('Введите возраст:', '');

if (age < 12) {
    alert('Ребёнок');
} else if (age < 18) {
    alert('Подросток');
} else if (age < 60) {
    alert('Взрослый');
} else {
    alert('Пенсионер');
}*/

//----Задание 2----

/*let num = +prompt('Введите число от 0 до 9:', '');
let result;

switch (num) {
    case 0:
        result = ')';
        break;
    case 1:
        result = '!';
        break;
    case 2:
        result = '@';
        break;
    case 3:
        result = '#';
        break;
    case 4:
        result = '$';
        break;
    case 5:
        result = '%';
        break;
    case 6:
        result = '^';
        break;
    case 7:
        result = '&';
        break;
    case 8:
        result = '*';
        break;
    case 9:
        result = '(';
        break;
    default:
        break;
}
alert(result);*/

//----Задание 3----

/*let num = +prompt('Введите трёхзначное число:', '');

let a = num % 10;
let b = (num - a) / 10 % 10;
let c = (num - (num % 100)) / 100;

if (num == '') {
    alert('Число задано не верно');
}
(c === b || c === a || b === a || c === b === a) ? alert('Есть одинаковые числа') : alert('Нет одинаковых чисел');*/

//----Задание 4----

/*let year = +prompt('Введите год:', '');

if  (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    alert('Год високосный!');
} else {
    alert('Год невисокосный!');
}*/

//----Задание 5----

/*let num = +prompt('Введите пятизначное число:', '');

let a = num % 100;
let b = (num - (num % 1000)) / 1000;

if (b - b % 10 === a % 10 * 10) {
    alert('Это палиндром!');
} else {
    alert('Это не палиндром.');
}*/


//----Задание 6----

/*let sum = +prompt('Введите сумму в USD:', '');
let val = prompt('Введите валюту EUR, UAN, AZN:', '');

const eur = 0.8809;
const uan = 26.5963;
const azn = 1.70;

switch (val) {
    case 'EUR':
        alert(`${sum * eur}`);
        break;
    case 'UAN':
        alert(`${sum * uan}`);
        break;
    case 'AZN':
        alert(`${sum * azn}`);
        break;
    default:
        alert(`Выберите другую валюту!`);
        break;
}*/

//----Задание 7----

/*let sum = +prompt('Введите сумму:', '');

if (sum >= 200 && sum < 300) {
    alert(`Сумма к оплате ${sum * 0.97}`);
} else if (sum >= 300 && sum < 500) {
    alert(`Сумма к оплате ${sum * 0.95}`);
} else if (sum >= 500) {
    alert(`Сумма к оплате ${sum * 0.93}`);
} else {
    alert(`Сумма к оплате ${sum}`);
}*/

//----Задание 8----

/*let l = +prompt('Введите длину окружности:', '');
let P = +prompt('Введите периметр квадрата:', '');

const pi = 3.14;
let r = l / 2 * 3.14;
let a = p / 4;

(2 * r == a) ? alert('Окружность вписывается в квадрат!') : alert('Окружность не вписывается в квадрат!');*/

//----Задание 9----

/*let point = 0;

let question1 = prompt('Вставить правильную букву - мыш_ а) - и, б) - ы, в) - е: ', '');
let question2 = prompt('Вставить правильную букву - щ_ка а) - ы, б) - у, в) - ю: ', '');
let question3 = prompt('Вставить правильную букву - ч_до а) - у, б) - ю, в) - и: ', '');

    (question1 == 'а') ? point += 2 : point == 0;
    (question1 == 'б') ? point += 2 : point == 0;
    (question3 == 'а') ? point += 2 : point == 0;

    alert(`Вы набрали: ${point} баллов!`);*/

//----Задание 10----

/*let day = +prompt('Введите день:','1');
let month = +prompt('Введите месяц:', '3');
let year = +prompt('Введите год:', '2010');

if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (day === 0 || day > 31) {
                alert('Ошибка!');
            } else if (day > 0 && day < 31) {
                alert(`${++day}.${month}.${year}`);
            } else if (day === 31) {
                alert(`${day = 1}.${++month}.${year}`);
            }
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            if (day === 0 || day > 30) {
                alert('Ошибка!');
            } else if (day > 0 && day < 30) {
                alert(`${++day}.${month}.${year}`);
            } else if (day === 30) {
                alert(`${day = 1}.${++month}.${year}`);
            }
            break;

        case 2:
            if (day === 0 || day > 29) {
                alert('Ошибка!');
            } else if (day > 0 && day < 29) {
                alert(`${++day}.${month}.${year}`);
            } else if (day === 29) {
                alert(`${day = 1}.${++month}.${year}`);
            }
            break;

        case 12:
            if (day === 0 || day > 31) {
                alert('Ошибка!');
            } else if (day > 0 && day < 31) {
                alert(`${++day}.${month}.${year}`);
            } else if (day === 31) {
                alert(`${day = 1}.${month = 1}.${++year}`);
            }
            break;
    }
} else {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (day === 0 || day > 31) {
                alert('Ошибка!');
            } else if (day > 0 && day < 31) {
                alert(`${++day}.${month}.${year}`);
            } else if (day === 31) {
                alert(`${day = 1}.${++month}.${year}`);
            }
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            if (day === 0 || day > 30) {
                alert('Ошибка!');
            } else if (day > 0 && day < 30) {
                alert(`${++day}.${month}.${year}`);
            } else if (day === 30) {
                alert(`${day = 1}.${++month}.${year}`);
            }
            break;

        case 2:
            if (day === 0 || day > 28) {
                alert('Ошибка!');
            } else if (day > 0 && day < 28) {
                alert(`${++day}.${month}.${year}`);
            } else if (day === 28) {
                alert(`${day = 1}.${++month}.${year}`);
            }
            break;

        case 12:
            if (day === 0 || day > 31) {
                alert('Ошибка!');
            } else if (day > 0 && day < 31) {
                alert(`${++day}.${month}.${year}`);
            } else if (day === 31) {
                alert(`${day = 1}.${month = 1}.${++year}`);
            }
            break;
    }
}*/