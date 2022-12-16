import Favourite from "../pages/favourite";
import Home from "../pages/home";
import Resto from "../pages/resto";

const routeTo = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleRouting();
};

const routes = {
  "/": Home || null,
  "/resto": Resto || null,
  "/favourite": Favourite || null,
};

async function handleRouting() {
  const path = window.location.pathname;
  const route = routes[path] || Home;
  const markup = await route.render();
  document.getElementById('main').innerHTML = markup;
}

export { routeTo, handleRouting, routes };
