// ----Задание 1----

/*let string = 'abc12345*]';

function statistics(str) {

    let regexp1 = /[A-Z]/gi;
    let regexp2 = /[0-9]/gi;

    let nums = str.match(regexp2).length;
    let words = str.match(regexp1).length;
    let symbols = str.length - nums - words;

    console.log(`Цифр: ${nums},\nБукв: ${words},\nСимволов: ${symbols}`);

};

statistics(string);*/

// ----Задание 2----

/*let num1 = prompt('Введите двухзначное число:', '');

let arrWord1 = ['одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let arrWord2 = [' один', ' два', ' три', ' четыре', ' пять', ' шесть', ' семь', ' восемь', ' девять'];

function printNum(num) {

    let arrNum = num.split('');

    arrNum = arrNum.map(item => {
        return arrNum.item = +item;
    });

    let result;
    let result2;

    if (arrNum[0] === 1) {
        arrWord1.forEach((item, index, arr) => {
            for (let i = index + 1; i < arr.length; i++) {
                if (arrNum[1] === i) {
                    result = arr[index];
                };
            };
        });
        return console.log(result);
        
    } else {
        arrWord1.forEach((item, index, arr) => {
            for (let i = index + 2; i < arr.length; i++) {
                if (arrNum[0] === i) {
                    result = arr[9 + index];
                };
            }
        });
        if (arrNum[1] === 0) {
            return console.log(result);

        } else {
        arrWord2.forEach((item, index, arr) => {
            for (let i = index + 1; i <= arr.length; i++) {
                if (arrNum[1] === i) {
                    result2 = arr[index];
                    break;
                };
            }
        })};

        return console.log(result + result2);
    };
};

printNum(num1);*/

// ----Задание 3----

/*let text = 'ABc123';

function change(text) {

    let regexp1 = /[A-Z]/g;
    let regexp2 = /[a-z]/g;
    let regexp3 = /[0-9]/g;

    let arrText = text.split('');

    let result = [];

    arrText.forEach(item => {
        if (item.search(regexp1) != -1) {

            result.push(item.toLowerCase());

        } else if (item.search(regexp2) != -1) {

            result.push(item.toUpperCase());

        } else if (item.search(regexp3) != -1) {
            
            result.push(item = '_');
    
        };

    });

    console.log(result);

};

change(text);*/

// ----Задание 4----

/*let text = 'font-size';

function camelCase(text) {

    arrText = text.split('-');

    let result = [];
    let result2;

    arrText.forEach((item, index) => {

        if (index === 1) {

            result2 = item;
            result2.split('').forEach((item, index) => {

                if (index === 0) {
                    result.push(item.toUpperCase());
                } else {
                    result.push(item);
                };
            });

        } else {
            result.push(item);
        };
    });

    console.log(result.join(''));

};

camelCase(text);*/

// ----Задание 5---

/*let text = 'cascading style sheets';

function abbr(text) {

    arrText = text.split(' ');

    let result = [];
    
    arrText.forEach((item, index) => {
        result.push(item[0].toUpperCase())
    });

    console.log(result.join(''));
};

abbr(text);*/

// ----Задание 6---

/*function combine(text) {

    let sum;

    while (true) {
        let value = prompt('Введите строку:', '');
        if (!value) break;
        sum += value;
    }

    return console.log(sum);

};

combine();*/

// ----Задание 7---

/*function calc(text) {

    let regexp = /[0-9]/g;

    let arrText = text.split('');

    let result;
    let sym;

    arrText.forEach(item => {

        if (item.search(regexp) === -1) {
            sym = item;
            arrText = arrText.join('');
            arrText = text.split(sym);
        };
});
        let operators = ['+', '-', '*', '/'];
        operators.forEach(item => {
            if (operators[0] === sym) {
                result = +arrText[0] + +arrText[1];
            };
            if (operators[1] === sym) {
                result = arrText[0] - arrText[1];
            };
            if (operators[2] === sym) {
                result = arrText[0] * arrText[1];
            };
            if (operators[3] === sym) {
                result = arrText[0] / arrText[1];
            };
        });

    console.log(result);
};

calc('45+745');*/

// ----Задание 8---

/*function info(url) {

    let protocol = [];
    let domen = [];
    let way = [];

    let urlArr = url.split('://');


protocol = urlArr[0];
console.log(protocol);

urlArr =  urlArr[1].split('/');
domen = urlArr[0];
console.log(domen);

urlArr.splice(0, 1);
urlArr.forEach(item => {
    way.push(item);
});
way = way.join('/');
console.log('/'+ way +'/');
}

info('https://itstep.org/ua/about');*/

// ----Задание 9---

/*function split(str, sym) {

    let arr = str.split(sym);
    console.log(arr);

};

split('10/08/2020', '/');*/

// ----Задание 10---

/*function pattern(text, p1, p2, p3, p4) {

let arrText = text.split('%');

let item1;
let item2;
let item3;
let item4;

arrText.forEach((item, index) => {
    if (index === 1) {
        item1 = item.split('');
        item1[0] = p1;
        item1 = item1.join('');
    };
    if (index === 2) {
        item2 = item.split('');
        item2[0] = p2;
        item2 = item2.join('');
    };
    if (index === 3) {
        item3 = item.split('');
        item3[0] = p3;
        item3 = item3.join('');
    };
    if (index === 4) {
        item4 = item.split('');
        item4[0] = p4;
        item4 = item4.join('');
    };
    
});

arrText[1] = item1;
arrText[2] = item2;
arrText[3] = item3;
arrText[4] = item4;

arrText = arrText.join('');
console.log(arrText);
}

pattern('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020);*/