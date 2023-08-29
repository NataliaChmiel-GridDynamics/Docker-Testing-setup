import { faker } from "@faker-js/faker";

describe("Place Order: Register before Checkout", () => {
  it("Place Order: Register before Checkout", () => {
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Click 'Register / Login' button
    cy.contains("a", " Signup / Login").click();

    //Account creation process
    cy.creatingAccount();

    //Adding products to Cart
    cy.addProductsToCart();

    //Click 'Continue Shopping' button
    cy.get(".close-modal").click();

    //Click 'Cart' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Cart").click();
    });

    //Verify that cart page is displayed
    cy.get("#cart_info_table").should("exist");

    //Order process
    cy.orderPlacement();

    //Click 'Delete Account' button and verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.deleteAccount();
  });
});
