import carouselStyles from "./style";

class Carousel extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._automatic = this.getAttribute("automatic");
    console.log("carousel connected!");
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `<div class="carousel">
        <slot class="content"></slot>
        <div class="nav">carousel nav</div>
    </div>`;
    const style = document.createElement('style');
    style.textContent = carouselStyles;
    this.shadowRoot.append(style);
  }
}

customElements.define('custom-carousel', Carousel);
