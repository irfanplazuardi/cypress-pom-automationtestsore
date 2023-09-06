/// <reference types="Cypress" />
import home_po from '../support/POM/home-po';
import register_po from '../support/POM/register-po';
import { faker } from '@faker-js/faker'

describe('Register new account', () => {
  const home = new home_po
  const register = new register_po
  let account = require("../../cypress/fixtures/account.json")
 
  beforeEach(() => {
    cy.visit("/")
    home.logo
    home.loginRegister()
    register.continue()
  });

  it("Register new account with valid data", () => {
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()
    let email = faker.internet.email()
    let telephone = faker.phone.number('08##########')
    let fax = faker.phone.number('######')
    let company = faker.company.name("PT. ")
    let address1 = faker.location.streetAddress()
    let address2 = faker.location.streetAddress()
    let city = faker.location.city()
    let postcode = faker.location.zipCode()
    let loginName = firstName + faker.number.int(100)

    register.firstName(firstName)
    register.lastName(lastName)
    register.email(email)
    register.telephone(telephone)
    register.fax(fax)
    register.company(company)
    register.address1(address1)
    register.address2(address2)
    register.city(city)
    register.country(account.country)
    register.regionState(account.region)
    register.postcode(postcode)
    register.loginName(loginName)
    register.password(account.password)
    register.confirmPassword(account.password)
    register.newsletter()
    register.agree()
    register.continue()
    register.accountCreated()
    home.loginNameDisplay(firstName)
  });

  it('Register new account with empty data', () => {
    register.continue()
    register.errorMessage()
  });

  it('Register new account when only fill no mandatory field', () => {
    let telephone = faker.phone.number('08##########')
    let fax = faker.phone.number('######')
    let company = faker.company.name("PT. ")
    let address2 = faker.location.streetAddress()

    register.telephone(telephone)
    register.fax(fax)
    register.company(company)
    register.address2(address2)
    register.newsletter()
    register.agree()
    register.continue()
    register.errorMessage()
  });

  it('Register new account when only fill mandatory field', () => {
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()
    let email = faker.internet.email()
    let address1 = faker.location.streetAddress()
    let city = faker.location.city()
    let postcode = faker.location.zipCode()
    let loginName = firstName + faker.number.int(100)
    
    register.firstName(firstName)
    register.lastName(lastName)
    register.email(email)
    register.address1(address1)
    register.city(city)
    register.country(account.country)
    register.regionState(account.region)
    register.postcode(postcode)
    register.loginName(loginName)
    register.password(account.password)
    register.confirmPassword(account.password)
    register.newsletter()
    register.agree()
    register.continue()
    register.accountCreated()
    home.loginNameDisplay(firstName)
  });

  it('Register new account with existing email account', () => {
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()
    let telephone = faker.phone.number('08##########')
    let fax = faker.phone.number('######')
    let company = faker.company.name("PT. ")
    let address1 = faker.location.streetAddress()
    let address2 = faker.location.streetAddress()
    let city = faker.location.city()
    let postcode = faker.location.zipCode()
    let loginName = firstName + faker.number.int(100)

    register.firstName(firstName)
    register.lastName(lastName)
    register.email(account.email)
    register.telephone(telephone)
    register.fax(fax)
    register.company(company)
    register.address1(address1)
    register.address2(address2)
    register.city(city)
    register.country(account.country)
    register.regionState(account.region)
    register.postcode(postcode)
    register.loginName(loginName)
    register.password(account.password)
    register.confirmPassword(account.password)
    register.newsletter()
    register.agree()
    register.continue()
  });

  it('Register new account with existing login name', () => {
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()
    let email = faker.internet.email()
    let telephone = faker.phone.number('08##########')
    let fax = faker.phone.number('######')
    let company = faker.company.name("PT. ")
    let address1 = faker.location.streetAddress()
    let address2 = faker.location.streetAddress()
    let city = faker.location.city()
    let postcode = faker.location.zipCode()

    register.firstName(firstName)
    register.lastName(lastName)
    register.email(email)
    register.telephone(telephone)
    register.fax(fax)
    register.company(company)
    register.address1(address1)
    register.address2(address2)
    register.city(city)
    register.country(account.country)
    register.regionState(account.region)
    register.postcode(postcode)
    register.loginName(account.name)
    register.password(account.password)
    register.confirmPassword(account.password)
    register.newsletter()
    register.agree()
    register.continue()
  });
});
