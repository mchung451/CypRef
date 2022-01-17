// Found Using 'Cypress Intelligent Code Completion'
/// <reference types="Cypress" />

describe("My Sixth Test Suite", () => {
    it("My Sixth Test", () => {
  
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Use show to show hover over elements
        // Show should only be applied to the immmidiate parent element 
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

        // Alternatively, you can use { force: true } to click on hidden elements
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')

    })
})