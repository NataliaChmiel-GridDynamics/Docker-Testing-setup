describe("View Category Products", () => {
  it("View Category Products", () => {
    cy.visit("http://automationexercise.com");

    //Verify that home page is visible successfully
    cy.get(".shop-menu li:first > a").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );

    //Add products to cart
    cy.get(".category-products").should("exist");

    //Click on 'Women' category
    cy.contains("a", " Women ").click();

    // Click on any category link under 'Women' category, for example: Dress
    cy.contains("a", "Dress").click();

    //Verify that category page is displayed and confirm text 'WOMEN - DRESS PRODUCTS'
    cy.contains("h2", "Women - Dress Products").should("exist");

    //On left side bar, click on any sub-category link of 'Men' category
    cy.contains("a", " Men ").click();
    cy.contains("a", "Jeans").click();

    //Verify that user is navigated to that category page
    cy.location("pathname").should("include", "category_products/6");
  });
});
