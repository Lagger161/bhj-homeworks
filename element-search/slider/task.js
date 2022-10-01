let sliderItems = Array.from(document.getElementsByClassName("slider__item"));
let sliderNext = document.querySelector(".slider__arrow.slider__arrow_next");
let sliderPrev = document.querySelector(".slider__arrow.slider__arrow_prev");
let position = 0;

function activeSlide(num) {
    active = sliderItems.findIndex((item) => item.className == "slider__item slider__item_active");
    sliderItems[active].className = "slider__item";
    if (num < 0) {
        num = sliderItems.length - 1;
    } else if (num > sliderItems.length - 1) {
        num = 0;
    }
    position = num;
    sliderItems[position].className = "slider__item slider__item_active";
}

sliderItems[position].className = "slider__item slider__item_active";

sliderNext.onclick = function() {
    activeSlide(++position)
}

sliderPrev.onclick = function() {
    activeSlide(--position);
}

