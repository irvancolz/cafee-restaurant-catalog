const { deleteFromFavourite } = require("../../src/scripts/storage/db/db");

/* eslint-disable no-undef */
describe("unlike restaurant", () => {
  it("unlike a restaurant", async () => {
    const id = "69ahsy71a5gkfw1e867";
    cy.on("uncaught:exception", () => {
      return false;
    });
    await deleteFromFavourite(id);
    // visit the restaurant we want to like
    cy.visit(`http://localhost:8000/#/resto/${id}`);

    // give restaurant a like
    // add wait function because cypress command run too fast,
    // this will prevent cypress to navigate to favourite page until
    // the add favourite button is clicked
    cy.get(".favourite-btn").wait(1000).click();

    cy.visit("http://localhost:8000/#/favourite");

    // check the favourite status of the latest restaurant added to favourite
    cy.get(".restaurants__title a").last().click();
    cy.get(".favourite-btn").wait(1000).click();

    cy.visit("http://localhost:8000/#/favourite");
    cy.get(".restaurants__title a").should("have.length", 0);
  });
});
