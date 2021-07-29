class AdressStepPage {
    private proceedToCheckout: string;

    constructor() {
      this.proceedToCheckout = "button[type=submit][name=processAddress]";
    }

    public clickProceedToCheckout(): void {
      cy.get(this.proceedToCheckout).click();
    }
}
export { AdressStepPage };
