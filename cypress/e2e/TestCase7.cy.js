describe("Verify Test Cases Page", () => {
  it("Verify Test Cases Page", () => {
    cy.visit("http://automationexercise.com");

    // Verify that home page is visible successfully
    cy.get(".shop-menu li:first > a").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );

    // Click on 'Test Cases' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Test Cases").click();
    });

    //Verify user is navigated to test cases page successfully
    cy.contains("b", "Test Cases").should("exist");
  });
});
