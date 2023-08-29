describe("Verify Test Cases Page", () => {
  it("Verify Test Cases Page", () => {
    cy.visit("/");

    // Verify that home page is visible successfully
    cy.isHomePageVisible();

    // Click on 'Test Cases' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Test Cases").click();
    });

    //Verify user is navigated to test cases page successfully
    cy.contains("b", "Test Cases").should("exist");
  });
});
