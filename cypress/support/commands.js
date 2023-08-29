import { faker } from "@faker-js/faker";
import { generateCredentials } from "../e2e/generateCredentials";

Cypress.Commands.add("deleteAccount", () => {
  cy.contains("a", "Delete Account").click();
  cy.contains("h2", "Account Deleted!").should("exist");
  cy.get('a[data-qa="continue-button"]').click();
});

Cypress.Commands.add("isHomePageVisible", () => {
  cy.get(".shop-menu li:first > a").should(
    "have.css",
    "color",
    "rgb(255, 165, 0)"
  );
  cy.get("#slider-carousel").should("exist");
});

Cypress.Commands.add("creatingAccount", (credentials) => {
  const { email, password } = credentials || generateCredentials();
  //Verify 'New User Signup!' is visible
  cy.get(".signup-form").should("exist");

  //Enter name and email address
  cy.get(".signup-form").within(() => {
    cy.get("input[data-qa=signup-name]").type("imie");
    cy.get("input[data-qa=signup-email]").type(email);
    cy.get("button[data-qa=signup-button]").click();
  });

  //Verify that 'ENTER ACCOUNT INFORMATION' is visible
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
});

Cypress.Commands.add("loginToAccount", ({ email, password }) => {
  //Verify 'Login to your account' is visible
  cy.get(".login-form").should("exist");

  //Enter correct email address and password
  cy.get(".login-form").within(() => {
    cy.get("input[data-qa=login-email]").type(email);
    cy.get("input[data-qa=login-password]").type(password);
  });

  //Click 'Login' button
  cy.get("[data-qa=login-button]").click();

  //Verify that 'Logged in as username' is visible
  cy.get(".shop-menu").within(() => {
    cy.get("a").should("contain.text", "Logged in as imie");
  });
});

Cypress.Commands.add("subscribe", () => {
  const randomEmail = faker.internet.email();

  //Verify text 'SUBSCRIPTION'
  cy.contains("h2", "Subscription");

  //Enter email address in input and click arrow button
  cy.get("input#susbscribe_email").type(randomEmail);
  cy.get("button#subscribe").click();
});

Cypress.Commands.add("addProductsToCart", () => {
  //Hover over first product and click 'Add to cart'
  cy.get(".overlay-content a:first").click({ force: true });

  //Click 'Continue Shopping' button
  cy.get(".close-modal").click();

  //Hover over second product and click 'Add to cart'
  cy.get(".overlay-content a").eq(1).click({ force: true });
});

Cypress.Commands.add("orderPlacement", () => {
  //Click 'Proceed To Checkout' button
  cy.contains("a", "Proceed To Checkout").click();

  //Verify Address Details and Review Your Order
  cy.get("[data-qa=checkout-info]").should("exist");

  //Enter description in comment text area and click 'Place Order'
  cy.get("textarea.form-control").type("Comment");
  cy.contains("a", "Place Order").click();

  //Enter payment details: Name on Card, Card Number, CVC, Expiration date
  cy.get(".payment-information").within(() => {
    cy.get("input[data-qa=name-on-card]").type("Natalia");
    cy.get("input[data-qa=card-number]").type("0123456789");
    cy.get("input[data-qa=cvc]").type("123");
    cy.get("input[data-qa=expiry-month]").type("01");
    cy.get("input[data-qa=expiry-year]").type("2025");
  });

  // Click 'Pay and Confirm Order' button
  cy.get('button[data-qa="pay-button"]').click();

  //Verify success message
  cy.get("[data-qa=order-placed]").should("exist");
});

Cypress.Commands.add("verifySubscription", () => {
  //Scroll down page to bottom
  cy.scrollTo("bottom");

  //Verify 'SUBSCRIPTION' is visible
  cy.contains("h2", "Subscription").should("exist");
});
