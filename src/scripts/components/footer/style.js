export const footerStyle = `    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
      list-style: none;
    }
    .footer__nav custom-links {
      padding: 0;
    }
    .footer__nav custom-links {
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
      background-color: transparent;
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
    }`;
