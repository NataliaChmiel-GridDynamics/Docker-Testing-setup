describe("Remove Products From Cart", () => {
  it("Remove Products From Cart", () => {
    cy.visit("/");

    //Verify that home page is visible successfully
    cy.isHomePageVisible();

    //Adding products to cart
    cy.addProductsToCart();

    //Click 'Continue Shopping' button
    cy.get(".close-modal").click();

    //Click 'Cart' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Cart").click();
    });

    //Verify that cart page is displayed
    cy.get("#cart_info_table").should("exist");

    //Click 'X' button corresponding to particular product
    cy.get("a.cart_quantity_delete").eq(0).click();

    //Verify that product is removed from the cart
    cy.get("#product-1").should("not.exist");
  });
});
