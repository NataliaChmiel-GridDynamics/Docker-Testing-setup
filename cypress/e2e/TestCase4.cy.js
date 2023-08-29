import { generateCredentials } from "./generateCredentials";

describe("Logout User", () => {
  it("Logout User", () => {
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

    //Click 'Logout' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Logout").click();
    });

    //Verify that user is navigated to login page
    cy.url().should("include", "/login");
  });
});
