describe("Verify All Products and product detail page", () => {
  it("Verify All Products and product detail page", () => {
    cy.visit("http://automationexercise.com");

    //Verify that home page is visible successfully
    cy.get(".shop-menu li:first > a").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );

    // Click on 'Products' button
    cy.get('a[href="/products"]').click();

    // Verify user is navigated to ALL PRODUCTS page successfully
    cy.location('pathname').should("match", /^\/products$/);

    // The products list is visible
    cy.get(".features_items").should("exist");

    //Click on 'View Product' of first product
    cy.get('.features_items').within(() => {
        cy.get('a[href="/product_details/1"]').click();
    })

    //User is landed to product detail page
    cy.url().should("include", "/product_details/1");

    // Verify that detail is visible: product name, category, price, availability, condition, brand
    cy.get('.product-information').should('exist');
  });
});
