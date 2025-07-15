import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Load user credentials from Cypress environment variables
const username = Cypress.env('wholesale_user'); // e.g., set in cypress.env.json
const password = Cypress.env('wholesale_pwd');

Given('I visit the site {string}', (url) => {
    cy.visit(url);
});

Given('I log in as wholesale customer', () => {
    cy.get('a[aria-label="Login"]').click();
    cy.url().should('include', '/my-account');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[name="login"]').click();
    cy.contains('Dashboard').should('exist');
})

When('I open the product page {string}', (url) => {
    cy.contains('a', 'Shop').click();
    cy.url().should('include', '/shop');
    cy.visit(url);
})

Then('I should see wholesale price {string}', (price) => {
    cy.contains('.wholesale_price_container', 'Wholesale Price:').should('contain', price);
})

When('I add the product to the cart', () => {
    cy.get('button.single_add_to_cart_button').should('not.be.disabled').click();
    cy.get('.wc-block-components-notice-banner__content').should('contain.text', 'has been added to your cart.');
})

When('I go to the cart page {string}', (url) => {
    cy.contains('a', 'View cart').should('be.visible').click();
    cy.url().should('include', url);
})

Then('I should see wholesale price in cart is {string}', (price) => {
    cy.get('.wc-block-components-totals-item__value').should('contain.text', price);

})
