import GetRestaurant from "../../api/apicall";
import UrlParser from "../../routing/urlparser";
import createRestaurantCards from "../../helper/restaurant";
import {
  createContentFromList,
  createRestaurantDetailMainContent,
} from "./restaurant-detail";

export const RestoDetail = {
  async render() {
    return `
    <article class="restaurant-detail__hero" id="content"></article>
    <section class="restaurant-list favourite__restaurant__list" id="content">
      <h2 class="subtitle">See another restaurants</h2>
      <div class="resturant-list__container container" id="restaurant-list"></div>
    </section>`;
  },
  async afterRender() {
    const url = window.location.hash;
    const { id } = UrlParser._urlSplitter(url);
    const data = await GetRestaurant.detail(id);
    const res = await GetRestaurant.filterRestaurantWithRating(4.8);
    this._createMainContent(data);
    this._createRestaurantListContent(res);
  },

  _createMainContent(data) {
    const container = document.getElementById("content");
    const content = createRestaurantDetailMainContent(data);
    container.innerHTML = content;
    this._createContentFromList(data);
  },

  _createContentFromList(data) {
    const foodContainer = document.querySelector(".foods_container");
    const drinksContainer = document.querySelector(".drinks_container");
    const categoriesContainer = document.querySelector(".categories_container");
    createContentFromList(data.menus.foods, foodContainer);
    createContentFromList(data.menus.drinks, drinksContainer);
    createContentFromList(data.categories, categoriesContainer);
  },

  _createRestaurantListContent(list) {
    const restaurantListContainer = document.getElementById("restaurant-list");
    list.forEach((resto) => {
      const restaurant = document.createElement("article");
      restaurant.classList.add("restaurants");
      restaurant.innerHTML = createRestaurantCards(resto);
      restaurantListContainer.append(restaurant);
    });
  },
};
