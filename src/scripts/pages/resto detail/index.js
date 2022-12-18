import GetRestaurant from "../../api/apicall";
import UrlParser from "../../routing/urlparser";
import createRestaurantCards from "../../helper/restaurant";

const RestoDetail = {
  async render() {
    return `<section class="restaurant-list favourite__restaurant__list" id="content">
    <h1 class="subtitle">See another restaurants</h1>
    <div class="resturant-list__container container" id="restaurant-list"></div>
  </section>`;
  },
  async afterRender() {
    const url = window.location.hash;
    const { id } = UrlParser._urlSplitter(url);
    const data = await GetRestaurant.detail(id);
    console.log(data);
    const res = await GetRestaurant.filterRestaurantWithRating(4.8);
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

export default RestoDetail;
