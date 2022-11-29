import restaurants from "./DATA.json";
import createRestaurantCards from "./restaurant-list";

const hotspotContainer = document.getElementById("hotspots");

console.log(restaurants)
console.log(hotspotContainer)
  const restaurant = document.createElement("div");
  restaurant.classList.add("restaurants");
  restaurant.innerHTML = createRestaurantCards(restaurants.restaurants[3]);
  hotspotContainer.append(restaurant);
