/// <reference types="Cypress" />

describe('My Test Suite', () => {

    it('my firstTest case', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // Alternative .intercept() syntax
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) => {
        req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

        // .continue() hits the server with the modified request
        req.continue((res) => {
            expect(res.statusCode).to.equal(403)
        })

        }).as("dummyUrl")

        cy.get('[class="btn btn-primary"]').click()
        cy.wait('@dummyUrl')

    })

})