import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import 'cypress-xpath';

Given("I open URL SAS", ()=>{
    cy.visit("https://arista.sales.intg.gotvsd.com/")
})
When("I enter tel {string}", (phoneNumber)=>{
    cy.get('[placeholder="8123456789"]').click()
    cy.wait(200)
    cy.get('input[type="tel"]').type(phoneNumber).should('have.value',phoneNumber)
})

And("I enter password {string}", (Password)=>{
    cy.get('input[type="password"]').type(Password)
})

And("I click {string}", (Next)=>{
    cy.get('.chakra-button').click()
})

Then("Go to Landing Page", ()=>{
    cy.contains('Penjualan bulan ini').should('be.visible')
})

describe('Hello World Test', () => {
    it('should print "Hello, World!"', () => {
    cy.log('Hello, World!');
    });
});