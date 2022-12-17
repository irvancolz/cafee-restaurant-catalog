/* eslint-disable accessor-pairs */
import carouselStyles from "./style";

class Carousel extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._slide = 0;
    this._interval = this.getAttribute("interval") || 2;
    this.render();
    // this._changeSlideUpAutomatically();
  }

  set restaurantList(list) {
    this.restaurant = list;
    this.render();
  }

  _changeSlideUpAutomatically() {
    setInterval(() => {
      this._changeSlide(this._slide + 1);
      console.log(this._slide);
    }, this._interval * 1000);
  }

  _changeSlide(number) {
    this._slide = number;
  }

  _createSlide(data) {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `<img src="https://restaurant-api.dicoding.dev/images/large/${data.pictureId}" />`;
    return slide;
  }

  render() {
    this._shadowRoot.innerHTML = `<div class="carousel">
        <div class="carousel__content" id="slides"></div>
        <div class="nav">carousel nav</div>
    </div>`;
    console.log(this.restaurant);
    const slideContainer = this._shadowRoot.getElementById("slides");
    if (this.restaurant) {
      this.restaurant.forEach((data) => {
        const slide = this._createSlide(data);
        // console.log(slideContainer)
        slideContainer.append(slide);
      });
    }
    const style = document.createElement("style");
    style.textContent = carouselStyles;
    this.shadowRoot.append(style);
  }
}

customElements.define("custom-carousel", Carousel);
