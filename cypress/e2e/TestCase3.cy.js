import { faker } from "@faker-js/faker";

describe("Login user with incorrect email and password", () => {
  it("Login user with incorrect email and password", () => {
    const randomEmail = faker.internet.email();
    const password = "password";
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Click on 'Signup / Login' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Signup / Login").click();
    });

    //Verify 'Login to your account' is visible
    cy.get(".login-form").should("exist");

    //Enter correct email address and password
    cy.get(".login-form").within(() => {
      cy.get("input[data-qa=login-email]").type(randomEmail);
      cy.get("input[data-qa=login-password]").type(password);
    });

    //Click 'Login' button
    cy.get("[data-qa=login-button]").click();

    //Verify error 'Your email or password is incorrect!' is visible
    cy.get(".login-form").within(() => {
      cy.get("p").should("exist");
    });
  });
});
