const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider_section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('#btn_right');
const btnRight = document.querySelector('#btn_left');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function mover() {
    let sliderSectionFirst = document.querySelectorAll('.slider_section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';

    setTimeout(function() {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500); 
}

btnLeft.addEventListener("click", function(){
    slider.style.back
});