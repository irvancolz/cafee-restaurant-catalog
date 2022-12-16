import GetRestaurant from "../../api/apicall";

const Home = {
  async render() {
    return `
    <div class="hero">
    <h1 class="hero__text">
      Look no further for interesting restaurants
    </h1>
  </div>
  <section id="content" class="hotspots container">
    <div class="hotspots__title__container">
      <h2 class="hotspots__title">
        Check out this week's
        <span> hotspots </span>
      </h2>
    </div>
  </section>
  <section class="restaurant-list container">
    <h2 class="restaurant-list__title">places you might have liked</h2>
    <div class="resturant-list__container" id="restaurant-list"></div>
  </section>   
    `;
  },

  async afterRender() {
    const res = await GetRestaurant.list();
    console.log(res);
  },
};

export default Home;
