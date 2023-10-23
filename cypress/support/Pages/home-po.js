/// <reference types="Cypress" />
import "cypress-real-events";

class home_po {
  logo() {
    cy.get("img").should("have.attr", "title", "Automation Test Store");
  }

  loginRegister() {
    cy.get("#customernav").click();
  }

  loginNameDisplay(name) {
    cy.get(".menu_text").should("contain", "Welcome back " + name);
  }

  menuAccount() {
    cy.contains(".menu_text", "Account").trigger("mouseover");
  }

  login() {
    cy.get(".menu_text").contains("Login").click();
  }

  //Add item to cart
  addItemToCart(prodname) {
    cy.get(".col-xs-12").each(($el, index, $list) => {
      if ($el.find(".prdocutname").text() === prodname) {
        cy.log(prodname);
        cy.wrap($el).find(".productcart").click();
      }
    });
  }

  clickCart() {
    cy.get(".dropdown-toggle").contains("Items").click();
  }

  itemDescription(prodname) {
    cy.get(".prdocutname").contains(prodname).click();
  }

  addToCartButton() {
    cy.get(".productpagecart").click();
  }
  assertDiscountItem(oldPrice, newPrice) {
    cy.get(".sale").should("be.visible");
    cy.get(".priceold").contains(oldPrice).should("have.css", "text-decoration", "line-through solid rgb(150, 151, 157)");
    cy.get(".pricenew").contains(newPrice).should("be.visible");
  }

  outOfStock() {
    cy.get(".nostock").contains("Out of Stock").should("have.css", "background-color", "rgb(204, 204, 204)");
  }
  selectTab(tabname, subname) {
    cy.get(".categorymenu").contains(tabname).realHover();
    cy.get(".subcategories").contains(subname).click();
  }

  editProductQuantity(amount) {
    cy.get("#product_quantity").clear().type(amount);
  }
}

export default home_po;
