/// <reference types="Cypress" />
import HomePage from '../support/pageObjects/HomePage'
import ProductPage from '../support/pageObjects/ProductPage'

describe("My Test Suite", () => {

    before(function() {
        // runs once before each block

        // Using cy.fixture()
        cy.fixture('example').then(data => {

            // The scope of 'data' was originally confined to this code block
            // This use of the this keyword allows it to be migrated to a global scope
            this.data = data
        }) 
    })

    it('My First Test Case', function() {

        // Changes the default timeout to a longer time for this test spec
        // Works for each subsequent line of code after the statement
        Cypress.config('defaultCommandTimeout', 8000)

        // Creates an Object of HomePage
        const homePage = new HomePage();
        const productPage = new ProductPage();

        // Removes the hard coded url; instead it is stored in cypress.json file
        cy.visit(Cypress.env('url') + 'angularpractice/')

        // No unique ID or Class so use parent value
        //// THIS CAN BE UNCOMMENTED ////
        // cy.get('input[name="name"]:nth-child(2)').type('bob')

        // cy.get('select').select('Female')

        ////////////////////////////////////////////////////////


        // The same process as above but instead using cypress fixtures
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)


        ////////////////////////////////////////////////////////

        
        // Checking if two way data binding is working 
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        // Validation that the minimum length criteria has been met
        // Use 'have.attr' to validate an attribute
        homePage.getEditBox().should('have.attr','minlength','2')

        // Validation that a radio button is disabled or not
        homePage.getEntrepreneur().should('be.disabled')


        /////////////////////////////////////////////////////////

        // Naviating to the shop
        homePage.getShopTab().click()

        // Before Refactoring //
        
        // cy.get('.card-title').each(($el, index, $list) => {
        //     if($el.text().includes('Blackberry')){
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }
        // })

        // After Refactoring - See Cypress Custom Command 'selectProduct'
        // NOTE the below two lines have been refactored to remove hard coding
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')

        // After imlementing the productNames in the fixture folder
        // The use of a forEach loop can simplify the above task
        this.data.productName.forEach((element)=> {
            cy.selectProduct(element)
        })


        //////////////////////////////////////////////////////

        // Clicking the checkout button
        productPage.getCheckoutButton().click()


        //////////////////////////////////////////////////////

        // Intialise the sum of the products
        var sum = 0

        // Validating the sum of the totals
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

            const amount = $el.text()

            // Converting the prices to pure integers by splitting from the whitespace
            var res = amount.split(" ")
            res = res[1].trim()
            cy.log(res)


            // Wrap the 'res' value as a Number to parse it as an integer
            // The same must be done for the 'sum' value as it is also seen as a String in standard JS
            sum = Number(sum) + Number(res)

        }).then( () => {
            
            // As this section is JS it is asynchronous
            // Therefore, the then keyword is needed to resolve the promise
            // AKA, cy.log(sum) only occcurs after the preceding code block is complete
            cy.log(sum)

        })


        //////////////////////////////////////////////////////

        // This section deals with comparing the previously obtained sum
        // with the value found on the total section 
        cy.get('h3 strong').then (element => {
            const amount = element.text()
            var res = amount.split(" ")
            const total = res[1].trim()

            // Asserting that the total is equal to the sum
            expect(Number(total)).to.equal(Number(sum))
        })


        //////////////////////////////////////////////////////

        // Clicking checkout on the actual checkout page
        cy.contains('Checkout').click()

        // Getting the input box
        cy.get('#country').type('India')
        cy.get('.suggestions a').click()


        /////////////////////////////////////////////////////

        // Checking the checkbox
        cy.get('#checkbox2').click({force : true})

        // Clicking on purchase
        cy.get('input[type="submit"]').click()

        // Validating successful purchase message
        // The 1st example below doesn't work as there are additional characters
        // cy.get('.alert').should('have.text', "Success! Thank you! Your order will be delivered in next few weeks :-).")
        cy.get('.alert').then (element => {

            const actualText = element.text()

            // Chai expect.to.be.true is used instead of an if statement
            expect(actualText.includes("Success! Thank you! Your order will be delivered in next few weeks :-).")).to.be.true

        })


    })

})