// ----Задание 1----

/*let productList = [
    {
        name: 'Tea',
        quantity: 3,
        bought: false,
    },

    {
        name: 'Coffee',
        quantity: 1,
        bought: true,
    },

    {
        name: 'Juice',
        quantity: 5,
        bought: false,
    },

    {
        name: 'Water',
        quantity: 10,
        bought: true,
    },

    {
        name: 'Lemonade',
        quantity: 7,
        bought: true,
    },
];*/

// ----Задание 1.1----

/*productList.sort((product1, product2) => {

    return product1.bought - product2.bought;

});
console.log(productList);*/

// ----Задание 1.2----

/*let addProduct = function (arr) {

    let name = prompt('Введите название товара:', '');
    let quantity = +prompt('Введите количество товара:', '');

    let newArr = arr.findIndex(arr => {

        if (arr.name === name) {
            return true;
        }
    });

    if (newArr !== -1) {
        arr[newArr].quantity += quantity;
    } else {
        arr.push({
            ['name']: name,
            ['quantity']: quantity,
            ['bought']: false,
        });

    };
    console.log(arr);
};
addProduct(productList);*/

// ----Задание 1.3----

/*let nameProduct = prompt('Введите название товара:', '');

let buyProduct = function (nameProduct) {

    productList = productList.map((product) => {
        if (product.name === nameProduct) {
        product.bought = true;
        return console.log(productList);
    }
    });
};
buyProduct(nameProduct);*/

// ----Задание 2----

/*let cheque = [
    {
        name: 'Лимон',
        cost: 4,
        quantity: 2
    },

    {
        name: 'Хлеб',
        cost: 1,
        quantity: 1
    },

    {
        name: 'Яйца',
        cost: 2,
        quantity: 2
    },

    {
        name: 'Колбаса',
        cost: 5,
        quantity: 1
    }
];*/

// ----Задание 2.1----

/*function print(productList) {
    productList.forEach(product => {
        console.log(product);
    });
};

print(cheque);*/

// ----Задание 2.2----

/*function sum(productList) {
    let result = productList.reduce((sum, product) => sum + product.cost, 0);
    console.log(result);
}
sum(cheque);*/

// ----Задание 2.3----

/*function max(productList) {
    productList.sort((product1, product2) => {
        return (product1.cost < product2.cost ) ? -1 : 1;
    });

    return console.log(productList[3]);
}

max(cheque);*/

// ----Задание 2.4----

/*function averageCost(productList) {
    let result = productList.reduce((sum, product) => sum + product.cost, 0);
    result = result / productList.length;
    console.log(result);
}
averageCost(cheque);*/

// ----Задание 3----

/*let style = [
    {
        name: 'color',
        value: 'red'
    },

    {
        name: 'font-size',
        value: '50px'
    },

    {
        name: 'text-decoration',
        value: 'underline'
    },
];

let text = 'Good morning!';
function textStyle(arr, text) {


    let styles = style.map((item) => {
            return item.name + ":" + item.value;
        })
        
        .join(";");
        console.log(styles);

    document.write(`<p style = "${styles}">${text}</p>`)

}

textStyle(style, text);*/

// ----Задание 4----

/*let auditorium = [
    {
    name: 'Библиотека',
    quantity: 20,
    secondName: 'Химический факультет'
    },

    {
        name: 'Лаборатория',
        quantity: 10,
        secondName: 'Химический факультет'
    },

    {
        name: 'Лекторий',
        quantity: 20,
        secondName: 'Физический факультет'
    },

    {
        name: 'Читальный зал',
        quantity: 15,
        secondName: 'Биологический факультет'
    }
];*/

// ----Задание 4.1----

/*function print(list) {
    list.forEach(aud => {
        console.log(aud);
    });
};

print(auditorium);*/

// ----Задание 4.2----

/*function print(list, name) {
    list.filter(aud => {
        if (aud.secondName === name) {
            console.log(aud);
    }});
};

print(auditorium, 'Химический факультет');*/

// ----Задание 4.3----

/*let group = {
    name: 'хим2020',
    quantity: 15,
    secondName:'Химический факультет'
};

function checkGroup (list, objGroup) {
    list.filter(aud => {
        if (aud.secondName === objGroup.secondName && aud.quantity >= objGroup.quantity) {
            console.log(aud);
    }});
};

checkGroup(auditorium, group);*/

// ----Задание 4.4----

/*function sortAuditorium (list) {
    list.sort((aud1, aud2) => {
        return aud1.quantity - aud2.quantity;
    });
    console.log(list);
};

sortAuditorium(auditorium);*/

// ----Задание 4.5----

/*function sortAuditorium (list) {
    list.sort((aud1, aud2) => {
        return (aud1.name < aud2.name) ? -1 : 1;
    });
    console.log(list);
};

sortAuditorium(auditorium);*/