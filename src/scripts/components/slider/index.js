/* eslint-disable accessor-pairs */
import SliderStyles from "./style";

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

  _caddStyles() {
    const styles = document.createElement("style");
    styles.textContent = SliderStyles;
    this._shadowRoot.append(styles);
  }

  render() {
    this._shadowRoot.innerHTML = `<div class="slider__content">
    <h1>slider</h1>
    <nav>
        <button>btn nav 1</button>
        <button>btn nav 2</button>
    </nav>
    </div>`;
  }
}

customElements.define("custom-slider", Slider);
