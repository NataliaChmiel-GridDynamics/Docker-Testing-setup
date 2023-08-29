import { faker } from "@faker-js/faker";

describe("Contact Us Form", () => {
  it("Contact Us Form", () => {
    const randomEmail = faker.internet.email();
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Click on 'Contact Us' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Contact us").click();
    });

    //Verify 'GET IN TOUCH' is visible
    cy.get(".title").should("exist");

    //Enter name, email, subject and message
    cy.get("#contact-us-form").within(() => {
      cy.get("input[data-qa=name]").type("name");
      cy.get("input[data-qa=email]").type(randomEmail);
      cy.get("input[data-qa=subject]").type("subject");
      cy.get("[data-qa=message]").type("message");

      //Upload file
      cy.get("input[type=file]").selectFile("cypress/e2e/TestCase1.js");
    });
    cy.get("input[data-qa=submit-button]").click();
    cy.on("window:confirm", () => true);

    //Verify success message 'Success! Your details have been submitted successfully.' is visible
    cy.get(".alert-success").should("exist");

    //Click 'Home' button and verify that landed to home page successfully
    cy.get(".btn-success").click();
  });
});
