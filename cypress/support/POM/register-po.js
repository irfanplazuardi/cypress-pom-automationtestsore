class register_po {

    continue() {
        cy.contains("button", "Continue").click()
    }

    firstName(name) {
        cy.get('#AccountFrm_firstname').type(name)
    }

    lastName(last) {
        cy.get('#AccountFrm_lastname').type(last)
    }

    email(mail) {
        cy.get("#AccountFrm_email").type(mail)
    }

    telephone(phone) {
        cy.get("#AccountFrm_telephone").type(phone)
    }

    fax(fax) {
        cy.get('#AccountFrm_fax').type(fax)
    }

    company(company) {
        cy.get('#AccountFrm_company').type(company)
    }

    address1(address) {
        cy.get("#AccountFrm_address_1").type(address)
    }

    address2(address2) {
        cy.get("#AccountFrm_address_2").type(address2)
    }

    country(country) {
        cy.get("#AccountFrm_country_id").select(country)
    }

    city(city) {
        cy.get('#AccountFrm_city').type(city)
    }

    regionState(region) {
        cy.get("#AccountFrm_zone_id").select(region)
    }

    postcode(code) {
        cy.get("#AccountFrm_postcode").type(code)
    }

    loginName(name) {
        cy.get("#AccountFrm_loginname").type(name)
    }

    password(password) {
        cy.get('#AccountFrm_password').type(password, { log: false })
    }

    confirmPassword(password) {
        cy.get('#AccountFrm_confirm').type(password, { log: false })
    }

    newsletter() {
        cy.get("#AccountFrm_newsletter0").click()
    }

    agree() {
        cy.get('#AccountFrm_agree').click()
    }

    accountCreated(name) {
        cy.get("span.maintext").should("contain", "Your Account Has Been Created!")
        cy.contains("a", "Continue").click()
        cy.get(".menu_text").should("contain", "Welcome back " + name)
    }

    errorMessage() {
        cy.get('.help-block').contains("First Name must be between 1 and 32 characters!")
        cy.get('.help-block').contains("Last Name must be between 1 and 32 characters!")
        cy.get('.help-block').contains("Email Address does not appear to be valid!")
        cy.get('.help-block').contains("Address 1 must be between 3 and 128 characters!")
        cy.get('.help-block').contains("City must be between 3 and 128 characters!")
        cy.get('.help-block').contains("Please select a region / state!")
        cy.get('.help-block').contains("Zip/postal code must be between 3 and 10 characters!")
        cy.get('.help-block').contains("Login name must be alphanumeric only and between 5 and 64 characters!")
        cy.get('.help-block').contains("Password must be between 4 and 20 characters!")
    }

    errorEmailRegistered() {
        cy.get(".alert").contains('Error: E-Mail Address is already registered!')
    }

    errorUsernameRegisterd() {
        cy.get(".alert").contains('This login name is not available. Try different login name!')
    }

}

export default register_po