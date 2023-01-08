const {
  deleteFromFavourite,
} = require("../../src/scripts/storage/db/db");

/* eslint-disable no-undef */
describe("like restaurant", () => {
  it("like a restaurant", async () => {
    const id = "fnfn8mytkpmkfw1e867";
    await deleteFromFavourite(id);
    cy.visit(`http://localhost:8000/#/resto/${id}`);
    cy.get(".favourite-btn").click();
    cy.get(".favourite-btn")
      .click()
      .invoke("attr", "data-favourited")
      .should("eq", "false");
  });
});
