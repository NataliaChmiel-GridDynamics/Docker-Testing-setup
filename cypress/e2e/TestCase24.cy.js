import { faker } from "@faker-js/faker";

describe("Place Order: Register while Checkout", () => {
  it("Place Order: Register while Checkout", () => {
    const randomEmail = faker.internet.email();
    const password = "password";
    cy.visit("http://automationexercise.com");

    //Verify that home page is visible successfully
    cy.get(".shop-menu li:first > a").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );

    //Scroll down page to bottom
    cy.scrollTo('bottom');

    //Verify 'SUBSCRIPTION' is visible
    cy.contains('h2', 'Subscription').should('exist');

    //Click on arrow at bottom right side to move upward
    cy.get('a[id="scrollUp"]').click();
    
    

  });
});
