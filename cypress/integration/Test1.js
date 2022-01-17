// In order to write cypress test, need to use testing framework such
// as Jasmine or Mocha (Mocha is reccomended) - Cypress automatically
// bundles Mocha

// Found Using 'Cypress Intelligent Code Completion'
/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    
    it('My First Test case', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        // cypress 'get' acts like findElement in selenium
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        // by adding ':visible' after the get locator, only visible elements are considered
        cy.get('.product:visible').should('have.length',4)

        // Parent/child chaining (using the find keyword)
        cy.get('.products').find('.product').should('have.length',4)

        // Out of the 4 products found, use 'eq' to obtain the product at the given index
        // 'contains' will search for the inputted text in the element 
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        // Iterating through each of the products using 'each' keyword
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes("Cashews")){
                cy.wrap($el).find('button').click()
            }
        })

        // PROMISE HANDLING - the state of a command - rejection, resolved, pending

        // Manual promise handling
        // .text() is a jQuery method, thus it cannot be chained as a child element of a Cypress command
        cy.get('.brand').then(logoElement => {
            cy.log(logoElement.text())
        })

        // Using Cypress alias to save repeated commands using 'as' as a shorthand
        // to call, use the following syntax
        // cy.get('@productLocator')
        cy.get('.products').as('productLocator')

        // Assert if logo text is correctly displated
        cy.get('.brand').should('have.text', 'GREENKART')
    })
})
