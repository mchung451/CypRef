// Found Using 'Cypress Intelligent Code Completion'
/// <reference types="Cypress" />

describe("My Seventh Test Suite", () => {
    it("My Seventh Test", () => {
  
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // This method involves getting the href attribute
        // Using the prop jQuery method to obtain the href attribute
        cy.get('#opentab').then(el => {

            const url = el.prop('href')
            cy.visit(url)
        })

    })
})