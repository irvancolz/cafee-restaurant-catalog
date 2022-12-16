import Favourite from "../pages/favourite";
import Home from "../pages/home";
import Resto from "../pages/resto";
import NotFound from "../pages/not-found";

const routeTo = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleRouting();
};

const routes = {
  "/": Home,
  "/resto": Resto,
  "/favourite": Favourite,
};

async function handleRouting() {
  const path = window.location.pathname;
  const route = routes[path] || NotFound;
  const markup = await route.render();
  document.getElementById('main').innerHTML = markup;
}

export { routeTo, handleRouting, routes };
