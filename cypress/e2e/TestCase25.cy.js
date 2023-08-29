describe("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", () => {
  it("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", () => {
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Verify Subscription process
    cy.verifySubscription();

    //Click on arrow at bottom right side to move upward
    cy.get('a[id="scrollUp"]').click();

    //Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
    cy.contains(
      "h2",
      "Full-Fledged practice website for Automation Engineers"
    ).should("exist");
  });
});
