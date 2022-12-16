// import { routeTo } from "../../routing/router";

import topnavStyle from "./style";

class Topnav extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  _toggleNav(btn) {
    const topnav = this._shadowRoot.getElementById("topnav");
    const isOpen = topnav.getAttribute("aria-expanded");
    if (isOpen === "true") {
      btn.setAttribute("data-state", "close");
      topnav.setAttribute("aria-expanded", "false");
      topnav.setAttribute("aria-hidden", "true");
    } else {
      btn.setAttribute("data-state", "open");
      topnav.setAttribute("aria-expanded", "true");
      topnav.setAttribute("aria-hidden", "false");
    }
  }

  render() {
    this._shadowRoot.innerHTML = `
    <header class="header">
    <div class="header__logo__container container">
      <a href="/" class="header__logo">
        <img src="./images/Cafee-logo.png" alt="Cafee-logo" />
      </a>
      <button
        aria-label="menu button"
        class="header__menu__btn"
        title="menu"
        aria-controls="topnav"
        data-state="close"
      >
        <svg viewbox="0 0 44 44">
          <rect
            class="bar one"
            height="3"
            width="36"
            x="4"
            y="10"
            rx="5"
          ></rect>
          <rect
            class="bar two"
            height="3"
            width="36"
            x="4"
            y="20"
            rx="5"
          ></rect>
          <rect
            class="bar three"
            height="3"
            width="36"
            x="4"
            y="30"
            rx="5"
          ></rect>
        </svg>
      </button>
    </div>
    <nav class="topnav container">
      <ul id="topnav" aria-expanded="false">
        <custom-links text="home" href="#/"></custom-links>
        <custom-links 
          text="about us"
          href="https://github.com/irvancolz"
          target="_blank">
        </custom-links>
        <custom-links text="resto" href="#/resto"></custom-links>
        <custom-links text="favourite" href="#/favourite"></custom-links>
      </ul>
    </nav>
  </header>`;
    const style = document.createElement("style");
    style.textContent = topnavStyle;
    this._shadowRoot.append(style);

    const menuBtn = this._shadowRoot.querySelector(".header__menu__btn");
    menuBtn.addEventListener("click", (e) => {
      this._toggleNav(menuBtn);
    });

    const links = this._shadowRoot.querySelectorAll("custom-links");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        this._toggleNav(menuBtn);
      });
    });
  }
}

customElements.define("custom-topnav", Topnav);
