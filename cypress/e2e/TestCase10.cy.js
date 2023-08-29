describe("Verify Subscription in home page", () => {
  it("Verify Subscription in home page", () => {
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Scroll down to footer
    cy.scrollTo("bottom");

    //Checking if the subscription is working
    cy.subscribe();
  });
});
