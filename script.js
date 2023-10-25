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
    else {
        rollSlider();
    }


    console.log(count)

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
    else {
        rollSlider()
    }
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}


document.querySelector('.accordion-card-container').addEventListener('click', (event) => {

    const curCard = event.target.closest('.accordion-card');
    console.log(curCard);

    const accordionCards = document.querySelectorAll('.accordion-card')
    const accordionImg = document.querySelectorAll('.flexible-img-bg')

    let selectedCard = undefined;
    let selectedImg = undefined;

    accordionCards.forEach((element) => {
        if (element.classList.contains('selected-card')) {
            selectedCard = element;
        }
    })

    accordionImg.forEach((element) => {
        if (element.classList.contains('show')) {
            console.log('true')
            selectedImg = element;
        }
    })

    console.log(selectedImg)

    for (let i = 0; i < accordionCards.length; i++) {
        if (curCard == accordionCards[i] && curCard.classList.contains('selected-card') == false) {
            selectedCard.classList.remove('selected-card');
            curCard.classList.add('selected-card');

            selectedImg.classList.remove('show');
            accordionImg[i].classList.add('show');
        }
    }

})