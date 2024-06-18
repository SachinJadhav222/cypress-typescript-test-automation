import { webHomePage, loginPage, myAccoutnPage } from '../../pages';

describe.skip('Login Function', function () {
  it('Webstore Login Test ', function () {
    webHomePage.navigate('/');
    webHomePage.clickOnSignIn();
    loginPage.enterUserName('demo@demomail.com');
    loginPage.enterPassword('demo123');
    loginPage.submitButton();
    myAccoutnPage.pageHeading();
  });
});
