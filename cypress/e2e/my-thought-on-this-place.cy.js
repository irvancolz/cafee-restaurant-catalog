/* eslint-disable no-undef */
describe("like restaurant", () => {
  it("like a restaurant", async () => {
    const id = "dwg2wt3is19kfw1e867";
    const review = "the drink is very delicious";
    cy.visit(`http://localhost:8000/#/resto/${id}`);
    cy.get(".customer-review__input").type(review);
    cy.get(".customer-review__submit").click();
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.reload(true);
    cy.get("custom-comment")
      .shadow()
      .find(".review__detail")
      .filter(`:contains(${review})`);
  });
});
