/* eslint-disable accessor-pairs */
import carouselStyles from "./style";

class Carousel extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._slide = 0;
    this._interval = parseInt(this.getAttribute("interval"));
    this.render();
    this._changeSlideUpAutomatically();
  }

  disconnectedCallback() {
    console.log("component unmounted");
  }

  set restaurantList(list) {
    this.restaurant = list;
    this.render();
  }

  _changeSlideUpAutomatically() {
    const interval = setInterval(() => {
      if (this._slide >= this._maxSlide) {
        this._changeSlide(0);
      } else {
        this._changeSlide(this._slide + 1);
      }
    }, this._interval * 1000);
    window.addEventListener("hashchange", () => clearInterval(interval));
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

  _countMaxSlide(array) {
    return (this._maxSlide = array.length - 1);
  }

  render() {
    this._shadowRoot.innerHTML = `<div class="carousel">
        <div class="carousel__content" id="slides"></div>
        <div class="nav">carousel nav</div>
    </div>`;
    const slideContainer = this._shadowRoot.getElementById("slides");
    if (this.restaurant) {
      this._countMaxSlide(this.restaurant);
      this.restaurant.forEach((data) => {
        const slide = this._createSlide(data);
        slideContainer.append(slide);
      });
    }
    const style = document.createElement("style");
    style.textContent = carouselStyles;
    this.shadowRoot.append(style);
  }
}

customElements.define("custom-carousel", Carousel);
