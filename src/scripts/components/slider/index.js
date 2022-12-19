/* eslint-disable accessor-pairs */
import SliderStyles from "./style";
import createRestaurantCards from "../../helper/restaurant";

class Slider extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set restaurantList(list) {
    this.restaurant = list;
    this.render();
  }

  _createContent(data) {
    const restoContainer = this._shadowRoot.querySelector(".slider__content");
    const restaurant = document.createElement("article");
    restaurant.classList.add("restaurants");
    restaurant.innerHTML = createRestaurantCards(data);
    restoContainer.append(restaurant);
  }

  _addStyles() {
    const styles = document.createElement("style");
    styles.textContent = SliderStyles;
    this._shadowRoot.append(styles);
  }

  render() {
    this._shadowRoot.innerHTML = `<div class="slider__content">
    <nav>
        <button 
          aria-label="next slide" 
          title="next-slide"
          >
          btn nav 1
        </button>
        <button 
          aria-label="next silde" 
          title="next-slide"
          >
          btn nav 2
        </button>
    </nav>
    </div>`;

    this._addStyles();

    if (this.restaurant) {
      this.restaurant.forEach((resto) => {
        this._createContent(resto);
      });
    }
  }
}

customElements.define("custom-slider", Slider);
