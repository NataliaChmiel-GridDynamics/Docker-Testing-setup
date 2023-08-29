describe("Download Invoice after purchase order", () => {
  it("Download Invoice after purchase order", () => {

    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Click on 'Products' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Products").click();
    });

    //Adding products to Cart
    cy.addProductsToCart();

    //Click 'View Cart' button
    cy.get(".modal-content").within(() => {
      cy.contains("a", "View Cart").click();
    });

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

    //Click 'Download Invoice' button and verify invoice is downloaded successfully.
    cy.contains("a", "Download Invoice").click();

    //Click 'Delete Account' button and verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.deleteAccount();
  });
});
