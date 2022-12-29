import { GetRestaurant } from "../../api";
import { createRestaurantCards } from "../../helper";
import heroImg from "../../../public/images/heros/hero-image_3.webp"

export const Home = {
  async render() {
    document.title = 'Cafee'
    return `
    <div class="hero">
    <h1 class="hero__text">
      Look no further for interesting restaurants
    </h1>
    <img class="hero__img" src=${heroImg} alt=""/>
  </div>
  <section id="content" class="hotspots container">
    <div class="hotspots__title__container">
      <h2 class="hotspots__title title">
        Check out this week's
        <span> hotspots </span>
      </h2>
    </div>
  </section>
  <section class="restaurant-list container">
    <h2 class="restaurant-list__title title">places you might have liked</h2>
    <div class="resturant-list__container" id="restaurant-list"></div>
  </section>   
    `;
  },

  async afterRender() {
    const res = await GetRestaurant.filterRestaurantWithRating(4.5);
    this._createHeroContent(res[1]);
    this._createRestaurantListContent(res);
  },

  _createHeroContent(data) {
    const hotspotContainer = document.getElementById("content");
    const restaurant = document.createElement("div");
    restaurant.classList.add("restaurants");
    restaurant.innerHTML = createRestaurantCards(data);
    hotspotContainer.append(restaurant);
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
