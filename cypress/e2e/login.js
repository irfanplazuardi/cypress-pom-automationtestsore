/// <reference types="Cypress" />
import login_po from "../support/POM/login-po";
import home_po from "../support/POM/home-po";
import { faker } from '@faker-js/faker'

describe('Login Account', () => {
    const home = new home_po
    const login = new login_po
    let account = require("../../cypress/fixtures/account.json")

    beforeEach(() => {
        cy.visit("/")
        home.logo
    });

    it('Login with valid username and password from login/register', () => {
        home.loginRegister()
        login.loginName(account.name)
        login.password(account.password)
        login.loginbtn()
        home.loginNameDisplay(account.name)
    });

    it('Login with invalid username and password', () => {
        home.loginRegister()
        login.loginName(account.wrongName)
        login.password(account.wrongPassword)
        login.loginbtn()
        login.errorInvalidNamePassword()
    });

    it('Login with invalid username or password', () => {
        home.loginRegister()
        login.loginName(account.name)
        login.password(account.wrongPassword)
        login.loginbtn()
        login.errorInvalidNamePassword()
        login.loginName(account.wrongName)
        login.password(account.password)
        login.loginbtn()
        login.errorInvalidNamePassword()
    });

    it('Login when forget password', () => {
        home.loginRegister()
        login.forgetPassword()
        login.loginNameForgotForm(account.name)
        login.emailAddress(account.email)
        login.continue()
        login.passwordResetSent()
        //extend the test
    });

    it('Login when forget username', () => {
        home.loginRegister()
        login.forgetLoginName()
        login.lastName(account.lastName)
        login.emailAddress(account.email)
        login.continue()
        login.loginNameSent()
        //extend the test
    });

    it('Login with valid username and password from account menu', () => {
        home.menuAccount()
        home.login()
        login.loginName(account.name)
        login.password(account.password)
        login.loginbtn()
        home.loginNameDisplay(account.name)
    });
});