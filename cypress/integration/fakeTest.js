/// <reference types="Cypress" />

describe('My Test Suite', () => {

    it('my firstTest case', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // Below shows the syntax for .intercept()
        // cy.intercept({requestObject}, {responseObject})
        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
         
        }, 
        {
            statusCode : 200,
            body : [
                {
                aisle: "2301",
                book_name: "RestAssured with Java",
                isbn: "RSU"
                }
            ]
        }).as('bookretrievals')

        cy.get('[class="btn btn-primary"]').click()

        // This awaits for the promise above is resolved such
        // that the behaviour is synchronous
        // **HERE**
        cy.wait('@bookretrievals').should(({request,response}) => {

            // Retrieving number of rows
            // Validating the number of rows contained within the response body
            cy.get('tr').should('have.length', response.body.length+1)

        })

        // Validating that the mock response actually worked
        cy.get('p').should('have.text', 'Oops only 1 Book available')


        /////////////////////////////////////////////////////////////


        // Length of the reponse array = rows of the table
        // see above, after .shoud() for cy.wait **HERE**


    })

})