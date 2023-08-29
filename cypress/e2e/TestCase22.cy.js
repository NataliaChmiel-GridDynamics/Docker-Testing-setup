describe("Add to cart from Recommended items", () => {
  it("Add to cart from Recommended items", () => {
    cy.visit("/");

    //Scroll to bottom of page
    cy.scrollTo("bottom");

    //Verify 'RECOMMENDED ITEMS' are visible
    cy.contains("h2", "recommended items").should("exist");

    //Click on 'Add To Cart' on Recommended product
    cy.get("#recommended-item-carousel a").eq(0).click({ force: true });

    //Click on 'View Cart' button
    cy.contains("u", "View Cart").click();

    //Verify that product is displayed in cart page
    cy.get("#product-1").should("exist");
  });
});
