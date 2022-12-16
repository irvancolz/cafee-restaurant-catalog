import API_ROUTES from "./config";

const GetRestaurant = {
  async list() {
    const url = await fetch(API_ROUTES.list);
    const response = await url.json();
    const data = await response.restaurants;
    return data;
  },
  async detail(id) {
    const url = await fetch(API_ROUTES.detail + id);
    const response = await url.json();
    const data = await response.restaurant;
    return data;
  },

  async filterRestaurantWithRating(rate) {
    const list = await this.list();
    const resto = list.filter((resto) => resto.rating >= rate);
    return resto;
  },
};

export default GetRestaurant;
