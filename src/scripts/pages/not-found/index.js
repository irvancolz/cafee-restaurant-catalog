import GetRestaurant from "../../api/apicall";

const NotFound = {
  async render() {
    return `
        <div>
        <h1>Sorry the pages not found</h1>
        <custom-links text="home" href="/"></custom-links>
        </div>`;
  },
  async afterRender() {
    await GetRestaurant.list();
  },
};

export default NotFound;
