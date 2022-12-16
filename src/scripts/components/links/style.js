const linksStyle = ` * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
  }  
  .links {
    background-color: var(--dark-text-col);
    transition: background-color 0.2s ease-in;
  }
  .links a {
    padding: .5rem;
    width: fit-content;
    height: fit-content;
    display: block;
    margin: auto;
    text-transform: capitalize;
    position: relative;
    color: var(--normal-text-col);
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
  @media (min-width: 1200px) {
    .links {
      flex-grow: 0;
      padding: 0;
    }
    .links a {
      font-size: 1.5rem;
    }
  };`;

export default linksStyle;
