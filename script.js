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


let count = 0;
let width;

const sliderLine = document.querySelector('.slider');
firstSlide = sliderLine.firstElementChild.cloneNode(true);
lastSlide = sliderLine.lastElementChild.cloneNode(true);

 sliderLine.insertBefore(lastSlide, sliderLine.firstElementChild);
 sliderLine.appendChild(firstSlide);

const images = document.querySelectorAll('.slide');

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
        count = 1;

        sliderLine.classList.add('slider-transition-off')
        setTimeout(() => {
            console.log(sliderLine.classList)
            rollSlider();
            sliderLine.classList.remove('slider-transition-off')
            count++;
            rollSlider();
        }, 20)
    }
    console.log(count)
    rollSlider();
    
});

document.querySelector('.btn-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 2;

        sliderLine.classList.add('slider-transition-off')
        setTimeout(() => {
            console.log(sliderLine.classList)
            rollSlider();
            sliderLine.classList.remove('slider-transition-off')
            count--;
            rollSlider();
        }, 20)
    }

    console.log(count)
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
