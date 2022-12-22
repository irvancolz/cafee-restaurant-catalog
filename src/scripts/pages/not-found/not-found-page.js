export const NotFound = {
  async render() {
    return `
          <div>
          <h1>Sorry the pages not found</h1>
          <custom-links text="home" href="/"></custom-links>
          </div>`;
  },
  async afterRender() {
    console.log("page not found");
  },
};
