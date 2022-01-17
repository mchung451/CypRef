// NB: Mocha does not currently support arrow function syntax

beforeEach(function() {

    cy.fixture('example').then(data => {

        this.data = data
    }) 

})