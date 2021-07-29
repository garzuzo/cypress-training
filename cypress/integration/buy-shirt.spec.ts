import {
  MenuContentPage,
  ProductListPage,
  ShoppingCartPage,
  LoginPage, AdressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const adressStepPage = new AdressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart();
    shoppingCartPage.clickProceedToCheckoutPopup();
    shoppingCartPage.clickProceedToCheckoutSummary();
    loginPage.typeEmail();
    loginPage.typePassword();
    loginPage.clickSignIn();
    adressStepPage.clickProceedToCheckout();
    shippingStepPage.acceptTermsOfService();
    shippingStepPage.clickProceedToCheckout();
    paymentStepPage.clickPayByBankWire();
    paymentStepPage.clickConfirmOrder();

    cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete.");
  });
});
