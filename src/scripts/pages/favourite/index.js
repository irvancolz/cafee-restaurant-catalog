import GetRestaurant from "../../api/apicall";

const Favourite = {
  async render() {
    return `<h1>Favourite Page</h1>`;
  },
  async afterRender() {
    await GetRestaurant.list();
  },
};

export default Favourite;
