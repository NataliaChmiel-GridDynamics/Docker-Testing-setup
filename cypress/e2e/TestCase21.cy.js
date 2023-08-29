import { faker } from "@faker-js/faker";

describe("Add review on product", () => {
  it("Add review on product", () => {
    const randomEmail = faker.internet.email();
    cy.visit("/");

    //Click on 'Products' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Products").click();
    });

    // Verify user is navigated to ALL PRODUCTS page successfully
    cy.location("pathname").should("include", "products");

    //Click on 'View Product' button
    cy.get("div.choose a:first").click();

    //Verify 'Write Your Review' is visible
    cy.contains("a", "Write Your Review").should("exist");

    //Enter name, email and review
    cy.get("input#name").type("Natalia");
    cy.get("input#email").type(randomEmail);
    cy.get("textarea#review").type("Lorem ipsum");

    //Click 'Submit' button
    cy.get("button#button-review").click();
  });
});
