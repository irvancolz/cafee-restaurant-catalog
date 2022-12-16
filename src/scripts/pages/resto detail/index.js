import GetRestaurant from "../../api/apicall";

const RestoDetail = {
  async render() {
    return `<h1>Resto pages</h1>`;
  },
  async afterRender() {
    await GetRestaurant.list();
  },
};

export default RestoDetail;
