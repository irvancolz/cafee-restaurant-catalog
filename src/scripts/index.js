import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/hotspots.css";
import "../styles/restaurants.css";
import "../styles/restaurant-list.css";
import "../styles/footer.css";
import "../styles/link.css";
import "./menu";
import "./restaurant-list";
import "./topnav-links";
import "./hotspot";
import "./footer";
import "./components/footer/index";
import "./components/topnav/index";
import "./components/links/index";
import { handleRouting } from "./routing/router";

window.addEventListener("load", () => {
  handleRouting();
});
