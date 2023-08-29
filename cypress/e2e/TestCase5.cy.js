import { faker } from "@faker-js/faker";

describe("Register User with existing email", () => {
  it("Register User with existing email", () => {
    const credentials = generateCredentials();
    
    cy.visit("/");

    //  //Click on 'Signup / Login' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Signup / Login").click();
    });
    
    //Account creation process
    cy.creatingAccount(credentials);

    //Click 'Logout' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Logout").click();
    });

    // Click on 'Signup / Login' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Signup / Login").click();
    });

    //Verify 'New User Signup!' is visible
    cy.get(".signup-form").should("exist");

    //Enter name and email address
    cy.get(".signup-form").within(() => {
      cy.get("input[data-qa=signup-name]").type("imie");
      cy.get("input[data-qa=signup-email]").type(credentials.email);
      cy.get("button[data-qa=signup-button]").click();
    });

    //Verify error 'Email Address already exist!' is visible
    cy.get(".signup-form").within(() => {
      cy.contains("p").should("exist");
    });
  });
});
