describe("Verify Subscription in Cart page", () => {
  it("Verify Subscription in Cart page", () => {
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Click 'Cart' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Cart").click();
    });

    //Scroll down to footer
    cy.scrollTo("bottom");

    //Checking if the subscription is working
    cy.subscribe();
  });
});
