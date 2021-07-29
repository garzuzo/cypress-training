class PaymentStepPage {
  private payByBankWire: string;

  private confirmOrder: string;

  constructor() {
    this.payByBankWire = ".bankwire";
    this.confirmOrder = "button[type=submit].button-medium";
  }

  public clickPayByBankWire(): void {
    cy.get(this.payByBankWire).click();
  }

  public clickConfirmOrder(): void {
    cy.get(this.confirmOrder).click();
  }
}
export { PaymentStepPage };
