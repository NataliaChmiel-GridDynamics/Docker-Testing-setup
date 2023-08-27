describe("Remove Products From Cart", () => {
  it("Remove Products From Cart", () => {
    cy.visit("http://automationexercise.com");

    //Verify that home page is visible successfully
    cy.get(".shop-menu li:first > a").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );

    //Add products to cart
    cy.get(".overlay-content a:first").click({ force: true });

    //Click 'Continue Shopping' button
    cy.get(".close-modal").click();

    //Add products to cart
    cy.get(".overlay-content a").eq(1).click({ force: true });

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
