import { faker } from "@faker-js/faker";

describe("Search Products and Verify Cart After Login", () => {
  it("Search Products and Verify Cart After Login", () => {
    const randomEmail = faker.internet.email();
    const password = "password";
    cy.visit("http://automationexercise.com");

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

    //Click 'Signup / Login' button and submit login details
    cy.contains("a", "Signup / Login").click();

    //Enter name and email address
    cy.get(".signup-form").within(() => {
      cy.get("input[data-qa=signup-name]").type("imie");
      cy.get("input[data-qa=signup-email]").type(randomEmail);
      cy.get("button[data-qa=signup-button]").click();
    });

    //   //Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get(".login-form").should("exist");

    //Fill details: Title, Name, Email, Password, Date of birth
    cy.get(".login-form").within(() => {
      cy.get('input[type="radio"]').check();
      cy.get("input[data-qa=password]").type(password);
      cy.get("select[data-qa=days]").select("19");
      cy.get("select[data-qa=months]").select("10");
      cy.get("select[data-qa=years]").select("2000");
    });

    //Select checkbox 'Sign up for our newsletter!'& Select checkbox 'Receive special offers from our partners!'
    cy.get("[type=checkbox]").check();

    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get(".login-form").within(() => {
      cy.get("input[data-qa=first_name]").type("Natalia");
      cy.get("input[data-qa=last_name]").type("Chmiel");
      cy.get("input[data-qa=company]").type("Grid Dynamics");
      cy.get("input[data-qa=address]").type("Wieś 123");
      cy.get("select[data-qa=country]").select("India");
      cy.get("input[data-qa=state]").type("India");
      cy.get("input[data-qa=city]").type("Bangladesz");
      cy.get("input[data-qa=zipcode]").type("20-2548");
      cy.get("input[data-qa=mobile_number]").type("127-589-621");
      cy.get("button[data-qa=create-account]").click();
    });

    //Verify that 'ACCOUNT CREATED!' is visible
    cy.get("[data-qa=account-created]").should("exist");

    //Click 'Continue' button
    cy.get("[data-qa=continue-button]").click();

    //Verify that 'Logged in as username' is visible
    cy.get(".shop-menu").within(() => {
      cy.get("li:last").should("contain.text", "Logged in as imie");
    });

    //Click 'Cart' button
    cy.get(".shop-menu").within(() => {
      cy.contains("a", "Cart").click();
    });

    //Verify that those products are visible in cart after login as well
    cy.get(".cart_info").should("exist");
  });
});
