import { footerStyle } from "./style";

export class FooterElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
    <footer class="footer">
    <div class="container">
      <img
        src="./images/Cafee-footer-logo.png"
        alt="Cafee-logo"
        class="footer__logo"
      />
      <h2 class="newsletter__title">Subscribe To Our Newsletter</h2>
      <form class="newsletter__subscription" >
        <div class="input">
          <label for="email"> Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            class="newsletter__input"
          />
        </div>
        <button
          type="submit"
          title="subscribe newsletter"
          class="newsletter__submit"
          aria-label="send email"
        >
          <svg
            aria-hidden="true"
            width="53"
            height="23"
            viewBox="0 0 53 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.0675 12.7629C52.6579 12.1817 52.6654 11.232 52.0842 10.6416L42.6135 1.02108C42.0323 0.430713 41.0826 0.423259 40.4922 1.00443C39.9018 1.5856 39.8944 2.53532 40.4756 3.12569L48.894 11.6773L40.3424 20.0957C39.752 20.6769 39.7446 21.6266 40.3257 22.217C40.9069 22.8073 41.8566 22.8148 42.447 22.2336L52.0675 12.7629ZM0.988058 12.8014L51.0035 13.1939L51.027 10.194L1.0116 9.80148L0.988058 12.8014Z"
              fill="#EEEEEE"
            />
          </svg>
        </button>
      </form>
      <nav class="footer__nav">
        <ul>
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
    </div>
    <p class="footer__copyright container">
      created by Irvan Saharudin @ 2022
    </p>
  </footer>`;
    const style = document.createElement("style");
    style.textContent = footerStyle;
    this._shadowRoot.append(style);
    this._shadowRoot
      .querySelector(".newsletter__subscription")
      .addEventListener("submit", (e) => {
        e.preventDefault();
      });
    this._shadowRoot
      .querySelector(".newsletter__submit")
      .addEventListener("click", (e) => {
        e.preventDefault();
      });
  }
}

customElements.define("custom-footer", FooterElement);
