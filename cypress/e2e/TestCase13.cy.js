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
    cy.get(".choose a:first").within(() => {
      cy.contains("a", "View Product").click();
    });

    //Verify product detail is opened
    cy.get(".product-information").should("exist");

    //Increase quantity to 4
    cy.get("input#quantity").clear().type("4");

    //Click 'Add to cart' button
    cy.get("button.cart").click();

    //Click 'View Cart' button
    cy.get(".modal-content").within(() => {
      cy.contains("a", "View Cart").click();
    });

    //Verify that product is displayed in cart page with exact quantity
    cy.contains('button', '4').should('exist');
  });
});
