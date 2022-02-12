class LoginPage {
  private loginPage_username = '#email';
  private loginPage_password = '#passwd';
  private loginPage_submitButton = '#SubmitLogin > span';

  navigae(url: string) {
    cy.visit(url);
  }

  enterUserName(username: string) {
    cy.get(this.loginPage_username).type(username);
  }
  enterPassword(password: string) {
    cy.get(this.loginPage_password).type(password);
  }
  submitButton() {
    cy.get(this.loginPage_submitButton).click();
  }
}

export const loginPage = new LoginPage();
