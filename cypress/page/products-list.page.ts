class ProductListPage {
  private addTShirt: string;

  constructor() {
    this.addTShirt = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
  }

  public addTShirtToCart(): void {
    cy.get(this.addTShirt).click();
  }
}
export { ProductListPage };
