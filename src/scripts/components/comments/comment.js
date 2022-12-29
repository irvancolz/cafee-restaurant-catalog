/* eslint-disable accessor-pairs */
import { commentStyles } from "./style";
import avatarLogo from "../../../public/images/profile-picture.png";

export class Comment extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set comment(data) {
    this._comment = data;
  }

  _addStyle() {
    const style = document.createElement("style");
    style.textContent = commentStyles;
    this._shadowRoot.append(style);
  }

  render() {
    this._shadowRoot.innerHTML = `
    <article class="review__container">
      <header>
        <img src=${avatarLogo} class="review__avatar" />
        <h3 class="review__name">${this._comment.name}</h3>
        <time class="review__time">${this._comment.date}</time>
      </header>
      <p class="review__detail">${this._comment.review}</p>
      <div class="review__buttons">
        <button 
          aria-label="like this comment"
          title="like this comment"
          >
            like
        </button>
        <button 
          aria-label="reply this comment"
          title="reply this comment"
          >
            reply
        </button>
      </div>
    </article>`;
    this._addStyle();
  }
}

customElements.define("custom-comment", Comment);
