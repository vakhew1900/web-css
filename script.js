const btnToggleTheme = document.querySelector('.btn-toggle-theme');
const body = document.querySelector('body');
btnToggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
});


const btnAsideMenu = document.querySelector('.menu-list-btn');
const asideMenu = document.querySelector('.aside-menu');
btnAsideMenu.addEventListener('click', () => {
  asideMenu.classList.add('show');
});

const btnCloseAsideMenu = document.querySelector('.aside-menu .close');
btnCloseAsideMenu.addEventListener('click', () => {
  asideMenu.classList.remove('show');
});


const images = document.querySelectorAll('.slide');
const sliderLine = document.querySelector('.slider');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider-wrapper').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.btn-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.btn-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}