//Search Product

describe("Search Product", () => {
  it("Search Product", () => {
    cy.visit("http://automationexercise.com");

    //Verify that home page is visible successfully
    cy.get(".shop-menu li:first > a").should(
      "have.css",
      "color",
      "rgb(255, 165, 0)"
    );

    //Click on 'Products' button
    cy.get('a[href="/products"]').click();

    //Verify user is navigated to ALL PRODUCTS page successfully
    cy.location("pathname").should("match", /^\/products$/);

    //Enter product name in search input and click search button
    cy.get("input#search_product").type("Blue Top");
    cy.get("button#submit_search").click();

    //Verify 'SEARCHED PRODUCTS' is visible
    cy.contains("h2", "Searched Products").should("exist");

    //Verify all the products related to search are visible
    cy.contains("p", "Blue Top").should("exist");
  });
});
