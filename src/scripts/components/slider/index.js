import SliderStyles from "./style";

class Slider extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `<h1>Custom Slider</h1>`;
  }
}

customElements.define("custom-slider", Slider);
