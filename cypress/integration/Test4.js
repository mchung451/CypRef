// Found Using 'Cypress Intelligent Code Completion'
/// <reference types="Cypress" />

describe('My Fourth Test Suite', () => {
    it('My Fourth Test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Alerts in web applications 
        // Cypress auto accepts alerts and pop-ups
        // Cypress also has the capabaility to listen to browser events
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // window:alert
        // .on() is a method which helps trigger events
        // it takes two arguments
        // 1) Fires the argument
        // 2) ??? (I'm guessing this is the response)
        cy.on('window:alert', (str) => {
        
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
        
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //////////////////////////////////////////////////

        // 'invoke' command allows the use of jquery methods
        // In order to open the new tab in the same broswer window
        // You need to manipulate the DOM to alter the target attribute
        // In the below example, the .invoke() command takes 2 arguments
        // 1) Function
        // 2) Target
        // The purpose of invoke command below is to remove the 'target' attribute
        // in the DOM, such that the link opens in the same tab
        cy.get('#opentab').invoke('removeAttr','target').click()


        /////////////////////////////////////////////////////

        // Validating the child tab has thecorrect URL
        // .url() method grabs the URL of the current page
        cy.url().should('include','rahulshettyacademy')

        // The .go() method allows for browser navigation
        cy.go('back')
    })

})