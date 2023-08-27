describe("View & Cart Brand Products", () => {
  it("View & Cart Brand Products", () => {
    cy.visit("http://automationexercise.com");

    //Click on 'Products' button
    cy.contains("a", "Products").click();

    //Verify that Brands are visible on left side bar
    cy.get(".brands_products").should("exist");

    //Click on any brand name
    cy.contains("a", "Polo").click();

    //Verify that user is navigated to brand page and brand products are displayed
    cy.location("pathname").should("include", "brand_products/Polo");

    //On left side bar, click on any other brand link
    cy.contains("a", "H&M").click();

    //Verify that user is navigated to that brand page and can see products
    cy.location("pathname").should("include", "brand_products/H&M");
    cy.contains("h2", "Brand - H&M Products").should("exist");
  });
});
