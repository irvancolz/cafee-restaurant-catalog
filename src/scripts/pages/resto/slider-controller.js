/* eslint-disable no-undef */
const Slider = {
  init() {
    const slideSpace = document.querySelector(
      ".favourite-restaurant__slider"
    ).clientWidth;
    const prevSlide = document.querySelector(
      '.slider__nav button[aria-label="previous slide"]'
    );
    const nextSlide = document.querySelector(
      '.slider__nav button[aria-label="next slide"]'
    );
    const sliderContainer = document.getElementById("restaurant-slider");

    nextSlide.addEventListener("click", (e) => {
      this.__slideNext(slideSpace, sliderContainer);
    });
    prevSlide.addEventListener("click", (e) => {
      this.__slidePrevious(slideSpace, sliderContainer);
    });
  },
  __slidePrevious(space, slider) {
    const style = getComputedStyle(slider);
    const matrix = new WebKitCSSMatrix(style.transform);
    const currentTranslate = matrix.m41;
    const translateValue = currentTranslate + space;
    if (translateValue >= 0) {
      slider.style.transform = `translateX(0px)`;
    } else {
      slider.style.transform = `translateX(${translateValue}px)`;
    }
  },
  __slideNext(space, slider) {
    const style = getComputedStyle(slider);
    const matrix = new WebKitCSSMatrix(style.transform);
    const currentTranslate = matrix.m41;
    const translateValue = currentTranslate - space;
    if (slider.clientWidth + translateValue <= 0) {
      slider.style.transform = `translateX(${space - slider.clientWidth}px)`;
    } else {
      slider.style.transform = `translateX(${translateValue}px)`;
    }
  },
};

export default Slider;
