/// <reference types="Cypress" />

describe('My Test Suite', () => {

    it('my firstTest case', () => {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name":"Learn Appium Automation with Java",
            "isbn":"bcdsss",
            "aisle":"22s7",
            "author":"John foe"
    
        }).then(response => {

            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.equal(200)

        })

    })
})