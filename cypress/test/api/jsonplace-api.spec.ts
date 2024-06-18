/// <reference types="@bahmutov/cy-api" />
///<reference types="cypress-file-upload" />

describe('JSON PLACEHOLDER API Test', () => {
  it('Scenario 1: JSON Place Holder users', () => {
    cy.api({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
    })
      .its('status')
      .should('eq', 200);
  });

  it('Scenario 2:XHR request ', () => {
    cy.request('https://jsonplaceholder.cypress.io/comments').as('c');
    //aliasing request
    cy.get('@c').should((response) => {
      // console.log(response.status)
      //expect(response.body).to.have.length(100)
      expect(response).to.have.property('headers');
    });
  });

  it('Scenario 3: Gte Request', function () {
    cy.request('GET', 'https://jsonplaceholder.cypress.io/comments', {}).then(
      (r) => {
        expect(r.status).to.eq(200);
        expect(r).to.have.property('headers');
        expect(r).to.have.property('duration');
      },
    );
  });

  it('Scenario 4: POST ', function () {
    cy.request('https://jsonplaceholder.cypress.io/users?_limit=1').its(
      'body.0',
    ); // yields the first element of the returned list
    // make a new post on behalf of the user
    cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
      title: 'Cypress',
      body: 'Automation Tool',
    });
  });

  it.skip('Scenario 5: File Upload', function () {
    //file to be uploaded path in project folder
    const p = 'cypress/fixtures/Picture.png';
    //const p = cy.fixture('cypress/fixtures/Picture.png')
    // launch URL
    cy.visit('https://the-internet.herokuapp.com/upload');
    //upload file with attachFile
    cy.get('#file-upload').attachFile(p);
    //click on upload
    cy.get('#file-submit').click();
    //verify uploaded file
    cy.get('#uploaded-files').contains('Picture');
  });
});
