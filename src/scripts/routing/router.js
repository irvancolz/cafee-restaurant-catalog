import { RestoDetail, Favourite, Home, Resto, NotFound } from "../pages";

export const routes = {
  "/": Home,
  "/resto": Resto,
  "/favourite": Favourite,
  "/resto/:id": RestoDetail,
  "*": NotFound,
};
