/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../support/pageObjects/HomePage'
import ProductPage from '../../../support/pageObjects/ProductPage'

var sum = 0;
const homePage = new HomePage();
const productPage = new ProductPage();
let name

Given('I open Ecommerce page', () => {

    cy.visit(Cypress.env('url') + 'angularpractice/')

})

When('I add items to Cart', function() {

            homePage.getShopTab().click()

            this.data.productName.forEach((element)=> {
                cy.selectProduct(element)
            })

            productPage.getCheckoutButton().click()

})

And('Validate the total prices', () => {


            cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
    
                const amount = $el.text()
                var res = amount.split(" ")
                res = res[1].trim()
                cy.log(res)

                sum = Number(sum) + Number(res)
    
            }).then( () => {
                
                cy.log(sum)
    
            })

            cy.get('h3 strong').then (element => {
                const amount = element.text()
                var res = amount.split(" ")
                const total = res[1].trim()
                expect(Number(total)).to.equal(Number(sum))
            })
    

})

Then('select the country submit and verify Thankyou', () => {

            cy.contains('Checkout').click()

            cy.get('#country').type('India')
            cy.get('.suggestions a').click()
    
            cy.get('#checkbox2').click({force : true})
    
            cy.get('input[type="submit"]').click()

            cy.get('.alert').then (element => {
    
                const actualText = element.text()

                expect(actualText.includes("Success! Thank you! Your order will be delivered in next few weeks :-).")).to.be.true
    
            })
})

// When I fill the form details
    When ('I fill the form', function(dataTable) {

        name = dataTable.rawTable[1][0];

        // Convert the dataTable into an array using .rawTable
        homePage.getEditBox().type(dataTable.rawTable[1][0])
        homePage.getGender().select(dataTable.rawTable[1][1])

    })

    Then ('Validate the forms behaviour', function() {

        homePage.getTwoWayDataBinding().should('have.value', name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')

    })

    And ('Select the shop page', () => {

        homePage.getShopTab().click()

    })