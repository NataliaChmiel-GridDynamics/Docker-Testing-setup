describe("Add Products in Cart", () => {
  it("Add Products in Cart", () => {
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

    //Verify both products are added to Cart
    cy.get("#product-1").should("exist");
    cy.get("#product-2").should("exist");

    //Verify their prices, quantity and total price
    cy.get("#product-1 .cart_price")
      .should("exist")
      .get("#product-2 .cart_price")
      .should("exist")
      .get("#product-1 .cart_quantity")
      .should("exist")
      .get("#product-2 .cart_quantity")
      .should("exist")
      .get("#product-1 .cart_total")
      .should("exist")
      .get("#product-2 .cart_total")
      .should("exist");
  });
});
