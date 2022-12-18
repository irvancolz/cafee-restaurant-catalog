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

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(attrName);
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
    const slides = this._shadowRoot.querySelectorAll(".slide");
    const navBtn = this._shadowRoot.querySelectorAll(".carousel__nav__btn");
    for (let i = 0; i <= this._maxSlide; i++) {
      if (i === id) {
        slides[i].classList.add("active");
        navBtn[i].classList.add("active");
      } else {
        slides[i].className = "slide";
        navBtn[i].className = "carousel__nav__btn";
      }
    }
  }

  _createSlide(data) {
    const slide = document.createElement("a");
    slide.className = "slide";
    slide.setAttribute("href", `#/resto/${data.id}`);
    slide.innerHTML = `<img src="https://restaurant-api.dicoding.dev/images/large/${data.pictureId}" />`;
    return slide;
  }

  _createNavigation(data) {
    const btn = document.createElement("button");
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
    this.shadowRoot.append(style);
  }

  render() {
    this._shadowRoot.innerHTML = `<div class="carousel">
        <div class="carousel__content" id="slides"></div>
        <div class="nav__container"></div>
    </div>`;

    if (this.restaurant) {
      this._countMaxSlide(this.restaurant);
      this._createContent();
    }

    const navBtn = this._shadowRoot.querySelectorAll(".carousel__nav__btn");
    navBtn.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        this._changeSlide(i);
      });
    });

    this._addStyle();
  }
}

customElements.define("custom-carousel", Carousel);
