/// <reference types="Cypress" />

class home_po {

    logo() {
        cy.get('img').should('have.attr', 'title', 'Automation Test Store')
    }

    loginRegister() {
        cy.get('#customernav').click()
    }

    loginNameDisplay(name) {
        cy.get(".menu_text").should("contain", "Welcome back " + name)
    }

    menuAccount() {
        cy.contains(".menu_text", "Account").trigger("mouseover")
    }

    login() {
        cy.get(".menu_text").contains("Login").click()
    }

}

export default home_po