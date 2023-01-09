/* eslint-disable no-undef */
describe("review restaurant", () => {
  it("add review to restaurant", async () => {
    const id = "ateyf7m737ekfw1e867";
    const review = "test comment";
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.visit(`http://localhost:8000/#/resto/${id}`);
    cy.get(".customer-review__input").type(review);
    cy.get(".customer-review__submit").click();
    cy.get("custom-comment")
      .shadow()
      .find(".review__detail")
      .last()
      .should("have.text", review)
  });
});
