class ShippingStepPage {
  private termsOfService: string;

  private proceedToCheckout: string;

  constructor() {
    this.termsOfService = "#uniform-cgv";
    this.proceedToCheckout = "button[type=submit][name=processCarrier]";
  }

  public acceptTermsOfService(): void {
    cy.get(this.termsOfService).click();
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedToCheckout).click();
  }
}
export { ShippingStepPage };
