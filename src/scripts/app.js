import { routes, UrlParser } from "./routing";

class App {
  constructor({ content }) {
    this._content = content;
    this._initAppShell();
  }

  _initAppShell() {}

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipButton = document.querySelector(".skip-content");
    skipButton.addEventListener('click', (e) => {
      e.preventDefault();
      const main = document.getElementById("main");
      main.focus();
    })
  }
}

export default App;
