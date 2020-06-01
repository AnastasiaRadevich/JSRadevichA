// ----Задание 1----

/*  let name = prompt('Введите своё имя:', '');
    alert(`Привет, ${name}!`); */


//----Задание 2----

/*  let year = prompt('Введите год рождения:', '');
    const currentYear = 2020;
    let result = currentYear - year;

    alert(`Вам ${result} лет!`); */


//----Задание 3----

/*  let a = prompt('Введите сторону квадрата:', '');
    let result = 4 * a;

    alert(`Периметр квардрата: ${result}`); */


//----Задание 4----

/*  let r = prompt('Введите радиус окружности:', '');
    const pi = 3.14;
    let result = pi * r ** 2;

    alert(`Площадь окружности: ${result}`); */
    

//----Задание 5----

/*  let distance = prompt('Введите раcстояние между населёнными пунктами, км:', '');
    let time = prompt('Введите желаемое время пути, ч:', '');
    let speed = distance / time;

    alert(`Вам необходимо двигаться со скоростью ${speed} км/ч!`); */


//----Задание 6----

/*  let usd = prompt('Введите сумму в долларах:', '');
    const eur = 0.91;
    let result = eur * usd;

    alert(`У вас ${result} евро!`); */


//----Задание 7----

/*  let memory = prompt('Введите объём флешки, Гб', '');
    const mb = 1000;
    const file = 820;
    let result = memory * mb / file;

    alert(`На флешке помещается ${Math.floor(result)} файлов по 820 Мб!`); */


//----Задание 8----

/*  let money = prompt('Введите количество денег:', '');
    let cost = prompt('Введите стоимость шоколадки:', '');
    let chocolate = money / cost;
    let balance = money % cost;

    alert(`Вы можете купить ${Math.floor(chocolate)}, у вас останется ${balance}`); */


//----Задание 9----

/*  let num1 = prompt('Введите трёхзначное число:', '');
    let x = num1 % 10;
    let y = num1 - x; 
    let num2 = y / 10;

    let result = x * 100 + num2;
    
    alert(`Результат:${result}`); */
    

//----Задание 10----

/*  let num1 = prompt('Введите число:', '');
    let num2 = num1 % 2;

    alert((num2 && 'Нечётное') || (!num2 && 'Чётное')); */