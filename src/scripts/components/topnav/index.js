class Topnav extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    this.render();
    console.log("topnav connected !");
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
    .header {
        color: var(--normal-text-col);
        position: sticky;
        top: 0;
        /* avoid collising with skip to content */
        z-index: 99;
      }
      .header__logo__container {
        background-color: var(--dark-text-col);
        padding-block: var(--topnav-padding);
        padding-inline: 40px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
      .header__logo{
        flex-grow: 1;
        display: grid;
        place-items: center;
      }
      .header__menu__btn {
        border: none;
        background-color: transparent;
        color: var(--normal-text-col);
      }
      .header__menu__btn {
        width: 44px;
      }
      .topnav {
        position: absolute;
      }
      .topnav ul {
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
      }
      .topnav ul[data-state="close"]{
        height: 0;
      }
      .topnav ul[data-state="open"]{
        height: fit-content;
      }
      .topnav .links {
        background-color: var(--dark-text-col);
        transition: all 0.3s cubic-bezier(0.1, 0.33, 0.75, 0.85);
      }
      .topnav ul[data-state="close"] .links {
        transform: translateX(100%);
      }
      .topnav ul[data-state="open"] .links {
        transform: translateX(0%);
      }
      .topnav .links:hover {
        background-color: #fff;
      }
      .header__menu__btn .bar {
        fill: #eee;
        transition: y 0.3s ease-out, rotate 0.2s ease-in-out 0.3s, opacity .2s ease-out .1s, translate .2s ease-out;
        transform-origin: center;
      }
      .header__menu__btn[data-state="open"] .one {
        transition: rotate 0.2s ease-in-out, y 0.3s ease-out 0.2s;
        y: 20;
        rotate: 45deg;
      }
      .header__menu__btn[data-state="open"] .three {
        transition: rotate 0.2s ease-in-out, y 0.3s ease-out 0.2s;
        y: 20;
        rotate: -45deg;
      }
      
      .header__menu__btn[data-state="open"] .two{
          opacity: 0;
      }
      
      @media (min-width: 1200px) {
        .header,
        .topnav {
          position: static;
          background-color: var(--dark-text-col);
        }
        .header__logo{
          flex-grow: 0;
        }
        .topnav .links a{
          padding: .5rem;
        }
        .topnav .links {
          transform: translateX(0);
          transition-delay: 0ms;
        }
        .header__logo__container {
          padding: 60px 0 0;
        justify-content: center;
        }
        .header__menu__btn {
          display: none;
        }
        .topnav {
          height: fit-content;
          padding: 1rem 0;
        }
        .topnav ul {
          flex-direction: row;
          gap: 100px;
          justify-content: center;
          overflow: visible;
        }
      
        .topnav .links:hover {
          background-color: var(--dark-bg-col);
        }
        .topnav ul[data-state="close"] .links {
          transform: translateX(0);
        }
      }
      
    </style>

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
      <ul id="topnav" aria-expanded="false" data-state="close">
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
  </header>`;
  }
}

customElements.define("custom-topnav", Topnav);
