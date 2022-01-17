class HomePage {

    // Creating a Method for all cypress functionalities found in
    // 'Test8Framework.js
    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender(){
        return cy.get('select')
    }

    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;