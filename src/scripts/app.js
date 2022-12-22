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
  }
}

export default App;
