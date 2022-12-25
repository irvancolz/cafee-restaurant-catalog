import { GetRestaurant } from "../../api";
import { UrlParser } from "../../routing";
import { createRestaurantCards } from "../../helper";
import {
  createContentFromList,
  createRestaurantDetailMainContent,
  createRestoComments,
  handleFavouritedResto,
} from "./restaurant-detail";
import cafeeLogoDark from "../../../public/images/Cafee-logo-dark.png";
import { AddReview } from "./addReview";

export const RestoDetail = {
  async render() {
    return `
    <article 
      class="restaurant-detail__hero" 
      id="content">
    </article>
    <section class="customer-review container">
      <h2>customer review</h2>
      <div id="customer-review" ></div>
      <form class="customer-review__form">
        <h3>Add Your Review</h3>
        <p>help us become better restaurant</p>
        <input 
          placeholder="Thoughts at this place"
          aria-label="add your review"
          title="add your review"
          type="text"
          class="customer-review__input" />
          <button 
            type="submit" 
            class="customer-review__submit primary-button">
              Review
          </button>
      </form>
      <img src=${cafeeLogoDark} alt="cafee logo" class="restaurant-detail__review__img"/>
    </section>
    <section 
      class="restaurant-list favourite__restaurant__list" 
      id="content">
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
    AddReview.init();
    handleFavouritedResto(data);
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
    createRestoComments(data.customerReviews);
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
