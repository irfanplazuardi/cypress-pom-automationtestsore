/// <reference types="Cypress" />

class login_po {

    loginName(name) {
        cy.get("#loginFrm_loginname").type(name)
    }

    password(passwword) {
        cy.get("#loginFrm_password").type(passwword, { log: false })
    }

    loginbtn() {
        cy.contains("button", "Login").click()
    }

    forgetPassword() {
        cy.contains("a", "Forgot your password?").click()
    }

    forgetLoginName() {
        cy.contains("a", "Forgot your login?").click()
    }

    lastName(lastname) {
        cy.get("#forgottenFrm_lastname").type(lastname)
    }

    emailAddress(email) {
        cy.get("#forgottenFrm_email").type(email)
    }

    continue() {
        cy.contains("button", "Continue").click()
    }

    errorInvalidNamePassword(){
        cy.get('.alert-error').contains("Error: Incorrect login or password provided.")
    }

    loginNameSent() {
        cy.get(".alert-success").contains("Success: Your login name reminder has been sent to your e-mail address.")
    }

    loginNameForgotForm(name) {
        cy.get("#forgottenFrm_loginname").type(name)
    }

    passwordResetSent() {
        cy.get(".alert-success").contains("Success: Password reset link has been sent to your e-mail address.")
    }



}

export default login_po