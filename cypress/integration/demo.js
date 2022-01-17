/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

// Type 'npm install -D cypress-iframe' to install the required package 

describe('Frames Test', () => {
    it('Demo example', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // The following method allows for all future commands to be 
        // associated only with the frame specified in .frameLoaded()
        cy.frameLoaded('#courses-iframe')

        // Switching to iframe mode using .iframe()
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        // Validation of content on the iframe
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })
})