/// <reference types="Cypress" />
import login_po from "../support/Pages/login-po";
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
    cart.addItemToCart(product.home[2].name); //not sync with title array and button array
    cart.clickCart();
    cart.assertName(product.home[2].name);
    cart.assertPrice(product.home[2].price.USD);
    cart.assertQunatity("2");
  });

  it("Add multiple item to cart from home", () => {
    cart.addItemToCart(product.home[2].name);
    cart.addItemToCart(product.home[0].name);
    cart.clickCart();
    cart.assertName(product.home[2].name);
    cart.assertPrice(product.home[2].price.USD);
    cart.assertQunatity("2");
  });
  it("Add discount item to cart", () => {
    cart.selectTab("Hair Care", "Conditioner"); //code cannot show hidden menu after hover
    cart.addItemToCart(product.haircare.conditioner[4].name);
    cart.assertDiscountItem();
    cart.clickCart();
    cart.assertName();
    cart.assertPrice(product.haircare.conditioner[4].price.USD);
    cart.assertQunatity("1");
  });

  it("Add out of stock item", () => {
    cart.itemDescription(product.home[1].name);
    cart.outOfStock();
  });

  it("Add single item to cart from category", () => {
    cart.itemDescription(product.home[0].name);
    cart.addToCartButton();
    cart.clickCart();
    cart.assertName(product.home[0].name);
    cart.assertPrice(product.home[0].price.USD);
    cart.assertQunatity("1");
  });

  it.only("Add multiple item to cart from category", () => {
    cart.selectTab("Hair Care", "Conditioner"); //code cannot show hidden menu after hover
    // cy.visit("https://automationteststore.com/index.php?rt=product/category&path=52_54");
    cart.addItemToCart(product.haircare.conditioner[2].name);
    cart.addItemToCart(product.haircare.conditioner[3].name);
    cart.addItemToCart(product.haircare.conditioner[4].name);
    cart.clickCart();
    cart.assertName(product.haircare.conditioner[2].name);
    cart.assertName(product.haircare.conditioner[3].name);
    cart.assertName(product.haircare.conditioner[4].name);
    cart.assertPrice(product.haircare.conditioner[2].price.USD);
    cart.assertPrice(product.haircare.conditioner[3].price.USD);
    cart.assertPrice(product.haircare.conditioner[4].price.USD);
    cart.assertQunatity("1");
  });
});
