describe("Register User", () => {
  it("Register User", () => {
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Click on 'Signup / Login' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Signup / Login").click();
    });

    //Account creation process
    cy.creatingAccount();

    //Click 'Delete Account' button and verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.deleteAccount();
  });
});
