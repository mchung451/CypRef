// Found Using 'Cypress Intelligent Code Completion'
/// <reference types="Cypress" />

describe("My Fifth Test Suite", () => {
  it("My Fifth Test", () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

        const text = $el.text()

        if(text.includes('Python')){

            // .next() finds the next sibling element
            // correct usage is to apply directly on .get() method ONLY
            cy.get('tr td:nth-child(2)').eq(index).next().then(price => {

                // Asserting the sibling element is equal to 25
                // First, the promise must be resolved using .then()
                // Henceforth, the .text() method can be applied to extract the value
                const priceText = price.text()
                expect(priceText).to.equal('25')

            })
        }
    })
  })
})
