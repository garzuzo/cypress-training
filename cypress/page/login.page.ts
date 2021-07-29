class LoginPage {
    private email: string;

    private password: string;

    private emailInput: string;

    private passwordInput: string;

    private signIn: string;

    constructor() {
      this.email = "aperdomobo@gmail.com";
      this.password = "WorkshopProtractor";
      this.emailInput = "#email";
      this.passwordInput = "#passwd";
      this.signIn = "#SubmitLogin";
    }

    public typeEmail(): void {
      cy.get(this.emailInput).type(this.email);
    }

    public typePassword(): void {
      cy.get(this.passwordInput).type(this.password);
    }

    public clickSignIn(): void {
      cy.get(this.signIn).click();
    }
}
export { LoginPage };
