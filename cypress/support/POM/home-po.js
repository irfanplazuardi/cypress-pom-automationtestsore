class home_po {

    logo() {
        cy.get('img').should('have.attr', 'title', 'Automation Test Store')
    }

    loginRegister() {
        cy.get('#customernav').click()
    }

}

export default home_po