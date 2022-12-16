import API_ROUTES from "./config";

const GetRestaurant = {
  async list() {
    const url = await fetch(API_ROUTES.list);
    const response = await url.json();
    const data = await response.restaurants;
    return data;
  },
};

export default GetRestaurant;
