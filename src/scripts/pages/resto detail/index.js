import GetRestaurant from "../../api/apicall";
import UrlParser from "../../routing/urlparser";

const RestoDetail = {
  async render() {
    return `<h1>Resto Detail pages</h1>`;
  },
  async afterRender() {
    const url = window.location.hash;
    const { id } = UrlParser._urlSplitter(url);
    const data = await GetRestaurant.detail(id);
    console.log(data);
  },
};

export default RestoDetail;
