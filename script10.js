// ----Задание 1---

/*text.oninput = function() {
    let num = /[0-9]/g;
    text.value = text.value.replace(num, '');
}*/

// ----Задание 2---

/*function show() {
    modal.style.visibility = 'visible';
}

function hide() {
    modal.style.visibility = 'hidden';
}

let modal = document.getElementById('modal');
let btn2 = document.getElementById('btn-2');
let btn1 = document.getElementById('btn-1');

btn2.addEventListener('click', hide);
btn1.addEventListener('click', show);*/

// ----Задание 3---

/*field.onclick = function(event) {

    let ballCoords = {
        top: event.clientY  - ball.clientHeight / 2,
        left: event.clientX  - ball.clientWidth / 2,
    };

    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.top < 0) ballCoords.top = 0;

    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }


    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
    
}*/

// ----Задание 4---

/*let circleColl = document.getElementsByClassName('circle');

let btn = document.getElementById('btn');
let position = 0;

function changeLigth() {
    circleColl[position].className = 'circle';
    position++;

    if (position > 2) {
        position = 0;
    }

    let currentCirle = circleColl[position];
    currentCirle.classList.add(currentCirle.getAttribute("color"));
}
btn.addEventListener('click', changeLigth);*/