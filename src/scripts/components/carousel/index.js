/* eslint-disable accessor-pairs */
import carouselStyles from "./style";

class Carousel extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._changeSlide(0);
    this._interval = parseInt(this.getAttribute("interval"));
    this.render();
    this._changeSlideUpAutomatically();
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
    this._createEffect(number);
  }

  _createEffect(id) {
    const slides = this._shadowRoot.querySelectorAll(".slide__wrapper a");
    const navBtn = this._shadowRoot.querySelectorAll(".carousel__nav__btn");
    for (let i = 0; i <= this._maxSlide; i++) {
      if (i === id) {
        slides[i].className = "slide active";
        navBtn[i].className = "carousel__nav__btn active";
      } else {
        slides[i].className = "slide";
        navBtn[i].className = "carousel__nav__btn";
      }
    }
  }

  _createSlide(data) {
    const slide = document.createElement("li");
    slide.className = "slide__wrapper";
    slide.innerHTML = `
    <a href="#/resto/${data.id}" aria-label="link to resto ${data.name} pages">
    <img 
      src="https://restaurant-api.dicoding.dev/images/large/${data.pictureId}" 
      alt="${data.name} images"/>
    </a>
    `;
    return slide;
  }

  _createNavigation() {
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", "change slide");
    btn.className = `carousel__nav__btn`;
    return btn;
  }

  _createContent() {
    const slideContainer = this._shadowRoot.getElementById("slides");
    const navContainer = this.shadowRoot.querySelector(".nav__container");
    this.restaurant.forEach((data, index) => {
      const nav = this._createNavigation(index);
      const slide = this._createSlide(data);
      slideContainer.append(slide);
      navContainer.append(nav);
    });
  }

  _countMaxSlide(array) {
    return (this._maxSlide = array.length - 1);
  }

  _addStyle() {
    const style = document.createElement("style");
    style.textContent = carouselStyles;
    this._shadowRoot.append(style);
  }

  render() {
    this._shadowRoot.innerHTML = `<div class="carousel">
        <nav class="carousel__content">
          <ul  id="slides"></ul>
        </nav>
        <div class="nav__container"></div>
    </div>`;

    if (this.restaurant) {
      this._countMaxSlide(this.restaurant);
      this._createContent();
    }

    this._addStyle();

    const navBtn = this._shadowRoot.querySelectorAll(".carousel__nav__btn");
    navBtn.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        this._changeSlide(i);
      });
    });
  }
}

customElements.define("custom-carousel", Carousel);
