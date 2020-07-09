// ----Задание 1----

/*let car = {
    producer: 'Japan',
    model: 'CX5',
    age: 2012,
    speed: 120,
}*/

// ----Задание 1.1----

/*function infoCar (auto) {
    console.log(`${auto.producer}, ${auto.model}, ${auto.age}, ${auto.speed}`);
}

infoCar(car);*/

// ----Задание 1.2----

/*function timeCount (auto, length) {
    let t = Math.floor(length / auto.speed);
    
    if (t > 4) {
        t = Math.floor(t / 4) + t;
    }
    console.log(t);
}

timeCount(car, 800);*/

// ----Задание 2----

/*let num1 = {
    n1: 30,
    d1: 86,
}
let num2 = {
    n2: 1,
    d2: 6,
}*/

// ----Задание 2.1----

/*function calcSum(number1, number2) {

    let resultD = findDenominator(number1, number2);

    number1.n1 = resultD / number1.d1 * number1.n1;
    number2.n2 = resultD / number2.d2 * number2.n2;

    let resultN = number1.n1 + number2.n2;
    return console.log(`${resultN}/${resultD}`)

}

calcSum(num1, num2);

function findDenominator(number1, number2) {

    for (let i = number1.d1; i > 1; i--) {

        if (number1.d1 % i === 0 && number2.d2 % i === 0) {
            return (number1.d1 * number2.d2) / i;

        } else {
            return  number1.d1 * number2.d2;
        }
    }
}*/

// ----Задание 2.2----

/*function calcDiff(number1, number2) {

    let resultD = findDenominator(number1, number2);

    number1.n1 = resultD / number1.d1 * number1.n1;
    number2.n2 = resultD / number2.d2 * number2.n2;

    let resultN = number1.n1 - number2.n2;
    return console.log(`${resultN}/${resultD}`);

}

calcDiff(num1, num2);

function findDenominator(number1, number2) {

    for (let i = number1.d1; i > 1; i--) {

        if (number1.d1 % i === 0 && number2.d2 % i === 0) {
            return (number1.d1 * number2.d2) / i;

        } else {
            return  number1.d1 * number2.d2;
        }
    }
}*/

// ----Задание 2.3----

/*function calcMultiplication(number1, number2) {

    let resultD = number1.d1 * number2.d2;

    let resultN = number1.n1 * number2.n2;

    return console.log(`${resultN}/${resultD}`);

}

calcMultiplication(num1, num2);*/

// ----Задание 2.4----

/*function calcDivision(number1, number2) {

    let resultD = number1.d1 * number2.n2;

    let resultN = number1.n1 * number2.d2;

    return console.log(`${resultN}/${resultD}`);

}

calcDivision(num1, num2);*/

// ----Задание 2.5----

/*function calcReduction(number) {

    let resultD = 0;
    let resultN = 0;

    for (let i = number.d1; i > 1; i--) {

        if (number.d1 % i === 0 && number.n1 % i === 0) {

            resultD = number.d1 / i;
            resultN = number.n1 / i;

        }

    }
    return console.log(`${resultN}/${resultD}`);
}

calcReduction(num1);*/

// ----Задание 3----

/*let objTime = {
    hours: 2,
    minutes: 30,
    seconds: 45,
}*/

// ----Задание 3.1----

/*function infoTime (time) {
    (time.hours < 10) ? time.hours = '0' + time.hours : time.hours;
    (time.minutes < 10) ? time.minutes = '0' + time.minutes : time.minutes;
    (time.seconds < 10) ? time.seconds = '0' + time.seconds : time.seconds;

return `${time.hours}:${time.minutes}:${time.seconds}`;
}

console.log(infoTime (objTime));*/

// ----Задание 3.2----

/*function changeTime(time, change) {
let timeChange = time.hours * 3600 + time.minutes * 60 + time.seconds + change;

let changeHours = Math.floor(timeChange / 3600);
let changeMinutes = Math.floor(timeChange / 60 - changeHours * 60);
let changeSeconds = Math.floor(timeChange  - changeHours * 3600 - changeMinutes * 60);

(changeHours < 10) ? changeHours = '0' + changeHours : changeHours;
(changeMinutes < 10) ? changeMinutes = '0' + changeMinutes : changeMinutes;
(changeSeconds < 10) ? changeSeconds = '0' + changeSeconds : changeSeconds;

return `${changeHours}:${changeMinutes}:${changeSeconds}`;
}

console.log(changeTime(objTime, 30));*/

// ----Задание 3.3----

/*function changeTime(time, change) {
    let timeChange = time.hours * 60 + time.minutes + change;
    
    let changeHours = Math.floor(timeChange / 60);
    let changeMinutes = Math.floor(timeChange - changeHours * 60);
    
    
    (changeHours < 10) ? changeHours = '0' + changeHours : changeHours;
    (changeMinutes < 10) ? changeMinutes = '0' + changeMinutes : changeMinutes;
    (time.seconds < 10) ? time.seconds = '0' + time.seconds : time.seconds;
    
    return `${changeHours}:${changeMinutes}:${time.seconds}`;
    }
    
    console.log(changeTime(objTime, 30));*/

    // ----Задание 3.4----

/*function changeTime(time, change) {
    
    let changeHours = time.hours + change;
    
    
    
    (changeHours < 10) ? changeHours = '0' + changeHours : changeHours;
    (time.minutes < 10) ? time.minutes = '0' + time.minutes : time.minutes;
    (time.seconds < 10) ? time.seconds = '0' + time.seconds : time.seconds;
    
    return `${changeHours}:${time.minutes}:${time.seconds}`;
    }
    
    console.log(changeTime(objTime, 3));*/