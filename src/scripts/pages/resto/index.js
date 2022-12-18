import GetRestaurant from "../../api/apicall";
import createRestaurantCards from "../../helper/restaurant";

const Resto = {
  async render() {
    return `
    <custom-carousel interval="5"></custom-carousel>
    <section class="restaurant-list container" id="content">
    <h1 class="restaurant-list__title title">places you might be <span>interested</span> in</h1>
    <div class="resturant-list__container" id="restaurant-list"></div>
  </section>`;
  },

  async afterRender() {
    const res = await GetRestaurant.filterRestaurantWithRating(4.6);
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

export default Resto;
