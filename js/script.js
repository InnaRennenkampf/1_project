const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{ //при клике на btn
    nav.classList.toggle('menu-open'); //добавить класс nav
});