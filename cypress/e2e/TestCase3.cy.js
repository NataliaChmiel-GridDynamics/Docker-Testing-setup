import { faker } from "@faker-js/faker";

describe("Login user with incorrect email and password", () => {
  it("Login incorrect", () => {
    const randomEmail = faker.internet.email();
    const password = "password";
    cy.visit("http://automationexercise.com");

    //Verify that home page is visible successfully
    cy.get(".shop-menu li:first > a").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );

    //Click on 'Signup / Login' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Signup / Login").click();
    });

    //Verify 'Login to your account' is visible
    cy.get(".login-form").should("exist");

    //Enter incorrect email address and password
    cy.get(".login-form").within(() => {
      cy.get("input[data-qa=login-email]").type(randomEmail);
      cy.get("input[data-qa=login-password]").type(password);
    });

    //Click 'login' button
    cy.get("[data-qa=login-button]").click();

    //Verify error 'Your email or password is incorrect!' is visible
    cy.get(".login-form").within(() => {
      cy.get("p").should("exist");
    });
  });
});
