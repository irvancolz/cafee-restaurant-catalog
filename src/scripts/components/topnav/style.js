export const topnavStyle = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header,
.topnav{
background-color: var(--black-bg-col);
  }
.container{
  max-width: 1600px;
  width: 100%;
  margin: auto;
}
.header {
  color: var(--normal-text-col);
  position: sticky;
  top: 0;
  /* avoid collising with skip to content */
  z-index: 99;
}
.header__logo__container {
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
  cursor: pointer;
  width: 44px;
}
.topnav {
  position: absolute;
  width: 100%;
}
.topnav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
.topnav ul[aria-expanded="false"]{
  height: 0;
}
.topnav ul[aria-expanded="true"]{
  height: fit-content;
}
.topnav custom-links {
  flex-grow: 1;
  font-size: var(--nav-link-size);
  transition: all 0.3s cubic-bezier(0.1, 0.33, 0.75, 0.85);
}
.topnav ul[aria-expanded="false"] custom-links {
  transform: translateX(100%);
}
.topnav ul[daria-expanded="true"] custom-links {
  transform: translateX(0%);
}
.topnav custom-links:hover {
  background-color: #fff;
}
.header__menu__btn .bar {
  fill: #eee;
  transition: y 0.3s ease-out, rotate 0.2s ease-in-out 0.3s, opacity .2s ease-out .1s, translate .2s ease-out;
  transform-origin: center;
}
.header__menu__btn[aria-expanded="true"] .one {
  transition: rotate 0.2s ease-in-out, y 0.3s ease-out 0.2s;
  y: 20;
  rotate: 45deg;
}
.header__menu__btn[aria-expanded="true"] .three {
  transition: rotate 0.2s ease-in-out, y 0.3s ease-out 0.2s;
  y: 20;
  rotate: -45deg;
}

.header__menu__btn[aria-expanded="true"] .two{
    opacity: 0;
}

@media (min-width: 1200px) {
  :host{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  } 
  .header,
  .topnav {
    background-color: transparent;
  }
  .header__logo{
    flex-grow: 0;
  }
  .topnav custom-links {
    transform: translateX(0);
    transition-delay: 0ms;
    flex-grow: 0;
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
    left: 50%;
    transform: translateX(-50%);
  }
  .topnav ul {
    flex-direction: row;
    gap: 100px;
    justify-content: center;
    overflow: visible;
  }
  .topnav custom-links:hover {
    background-color: var(--dark-bg-col);
  }
  .topnav ul[aria-expanded="false"]{
    height: fit-content;
  }
  .topnav ul[aria-expanded="false"] custom-links {
    transform: translateX(0);
  }
}  
`;
