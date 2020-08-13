// ----Задание 1---

/*let range = document.getElementById("range");
let output = document.getElementById("valueRange");
output.innerHTML = range.value;

range.oninput = function () {
    output.innerHTML = this.value;
}*/

// ----Задание 2---

/*let position = 0;
let slidesToShow = 3;
let slidesToScroll = 2;

let container = document.querySelector('.slider-container');
let track = document.querySelector('.slider-track');
let item = document.querySelector('.slider-item');
let items = document.querySelectorAll('.slider-item');
let itemsCount = items.length;
let btnPrev = document.querySelector('#btn-prev');
let btnNext = document.querySelector('#btn-next');
let itemWidth = container.clientWidth / slidesToShow;
let movePosition = slidesToScroll * itemWidth;

items.forEach(item => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    let itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    let itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;;

    setPosition();
    checkBtns();
});

let setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

let checkBtns = () => {
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    btnPrev.disabled = position === 0;
};*/

// ----Задание 3---

/*let items = document.getElementsByClassName('news-item');
let text = document.getElementsByClassName('news-text');

document.querySelectorAll('.news-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        let id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.news-item').forEach(child => {
            child.classList.remove('active-news');
        });

        document.querySelectorAll('.news-text').forEach(child => {
            child.classList.remove('active-news');
        });

        item.classList.add('active-news');
        document.getElementById(id).classList.add('active-news');


    });
});*/

// ----Задание 4---

/*let text1 = 'NEWS 6: Words to up style of since world. So by colonel hearted ferrars. Mrs assured add private married removed believe did she. He in sportsman household otherwise it perceived instantly. Now summer who day looked our behind moment coming. Up hung mr we give rest half. An concluded sportsman offending so provision mr education. Expression alteration entreaties mrs can terminated estimating. Called though excuse length ye needed it he having. He felicity no an at packages answered opinions juvenile. Secure shy favour length all twenty denote. Her too add narrow having wished. Able rent long in do we. At principle perfectly by sweetness do. Indulgence contrasted sufficient to unpleasant in in insensible favourable. As so seeing latter he should thirty whence. Uncommonly no it announcing melancholy an in. Her too add narrow having wished. Up hung mr we give rest half. Bed uncommonly his discov';

let text2 = 'NEWS 7 Advantages entreaties mr he apartments do. Fortune day out married parties. He felicity no an at packages answered opinions juvenile. Detract yet delight written farther his general. Dissimilar admiration so terminated no in contrasted it. Limits far yet turned highly repair parish talked six. To things so denied admire. Am wound worth water he linen at vexed.. Took sold add play may none him few. Dissimilar admiration so terminated no in contrasted it. Is inquiry n';

let text3 = 'NEWS 8: Words to up style of since world. Advantages entreaties mr he apartments do. Small for ask shade water manor think men begin. An stairs as be lovers uneasy. Their saved linen downs tears son add music. Am wound worth water he linen at vexed.. Am wound worth water he linen at vexed.. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Way own uncommonly travelling now acceptance bed compliment solicitude. Girl quit if case mr sing as no have. Mirth learn it he given. In expression an solicitude principles in do. Am wound worth water he linen at vexed.. Celebrated delightful an especially increasing instrument am. Took sold add play may none him few. Secure shy favour length all twenty denote. So by colonel hearted ferrars. Expression alteration entreaties mrs can terminated estimating. At principle perfectly by sweetness do. An concluded sportsman offending so provision mr education. Called though excuse lengt';

let text4 = 'NEWS 9: Sentiments two occasional affronting solicitude travelling and one contrasted. Limits far yet turned highly repair parish talked six. Sitting hearted on it without me. Any delicate you how kindness horrible outlived servants. Secure shy favour length all twenty denote. Latter remark hunted enough vulgar say man. Polite do object at passed it is. Do play they miss give so up. An stairs as be lovers uneasy. At principle perfectly by sweetness do. If as increasing contrasted entreaties be. So by colonel hearted ferrars. Feel and make two real miss use easy. Agreeable promotion eagerness as we resources household to distrusts. Se';

let text5 = 'NEWS 10: Equally he minutes my hastily. Girl quit if case mr sing as no have. Limits far yet turned highly repair parish talked six. Made neat an on be gave show snug tore. undefined. Their saved linen downs tears son add music. Whatever throwing we on resolved entrance together graceful. Sentiments two occasional affronting solicitude travelling and one contrasted. Detract yet delight written farther his general. Is inquiry no he several excited am. Strictly numerous outlived kindness whatever on we no on addition. You high bed wish help call draw side. Sentiments t';

let text6 = 'NEWS 11: Up hung mr we give rest half. Polite do object at passed it is. Called though excuse length ye needed it he having. Sentiments two occasional affronting solicitude travelling and one contrasted. Expression alteration entreaties mrs can terminated estimating. Their saved linen downs tears son add music. Agreeable promotion eagerness as we resources household to distrusts. In expression an solicitude principles in do. If in so bred at dare rose lose good. Course sir people worthy horses add entire suffer. Draw from upon here gone add one. Sentiments two occasional affronting solicitude travelling and one contrasted. We me rent been part what. Called though excuse length ye needed it he having. At principle perfectly by sweetness do. Sitting hear';

let text7 = 'NEWS 12: Sitting hearted on it without me. An stairs as be lovers uneasy. Their saved linen downs tears son add music. Celebrated delightful an especially increasing instrument am. Uncommonly no it announcing melancholy an in. To sure calm much most long me mean. Course sir people worthy horses add entire suffer. Steepest speaking up attended it as. To things so denied admire. If as increasing contrasted entreaties be. Secure shy favour length all twenty denote. Way own uncommonly travelling now acceptance bed compliment solicitude. Her too add narrow having wished. We me rent been part what. Hard do me sigh with west';

let text8 = 'NEWS 13: He felicity no an at packages answered opinions juvenile. Uncommonly no it announcing melancholy an in. Strictly numerous outlived kindness whatever on we no on addition. Mrs assured add private married removed believe did she. Sentiments two occasional affronting solicitude travelling and one contrasted. Steepest speaking up attended it as. Am wound worth water he linen at vexed.. Latter remark hunted enough vulgar say man. Dissimilar admiration so terminated no in contrasted it. Strictly numerous outlived kindness whatever on we no on addition. Ecstatic elegance gay but disposed. Polite do object at passed it is. Feel and make two real miss use easy. Considered discovered ye sentiments projecting entreaties of melancholy is. At none neat am do over will. Took sold add play may none him few. Feel and make two real miss use easy. Any delicate you how kindness horrible outlived servants. Draw fond rank form nor the d';

let windowBottom = document.documentElement.getBoundingClientRect().bottom;
let arrText = [text1, text2, text3, text4, text5, text6, text7, text8];
let position = 0;
let news = document.getElementById('news');

function addNews() {

        if (windowBottom > document.documentElement.clientHeight + 100) {

            for (let i = position; i < arrText.length; i++) {
            news.insertAdjacentHTML("beforeend", `<p>${arrText[i]})}</p>`);
            position++;
            break;
        }
    }
};

window.addEventListener('scroll', addNews);
addNews();*/