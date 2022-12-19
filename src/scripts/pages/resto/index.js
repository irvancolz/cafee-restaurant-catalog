import GetRestaurant from "../../api/apicall";
import createRestaurantCards from "../../helper/restaurant";

const Resto = {
  async render() {
    return `
    <custom-carousel interval="5"></custom-carousel>
    <section class="restaurant-list container" id="content">
    <div>
      <h1 class="restaurant-list__title title">
      Your 
        <span>favourite</span>
      restaurant
      </h1>
      <div class="favourite-restaurant__slider" >
      <div class="resturant-list__container" id="restaurant-slider"></div>
      <div class="slider__nav">
        <button 
          aria-label="previous slide" 
          title="previous slide"
          >
          &larr;
        </button>
        <button 
          aria-label="next silde" 
          title="next-slide"
          >
          &rarr;
        </button>
    </div>
      </div>
    </div>
    <div>
      <h2 class="restaurant-list__title title">
        places you might be 
          <span>interested</span>
         in
      </h2>
      <div class="resturant-list__container" id="restaurant-list"></div>
    </div>
  </section>`;
  },

  async afterRender() {
    const restaurantListContainer = document.getElementById("restaurant-list");
    const restaurantSliderContainer = document.getElementById("restaurant-slider");
    const filteredResto = await GetRestaurant.filterRestaurantWithRating(4.6);
    this._createRestaurantListContent(restaurantSliderContainer, filteredResto);
    this._createRestaurantListContent(restaurantListContainer, filteredResto);
    this._createCarouselContent(filteredResto);
  },

  _createRestaurantListContent(container, list) {
    list.forEach((resto) => {
      const restaurant = document.createElement("article");
      restaurant.classList.add("restaurants");
      restaurant.innerHTML = createRestaurantCards(resto);
      container.append(restaurant);
    });
  },

  _createCarouselContent(list) {
    const carousel = document.querySelector("custom-carousel");
    carousel.restaurantList = list;
  },

};

export default Resto;
