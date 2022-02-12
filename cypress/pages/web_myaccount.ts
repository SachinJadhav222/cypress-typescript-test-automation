class MyAccountPage {
  private pageheading = '.page-heading';

  pageHeading() {
    cy.get(this.pageheading).should('be.visible');
  }
}

export const myAccoutnPage = new MyAccountPage();
