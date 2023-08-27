import { faker } from "@faker-js/faker";

describe("Verify Subscription in Cart page", () => {
  it("Verify Subscription in Cart page", () => {
    const randomEmail = faker.internet.email();
    cy.visit("http://automationexercise.com");

    //Verify that home page is visible successfully
    cy.get(".shop-menu li:first > a").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );

    //Click 'Cart' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Cart").click();
    });

    //Scroll down to footer
    cy.scrollTo('bottom');

    //Verify text 'SUBSCRIPTION'
    cy.contains("h2", "Subscription");

    //Enter email address in input and click arrow button
    cy.get("input#susbscribe_email").type(randomEmail);
    cy.get("button#subscribe").click();
  });
});
