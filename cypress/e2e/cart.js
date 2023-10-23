/// <reference types="Cypress" />
import home_po from "../support/Pages/home-po";
import cart_po from "../support/Pages/cart-po";

describe("Login Account", () => {
  const home = new home_po();
  const cart = new cart_po();
  let product = require("../../cypress/fixtures/product.json");

  beforeEach(() => {
    cy.visit("/");
    home.logo;
  });

  it("Add single item to cart from home", () => {
    home.addItemToCart(product.home[4].name);
    home.clickCart();
    cart.assertName(product.home[4].name);
    cart.assertPrice(product.home[4].price.USD);
    cart.assertQunatity("1");
  });

  it("Add multiple item to cart from home", () => {
    home.addItemToCart(product.home[4].name);
    home.addItemToCart(product.home[6].name);
    home.clickCart();
    cart.assertName(product.home[4].name);
    cart.assertName(product.home[6].name);
    cart.assertPrice(product.home[4].price.USD);
    cart.assertPrice(product.home[6].price.USD);
    cart.assertQunatity("1");
  });
  it("Add discount item to cart", () => {
    home.selectTab("Hair Care", "Conditioner");
    home.assertDiscountItem(product.haircare.conditioner[4].price.old.USD, product.haircare.conditioner[4].price.new.USD);
    home.addItemToCart(product.haircare.conditioner[4].name);
    home.clickCart();
    cart.assertName(product.haircare.conditioner[4].name);
    cart.assertPrice(product.haircare.conditioner[4].price.new.USD);
    cart.assertQunatity("1");
  });

  it("Add out of stock item", () => {
    home.itemDescription(product.home[1].name);
    home.outOfStock();
  });

  it("Add single item to cart from category", () => {
    home.selectTab("Hair Care", "Shampoo");
    home.itemDescription(product.haircare.shampoo[0].name);
    home.addToCartButton();
    home.clickCart();
    cart.assertName(product.haircare.shampoo[0].name);
    cart.assertPrice(product.haircare.shampoo[0].price.USD);
    cart.assertQunatity("1");
  });

  it("Add multiple item to cart from category", () => {
    home.selectTab("Hair Care", "Shampoo");
    home.addItemToCart(product.haircare.shampoo[0].name);
    home.addItemToCart(product.haircare.shampoo[1].name);
    home.clickCart();
    cart.assertName(product.haircare.shampoo[0].name);
    cart.assertName(product.haircare.shampoo[1].name);
    cart.assertPrice(product.haircare.shampoo[0].price.USD);
    cart.assertPrice(product.haircare.shampoo[1].price.USD);
    cart.assertQunatity("1");
  });

  it("Add an item with more than one quantity", () => {
    home.itemDescription(product.home[0].name);
    home.editProductQuantity("3");
    home.addToCartButton();
    cart.assertName(product.home[0].name);
    cart.assertPrice(product.home[0].price.USD);
    cart.assertQunatity("3");
  });

  it("Edit single item cart quantity inside cart", () => {
    home.itemDescription(product.home[0].name);
    home.addToCartButton();
    cart.editQuantity(0, 2);
    cart.updateCart();
    cart.totalPrice(0);
  });

  it("Remove item from cart", () => {
    home.itemDescription(product.home[0].name);
    home.addToCartButton();
    cart.removeItem(0);
    cart.assertEmptyCart();
  });
});
