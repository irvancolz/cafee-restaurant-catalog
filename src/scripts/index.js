import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/hotspots.css";
import "../styles/restaurants.css";
import "../styles/restaurant-list.css";
import "../styles/footer.css";
import "../styles/link.css";
import "../styles/title.css";
import "../styles/button.css";
import "./components";
import App from "./app";
import "./storage/db";

const app = new App({ content: document.querySelector("#main") });

window.addEventListener("load", () => {
  app.renderPage();
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});
