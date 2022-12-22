import { commentStyles } from "./style";

class Comment extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  _addStyle() {
    const style = document.createElement("style");
    style.textContent = commentStyles;
    this._shadowRoot.append(style);
  }

  render() {
    this._shadowRoot.innerHTML = `<article></article>`;
    this._addStyle();
  }
}

customElements.define("custom-comment", Comment);
