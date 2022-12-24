import { GetRestaurant } from "../../api";
import { createRestaurantCards } from "../../helper";

export const Favourite = {
  async render() {
    return `
    <custom-carousel interval="4"></custom-carousel>
    <section class="restaurant-list container" id="content">
    <h1 class="restaurant-list__title title">your <span>favourite</span> restaurant</h1>
    <div class="resturant-list__container" id="restaurant-list"></div>
  </section>`;
  },
  async afterRender() {
    const res = await GetRestaurant.filterRestaurantWithRating(4.5);
    this._createRestaurantListContent(res);
    this._createCarouselContent(res);
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

  _createCarouselContent(list) {
    const carousel = document.querySelector("custom-carousel");
    carousel.restaurantList = list;
  },
};
