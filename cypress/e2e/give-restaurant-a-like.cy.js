const { deleteFromFavourite } = require("../../src/scripts/storage/db/db");

/* eslint-disable no-undef */
describe("like restaurant", () => {
  it("like a restaurant", async () => {
    const id = "fnfn8mytkpmkfw1e867";
    cy.on("uncaught:exception", () => {
      return false;
    });
    await deleteFromFavourite(id);
    cy.visit(`http://localhost:8000/#/resto/${id}`);
    cy.get('.favourite-btn').click();
    cy.get(".favourite-btn")
      .trigger('mouseover')
      .trigger("click")
      .invoke("attr", "data-favourited")
      .should("eq", "true");
  });
});
