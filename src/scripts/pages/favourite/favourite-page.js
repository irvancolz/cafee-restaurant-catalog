import { GetRestaurant } from "../../api";
import { createRestaurantCards } from "../../helper";
import { getRestoFavouriteList } from "../../storage/db";

export const Favourite = {
  async render() {
    document.title = "Cafee | Favourite Restaurant";
    return `
    <custom-carousel interval="4"></custom-carousel>
    <section class="restaurant-list container" id="content">
    <h1 class="restaurant-list__title title">your <span>favourite</span> restaurant</h1>
    <div class="resturant-list__container" id="restaurant-list"></div>
  </section>`;
  },
  async afterRender() {
    const res = await GetRestaurant.filterRestaurantWithRating(4.5);
    this._createRestaurantListContent();
    this._createCarouselContent(res);
  },

  async _createRestaurantListContent() {
    const restaurantListContainer = document.getElementById("restaurant-list");
    const favouriteResto = await getRestoFavouriteList();
    if (favouriteResto.length === 0) {
      this._handleEmptyFavourite();
    }
    favouriteResto.forEach((resto) => {
      const restaurant = document.createElement("article");
      restaurant.classList.add("restaurants");
      restaurant.innerHTML = createRestaurantCards(resto);
      restaurantListContainer.append(restaurant);
    });
  },

  _createCarouselContent(list) {
    const carousel = document.querySelector("custom-carousel");
    carousel.restaurantList = list;
  },
  _handleEmptyFavourite() {
    const restaurantListContainer = document.getElementById("content");
    const infoTxt = document.createElement("div");
    infoTxt.className = "warning__container";
    infoTxt.innerHTML = `
    <h2 class="subtitle">looks like you don't have any favourite <a href="#/resto">restaurant</a> yet.</h2>
    `;
    restaurantListContainer.append(infoTxt);
  },
};
