import { generateCredentials } from "./generateCredentials";

describe("Place Order: Login before Checkout", () => {
  it("Place Order: Login before Checkout", () => {
    const credentials = generateCredentials();
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Click ''Signup / Login' button
    cy.contains("a", " Signup / Login").click();

    //Account creation process
    cy.creatingAccount(credentials);

    //Log out
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Logout").click();
    });
    
    //Login process
    cy.loginToAccount(credentials);

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
