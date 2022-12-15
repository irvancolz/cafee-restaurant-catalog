class FooterElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    console.log("footer conected!");
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--open-family);
    background-color: var(--gray-bg-col);
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
  }
  button,
  input {
    appearance: none;
  }
  button{
    cursor: pointer;
  }
  .wrapper{
    position: relative;
  }
  .container{
    max-width: 1600px;
    width: 100%;
    margin: auto;
  }
    .footer {
      background-color: var(--dark-text-col);
      color: var(--normal-text-col);
      padding: 3rem 2rem;
    }
    .footer__logo {
      grid-area: logo;
      margin: auto;
      max-width: 100%;
    }
    .footer .container:first-child{
      display: grid;
      grid-template-rows: repeat(10, 100px);
      grid-template-columns: repeat(1, 100%);
      grid-template-areas:
        "logo"
        "logo"
        "space"
        "title"
        "title"
        "input"
        "navigation"
        "navigation"
        "navigation"
        ;
    }
    .footer__nav {
      grid-area: navigation;
      padding-block: 3.5rem;
    }
    .footer__nav ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .footer__nav .links {
      padding: 0;
    }
    .footer__nav .links a {
      margin: 0;
      font-size: 2.15rem;
    }
    .newsletter__title {
      grid-area: title;
      font-family: var(--cormorant-family);
      font-size: var(--section-title-size);
      font-weight: 700;
      text-align: center;
    }
    .footer__copyright {
      text-align: center;
      font-size: var(--copyright-size);
    }
    .newsletter__subscription {
      grid-area: input;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      position: relative;
      gap: 1.5rem;
      margin: 2rem auto;
      width: 100%;
    }
    .newsletter__subscription input {
      background-color: var(--dark-text-col);
      border: none;
      border-bottom: 3px solid var(--normal-text-col);
      outline: none;
      padding: .65rem 0;
    }
    .newsletter__subscription input:invalid {
      border-bottom: 3px solid crimson;
    }
    .newsletter__subscription input,
    .newsletter__subscription label {
      color: var(--normal-text-col);
      font-size: var(--card-desc-size);
    }
    .newsletter__subscription label {
      position: absolute;
      transition: all 0.3s ease-out;
      top: .65rem;
      transform: translateY(-50%);
      z-index: 1;
    }
    .newsletter__subscription input::placeholder,
    .newsletter__subscription input:not(:focus) {
      /* hide placeholder */
      border-color: var(--normal-text-col);
      color: var(--dark-text-col);
    }
    .newsletter__subscription:has(:focus-within) label {
      top: 0;
      font-size: 1rem;
    }
    .newsletter__submit{
      padding: .75rem;
      transition: all .3s ease-in-out .1s;
      transform: translateX(-20px);
      opacity: 0;
      border: none;
      background-color: transparent;
      color: var(--normal-text-col);
    }
    .newsletter__subscription .input:focus-within ~ .newsletter__submit, .newsletter__submit:focus{
      transform: translateX(0);
      opacity: 1;
    }
    @media (min-width: 600px) {
        .newsletter__title{
            text-align: start;
        }
        .footer .container:first-child {
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
          "logo logo"
          "logo logo"
          "logo logo"
          "title navigation"
          "input navigation";
      }
      .footer__nav ul {
        width: fit-content;
        margin-left: auto;
      }
      .newsletter__subscription label{
      top: 50%;
      }
    }
    @media (min-width: 1200px) {
      .footer__logo {
        padding: 0;
      }
      .footer__nav {
        margin: auto;
        width: 100%;
      }
      .footer__nav ul {
        flex-direction: row;
        justify-content: space-evenly;
        padding: 0;
        width: 100%;
      }
      .newsletter__subscription {
        gap: 2rem;
        margin: 0;
      }
      /* the layout goes here */
      .footer .container:first-child {
        grid-template-rows: repeat(4, 150px);
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas: "title logo" "title logo" "space space" "input navigation";
      }
      .footer__copyright{
        margin-top: 50px;
        text-align: start;
        font-size: 1rem;
      }
      .links a::after {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 0;
        height: 5px;
        background-color: var(--gold-bg-col);
        transition: width 0.2s ease-in;
      }
      .links:hover a {
        color: var(--gold-bg-col);
      }
      .links:hover a::after {
        width: 100%;
      }
    }    
    </style>

    <footer class="footer">
    <div class="container">
      <img
        src="./images/Cafee-footer-logo.png"
        alt="Cafee-logo"
        class="footer__logo"
      />
      <h2 class="newsletter__title">Subscribe To Our Newsletter</h2>
      <form class="newsletter__subscription" action="">
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
          <li class="links"><a href="/">home</a></li>
          <li class="links">
            <a href="https://github.com/irvancolz" target="_blank"
              >about us</a
            >
          </li>
          <li class="links"><a href="#">resto</a></li>
          <li class="links"><a href="#">favourite</a></li>
        </ul>
      </nav>
    </div>
    <p class="footer__copyright container">
      created by Irvan Saharudin @ 2022
    </p>
  </footer>`;
  }
}

customElements.define("custom-footer", FooterElement);
