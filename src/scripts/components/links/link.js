import { linksStyle } from "./style";

export class Links extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.text = this.getAttribute("text") || null;
    this.href = this.getAttribute("href") || null;
    this.target = this.getAttribute("target") || "_self";
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
    <li class="links">
      <a 
        href="${this.href}" 
        target=${this.target}
        >
          ${this.text}
        </a>
      </li>`;
    const style = document.createElement("style");
    style.textContent = linksStyle;
    this._shadowRoot.append(style);
  }
}

customElements.define("custom-links", Links);
