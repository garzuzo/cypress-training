class ShoppingCartPage {
  private proceedToCheckoutPopup: string;

  private proceedToCheckoutSummary: string;

  constructor() {
    this.proceedToCheckoutPopup = "[style*=\"display: block;\"] .button-container > a";
    this.proceedToCheckoutSummary = ".cart_navigation span";
  }

  public clickProceedToCheckoutPopup(): void {
    cy.get(this.proceedToCheckoutPopup).click();
  }

  public clickProceedToCheckoutSummary(): void {
    cy.get(this.proceedToCheckoutSummary).click();
  }
}
export { ShoppingCartPage };
