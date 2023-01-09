const { deleteFromFavourite } = require("../../src/scripts/storage/db/db");

/* eslint-disable no-undef */
describe("unlike restaurant", () => {
  it("unlike a restaurant", async () => {
    cy.on("uncaught:exception", () => {
      return false;
    });
    const id = "fnfn8mytkpmkfw1e867";
    await deleteFromFavourite(id);
    cy.visit(`http://localhost:8000/#/resto/${id}`);
    // cy.get(".favourite-btn").trigger("mouseover").click();
    cy.get(".favourite-btn")
      .trigger("mouseover")
      .dblclick()
      .invoke("attr", "data-favourited")
      .should("eq", "false");
  });
});
