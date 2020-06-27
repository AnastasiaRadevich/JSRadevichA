// ----Задание 1----

/*function getNumber(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}

let result = getNumber(3, 5);
alert(result);*/

// ----Задание 2----

/*function getFactorial(num) {
    let result = 1;
    for(i = 1; i <= num; i++) {
        result *= i;
        console.log(result);
    }
    return result;
}

alert(getFactorial(5));*/

// ----Задание 3----

/*function createNumber(num1, num2, num3) {
    return String(num1) + String(num2) + String(num3);
}

alert(createNumber(5, 8, 9));*/

// ----Задание 4----

/*function calcArea(a, b) {
    if (b === undefined) {
        return a * a;
    }
    return a * b;
}

let result = calcArea(3, 7);
alert(result);*/

// ----Задание 5----

/*function checkPerfectNumber(num) {

    let result = 0;

    for (i = 1; i < num; i++) {
        if (num % i === 0)
            result += i;
    }

    if (num === result) {
        return true;
    } else {
        return false;
    }
}

alert(checkPerfectNumber(28));*/

// ----Задание 6----

/*function checkPerfectNumber(num) {

    let result = 0;

    for (i = 1; i < num; i++) {
        if (num % i === 0)
            result += i;
    }

    if (num === result) {
        return alert(num);
    
}
}

function getPerfectNumber(num1, num2) {

    for (i = num1; i <= num2; i++) {
    checkPerfectNumber(i);
    }
}

getPerfectNumber(1, 32);*/

// ----Задание 7----

/*function getTime(hour, min, sec) {
    (hour === undefined) ? hour = '00' : null;
    (min === undefined) ? min = '00' : null;
    (sec === undefined) ? sec = '00' : null;
    return alert(`${hour}:${min}:${sec}`);
}

getTime(3, 6);*/

// ----Задание 8----

/*function getTime(hour, min, sec) {
    hour *= 3600;
    min *= 60;
    return alert(hour + min + sec);
}

getTime(3, 6, 14);*/

// ----Задание 9----

/*function getTime(time) {

    hour = Math.floor(time / 3600);
    min = Math.floor((time - hour * 3600) / 60);
    sec = time - hour * 3600 - min * 60;
    return alert(`${hour}:${min}:${sec}`);
}

getTime(11174);*/

// ----Задание 10----

/*function getTime(hour, min, sec) {
    hour *= 3600;
    min *= 60;
    return hour + min + sec;
}

function resultTime(time) {

    hour = Math.floor(time / 3600);
    min = Math.floor((time - hour * 3600) / 60);
    sec = time - hour * 3600 - min * 60;
    return alert(`${hour}:${min}:${sec}`);
}

function differenceTime(h1, m1, s1, h2, m2, s2) {

    let result1 = getTime(h1, m1, s1);
    let result2 = getTime(h2, m2, s2);

    resultTime(result1 - result2);
}

differenceTime(5, 13, 10, 3, 3, 3);*/