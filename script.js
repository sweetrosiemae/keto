//Scroll In Package
AOS.init();

//carbs title animation
setTimeout(function () {
    document.querySelector('#carbs').classList.remove('hide');
}, 1000);

//gallery
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slider = document.querySelector('.slider');

let elementsCount = 9;
let current = 1;
let slideWidth = 400;
let shift = 0;

next.addEventListener('click', () => {
    if (current < elementsCount) {
        slider.classList.toggle('move');
        shift += slideWidth;
        slider.style.transform = `translateX(-${shift}px)`;
        current++;
    } else {
        shift = 0;
        current = 1;
        slider.style.transform = `translateX(${shift}px)`;
    };
});

prev.addEventListener('click', () => {
    if (current > 1) {
        slider.classList.toggle('move');
        shift -= slideWidth;
        current--;
        slider.style.transform = `translateX(-${shift}px)`;
    } else if (current === 1) {
        shift = elementsCount * slideWidth - slideWidth;
        slider.classList.toggle('move');
        slider.style.transform = `translateX(-${shift}px)`;
        current = elementsCount;
    };
});