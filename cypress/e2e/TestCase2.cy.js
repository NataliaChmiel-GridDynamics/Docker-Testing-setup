import { generateCredentials } from "./generateCredentials";

describe("Login user with correct email and password", () => {
  it("Login user with correct email and password", () => {
    const credentials = generateCredentials();

    cy.visit("/");

    //Click on 'Signup / Login' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Signup / Login").click();
    });

    //Account creation process
    cy.creatingAccount(credentials);

    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Logout").click();
      cy.contains("a", "Home").click();
    });

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Click on 'Signup / Login' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Signup / Login").click();
    });
    
    //Login process
    cy.loginToAccount(credentials);

    //Click 'Delete Account' button and verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.deleteAccount();
  });
});
