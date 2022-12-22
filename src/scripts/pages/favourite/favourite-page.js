import { GetRestaurant } from "../../api";
import { createRestaurantCards } from "../../helper";

export const Favourite = {
  async render() {
    return `<section class="restaurant-list container" id="content">
    <h1 class="restaurant-list__title title">places you might be <span>interested</span> in</h1>
    <div class="resturant-list__container" id="restaurant-list"></div>
  </section>`;
  },
  async afterRender() {
    const res = await GetRestaurant.filterRestaurantWithRating(4.6);
    this._createRestaurantListContent(res);
  },

  _createRestaurantListContent(list) {
    const restaurantListContainer = document.getElementById("restaurant-list");
    list.forEach((resto) => {
      const restaurant = document.createElement("article");
      restaurant.classList.add("restaurants");
      restaurant.innerHTML = createRestaurantCards(resto);
      restaurantListContainer.append(restaurant);
    });
  }
};
