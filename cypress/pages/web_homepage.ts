///<reference types="../support"/>
///<reference types="cypress-xpath"/>
//import log from '../support'
class WebHomePage {
  private singInButton = '//a[contains(text(),"Sign in")]';

  navigate(url: string) {
    cy.visit(url);
  }

  clickOnSignIn() {
    cy.xpath(this.singInButton).click();
  }
}

export const webHomePage = new WebHomePage();
