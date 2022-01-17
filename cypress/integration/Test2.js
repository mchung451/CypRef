// In order to write cypress test, need to use testing framework such
// as Jasmine or Mocha (Mocha is reccomended) - Cypress automatically
// bundles Mocha

// Found Using 'Cypress Intelligent Code Completion'
/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    
    it('My First Test case', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        // cypress 'get' acts like findElement in selenium
        cy.get('.search-keyword').type('ca')

        // Using Cypress alias to save repeated commands using 'as' as a shorthand
        // to call, use the following syntax
        // cy.get('@productLocator')
        cy.get('.products').as('productLocator')

        // Iterating through each of the products using 'each' keyword
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes("Cashews")){
                cy.wrap($el).find('button').click()
            }
        })

        // Click the checkout bag
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})
