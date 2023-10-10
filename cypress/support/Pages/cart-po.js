/// <reference types="Cypress" />

class cart_po {
  addItemToCart(prodname) {
    //not sync with title array and button array
    cy.get(".prdocutname").each(($el, index, $list) => {
      if ($el.text() === prodname) {
        cy.log("element: " + $el.text());
        cy.get(".productcart").eq(index).click();
        return false;
        // .each(($button, indexButton, $listButton) => {
        //   cy.wrap($button).click();
        // });
      }
    });
  }

  clickCart() {
    cy.get(".dropdown-toggle").contains("Items").click();
  }

  assertName(name) {
    cy.get(".table").first().find("tbody tr th").should("contain", "Name");
    cy.get("tbody tr td").contains(name).should("have.text", name);
  }

  assertPrice(price) {
    cy.get(".table").first().find("tbody tr th").should("contain", "Unit Price");
    cy.get("tbody tr td").contains(price).should("have.text", price);
  }

  assertQunatity(quantity) {
    cy.get(".short").should("have.value", quantity);
  }

  updateCart() {
    cy.get("#cart_update").click();
  }

  removeItem() {
    cy.get(".btn-sm").click();
  }

  editQuantity(amount) {
    cy.get("#cart_quantity74").type(amount);
  }

  continueShopping() {
    cy.get(".btn").contains("Continue Shopping");
  }

  itemDescription(prodname) {
    cy.get(".prdocutname").contains(prodname).click();
  }

  addToCartButton() {
    cy.get(".productpagecart").click();
  }

  outOfStock() {
    cy.get(".nostock").contains("Out of Stock").should("have.css", "background-color", "rgb(204, 204, 204)");
  }

  assertDiscountItem() {
    cy.get(".sale").should("be.visible");
    cy.get(".priceold").should("have.css", "text-decoration", "line-through");
  }

  selectTab(tabname, subname) {
    //code cannot show hidden menu after hover
    cy.get(".categorymenu").contains(tabname).invoke("show");
    cy.get(".subcategories").contains(subname).click();
  }
}

export default cart_po;
