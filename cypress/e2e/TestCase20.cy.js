import { faker } from "@faker-js/faker";

describe("Search Products and Verify Cart After Login", () => {
  it("Search Products and Verify Cart After Login", () => {
    const randomEmail = faker.internet.email();
    const password = "password";
    cy.visit("/");

    //Click on 'Products' button
    cy.contains("a", "Products").click();

    //Verify user is navigated to ALL PRODUCTS page successfully
    cy.location("pathname").should("include", "products");

    //Enter product name in search input and click search button
    cy.get("input#search_product").type("Top");
    cy.get("button#submit_search").click();

    //Verify 'SEARCHED PRODUCTS' is visible
    cy.contains("h2", "Searched Products");

    //Verify all the products related to search are visible
    cy.get(".productinfo > p").should("exist", "Top");

    //Add those products to cart
    cy.get(
      ".features_items .product-image-wrapper .productinfo a.add-to-cart"
    ).each((element) => {
      cy.wrap(element).click({ force: true });
      cy.contains("button", "Continue Shopping").should("be.visible").click();
    });

    //Click 'Cart' button and verify that products are visible in cart
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Cart").click();
    });
    cy.get(".cart_info").should("exist");

    //Click on 'Signup / Login' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Signup / Login").click();
    });
    
    //Account creation process
    cy.creatingAccount();

    //Click 'Cart' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Cart").click();
    });

    //Verify that those products are visible in cart after login as well
    cy.get(".cart_info").should("exist");
  });
});
