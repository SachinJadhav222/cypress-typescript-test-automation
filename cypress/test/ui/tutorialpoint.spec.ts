///<reference types="cypress-iframe" />

describe.skip('Tutorialspoint', function () {
  it('Scenario 1', function () {
    // test step to launch a URL
    cy.visit('https://www.tutorialspoint.com/videotutorials/index.php');
    // assertion to validate count of sub-elements and class attribute value
    // cy.get('.toc chapters').find('li')
    //.should('have.length',5)
    //.and('have.class', 'dropdown')
  });

  it.skip('Scenario 2', function () {
    // test step to launch a URL
    cy.visit('https://accounts.google.com');

    cy.get('h1#headingText').find('span').should('have.text', 'Sign in');
    // identify element
    cy.get('h1#headingText')
      .find('span')
      .then(function (e) {
        const t = e.text();
        // assertion expect
        console.log(t);
        expect(t).to.contains('Sign');
      });
    console.log('Tutorialspoint-Cypress');
  });

  it('Scenario 3-Checkbaox', function () {
    // test step to launch a URL
    cy.visit('https://accounts.google.com/signup');
    //checkbox with assertion
    cy.get('input[type="checkbox"]').check().should('be.checked');
    //identify checkbox with class with assertion
    cy.get('.VfPpkd-muHVFf-bMcfAe').uncheck().should('not.be.checked');
  });

  it('Scenario 4 -Tabs', function () {
    // url launch
    cy.visit('https://the-internet.herokuapp.com/windows');
    // delete target attribute with invoke for link
    cy.get('.example > a').invoke('removeAttr', 'target').click();
    // verify tab url
    cy.url().should(
      'include',
      'https://the-internet.herokuapp.com/windows/new',
    );
    // shift to parent window
    cy.go('back');
  });

  it('Scenario 5-Alerts', function () {
    // launch url
    cy.visit('https://register.rediff.com/register/register.php');
    // click submit
    cy.get('input[type="submit"]').click();
    // fire event with method on
    cy.on('window:alert', (t) => {
      //assertions
      expect(t).to.contains('Your full name');
    });
  });

  it('Scenario 6: Alerts', function () {
    //URL launched
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    //fire confirm browser event and accept
    cy.get(':nth-child(2) > button').click();
    cy.on('window:confirm', (t) => {
      //verify text on pop-up
      expect(t).to.equal('I am a JS Confirm');
    });

    // cy.get(':nth-child(3) > button').click()
    // cy.on("window:confirm", (t) => {
    //    //verify text on pop-up
    //    expect(t).to.equal("I am a JS prompt");
    // });
  });

  it('Scenario 7:Hidden Elements', function () {
    // launch URL
    cy.visit('https://www.amazon.com/');
    // show hidden element with invoke
    cy.get('#nav-flyout-ya-signin').invoke('show');
    //click hidden element
    cy.contains('Sign').click();
  });

  it('Scenario 8: iframes', function () {
    // launch URL
    cy.visit('https://jqueryui.com/draggable/');
    // frame loading
    cy.frameLoaded('.demo-frame');
    //shifting focus
    cy.iframe()
      .find('#draggable')
      .then(function (t) {
        const frmtxt = t.text();
        //assertion to verify text
        expect(frmtxt).to.contains('Drag me around');
        cy.log(frmtxt);
      });
  });

  it('Scenario 9: Web Tables', function () {
    //URL launch
    cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/');
    // identify first column
    cy.get('#table1> tbody > tr > td:nth-child(1)').each(
      ($elm, index, $list) => {
        // text captured from column1
        const t = $elm.text();
        // matching criteria
        if (t.includes('Selenium')) {
          // next sibling captured
          cy.get('#table1 > tbody > tr > td:nth-child(1)')
            .eq(index)
            .next()
            .then(function (d) {
              // text of following sibling
              const r = d.text();
              //assertion
              expect(r).to.contains('Open Source');
            });
        }
      },
    );

    it('Scenario 10: Prompt', function () {
      //URL launch
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
      //handling prompt alert
      cy.window().then(function (p) {
        //stubbing prompt window
        cy.stub(p, 'prompt').returns('Tutorialspoint');
        // click on Click for JS Prompt button
        cy.get(':nth-child(3) > button').click();
        // verify application message on clicking on OK
        cy.get('#result').contains('You entered: Tutorialspoint');
      });
    });
  });

  it('Scenario 11: Mouse Hover', function () {
    // launch URL
    cy.visit('https://learn.letskodeit.com/p/practice');
    // show hidden element with invoke
    // cy.get('div.mouse-hover-content').invoke('show');
    //click hidden element
    //cy.contains('Top').click();
  });

  it('Scenario 12: Cookies', function () {
    // launch the application
    cy.visit('https://accounts.google.com');
    // enable cookie logging
    Cypress.Cookies.debug(true);
    //set cookie
    cy.setCookie('cookie1', 'value1');
    //get cookie by name and verify value
    cy.getCookie('cookie1').should('have.property', 'value', 'value1');
    //clear cookie by name
    cy.clearCookie('cookie');
    //get all cookies
    cy.getCookies();
    //clear all cookies
    cy.clearCookies();
    //verify no cookies
    cy.getCookies().should('be.empty');
  });

  it.skip('Scenario 13: Debugging', function () {
    // launch the application
    cy.visit('https://accounts.google.com');
    // enable cookie logging
    Cypress.Cookies.debug(true);
    cy.getCookies;
    //pause execution
    cy.pause();
    cy.setCookie('cookie1', 'value1');
  });
});
