describe("Verify address details in checkout page", () => {
  it("Verify address details in checkout page", () => {
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Click 'Signup / Login' button
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

    //Click Proceed To Checkout
    cy.contains("a", "Proceed To Checkout").click();

    //Verify Address Details and Review Your Order
    cy.get("[data-qa=checkout-info]").should("exist");

    //Verify that the delivery address is same address filled at the time registration of account
    cy.get("#address_delivery").should("exist");

    //Verify that the billing address is same address filled at the time registration of account
    cy.get("#address_invoice").should("exist");

    //Click 'Delete Account' button and verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.deleteAccount();
  });
});
