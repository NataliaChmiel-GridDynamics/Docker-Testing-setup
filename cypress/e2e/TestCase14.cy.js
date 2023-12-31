import { faker } from "@faker-js/faker";

describe("Place Order: Register while Checkout", () => {
  it("Place Order: Register while Checkout", () => {
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

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

    //Click Proceed To Checkout
    cy.contains("a", "Proceed To Checkout").click();

    //Click 'Register / Login' button
    cy.contains("a", "Register / Login").click();

    //Account creation process
    cy.creatingAccount();

    //Click 'Cart' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Cart").click();
    });

    //Order process
    cy.orderPlacement();

    //Click 'Delete Account' button and verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.deleteAccount();
  });
});
