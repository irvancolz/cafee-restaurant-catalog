import Home from "../pages/home";
import Resto from "../pages/resto";

const routeTo = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleRouting();
};

const routes = {
  "/": Home,
  "/resto": Resto,
};

async function handleRouting() {
  const path = window.location.pathname;
  console.log(path);
}

export { routeTo, handleRouting, routes };
