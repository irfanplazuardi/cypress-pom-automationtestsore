/// <reference types="Cypress" />

class cart_po {
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

  removeItem(index) {
    cy.get(".btn-sm").eq(index).click();
  }

  assertEmptyCart() {
    cy.get(".contentpanel").should("contain", "Your shopping cart is empty!");
  }

  editQuantity(index, amount) {
    cy.get(".short").eq(index).clear().type(amount);
  }

  totalPrice(index) {
    let expectedTotalPrice;
    let actualTotalPrice;

    cy.get("tbody > :nth-child(2) > :nth-child(4)")
      .invoke("text")
      .then((priceText) => {
        const price = parseFloat(priceText.replace(/[$€￡\D]/g, ""));
        cy.log(price);
        cy.get(".short")
          .eq(index)
          .invoke("val")
          .then((quantityText) => {
            const quantity = parseFloat(quantityText);
            cy.log(quantity);
            expectedTotalPrice = price * quantity;
            cy.get("tbody > :nth-child(2) > :nth-child(6)")
              .invoke("text")
              .then((totalPriceText) => {
                actualTotalPrice = parseFloat(totalPriceText.replace(/[$€￡\D]/g, ""));
                expect(actualTotalPrice).to.equal(expectedTotalPrice);
              });
          });
      });
  }

  continueShopping() {
    cy.get(".btn").contains("Continue Shopping");
  }
}

export default cart_po;
