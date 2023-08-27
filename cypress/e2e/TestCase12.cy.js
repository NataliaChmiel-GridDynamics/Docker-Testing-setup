describe("Contact Us Form", () => {
  it("Contact Us Form", () => {
    cy.visit("http://automationexercise.com");

    //Verify that home page is visible successfully
    cy.get(".shop-menu li:first > a").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );

    //Click on 'Products' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Products").click();
    });

    //Hover over first product and click 'Add to cart'
    cy.get(".overlay-content a:first").click({ force: true });

    //Click 'Continue Shopping' button
    cy.get(".close-modal").click();

    //Hover over second product and click 'Add to cart'
    cy.get(".overlay-content a").eq(1).click({ force: true });

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
