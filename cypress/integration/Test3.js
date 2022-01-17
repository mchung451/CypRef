// In order to write cypress test, need to use testing framework such
// as Jasmine or Mocha (Mocha is reccomended) - Cypress automatically
// bundles Mocha

// Found Using 'Cypress Intelligent Code Completion'
/// <reference types="Cypress" />

describe('My Third Test Suite', () => {
    
    it('My First Test case', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Using the 'check' method used specifically for checkboxes
        // For making a second assertion, can use 'and' for concatenation of assertions
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')


        // Unchecking the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // To check all the boxes in one, find a common property of all checkboxes
        // Send the arguments in an array for the checkboxes required to be checked
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        ////////////////////////////////////////////////////

        // For Static Dropdown
        // the 'select' tag is unique to static dropdown boxes
        // subsequently pass the option name or value in the '.select()' method 
        cy.get('select').select('option2').should('have.value', 'option2')

        /////////////////////////////////////////////////////

        // For Dynamic Dropdown
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === 'India'){
                cy.wrap($el).click()
            }
        })

        // Making assertion
        cy.get('#autocomplete').should('have.value', 'India')

        ///////////////////////////////////////////////////////

        // Validation if an element is visible or not visible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        ///////////////////////////////////////////////////////

        // Radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')

    })
})
