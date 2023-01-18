let span1 = document.getElementById('span1');
let styl1 = document.getElementById('styl1');
let span2 = document.getElementById('span2');
let styl2 = document.getElementById('styl2');
let span3 = document.getElementById('span3');
let styl3 = document.getElementById('styl3');

let add_click_block1 = function (params) {
    let wrap1 = document.getElementById('wrap1');
    let circle1 = document.getElementById('circle1');


    wrap1.classList.toggle('_select');
    circle1.classList.toggle('_change-bg');

}





let add_click_block2 = function (params) {
    let wrap2 = document.getElementById('wrap2');
    let circle2 = document.getElementById('circle2');

    wrap2.classList.toggle('_select');
    circle2.classList.toggle('_change-bg');

}

let add_click_block3 = function (params) {
    let wrap3 = document.getElementById('wrap3');
    let circle3 = document.getElementById('circle3');
    let pt2 = document.getElementById("pt2");
    wrap3.style.backgroundImage = "linear-gradient(135deg,transparent 31px,#a3a2a2 0)";
    circle3.style.backgroundColor = "#a3a2a2"
    pt2.textContent = "Нет в наличии ;("
}


span1.addEventListener('click', add_click_block1);
styl1.addEventListener('click', add_click_block1);
span2.addEventListener('click', add_click_block2);
styl2.addEventListener('click', add_click_block2);
span3.addEventListener('click', add_click_block3);
styl3.addEventListener('click', add_click_block3);