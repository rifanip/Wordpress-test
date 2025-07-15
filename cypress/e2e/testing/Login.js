import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import 'cypress-xpath';

Given('I am on the login page', ()=>{
    cy.visit("https://arista.sales.intg.gotvsd.com/")
})
When('I input the phone number {string}', (phoneNumber)=>{
    cy.get('[placeholder="8123456789"]').click()
    cy.wait(200)
    cy.get('input[type="tel"]').type(phoneNumber).should('have.value',phoneNumber)
})
And('I input the password {string}', (password)=>{
    cy.wait(200)
    cy.get('input[type="password"]').type(password)
})
And('I click the {string} button', (next)=>{
    cy.get('.chakra-button').click()
})
Then('I should see an error message {string}', (error)=>{
    cy.contains(error).should('be.visible')
})

When('I click {string} button without entering any credentials', (next)=>{
    cy.wait(200)
    cy.get('.chakra-button').click()
})
Then('I should see an error message {string}', (warningmessage)=>{
    cy.contains(warningmessage).should('be.visible')
})

When('I input the phone number {string}', (phone)=>{
    cy.get('[placeholder="8123456789"]').click()
    cy.get('input[type="tel"]').type(phone).should('have.value',phone)
})
And('I click {string} button', (next)=>{
    cy.get('.chakra-button').click()
})
Then('I should see an error message {string}', (warning)=>{
    cy.contains(warning).should('be.visible')
})
