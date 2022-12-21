import Favourite from "../pages/favourite";
import Home from "../pages/home";
import Resto from "../pages/resto";
// import RestoDetail from "../pages/resto detail";
import { RestoDetail } from "../pages/resto detail";

const routes = {
  "/": Home,
  "/resto": Resto,
  "/favourite": Favourite,
  "/resto/:id": RestoDetail,
};

export { routes };
