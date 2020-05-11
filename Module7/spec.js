const expect = require('chai').expect;
const HomePage = require('./po/homePage.js');
//const BasePage = require('./po/basePage.js');
let EC = protractor.ExpectedConditions;
describe ("Home page header", function () {
  
  // this.beforeEach(function() {
  // browser.ignoreSynchronization = true;
  // });
    it("should have 6 menu items", async function () {
      await HomePage.open();
        await HomePage.Header.magnifierIcon.click;
        await browser.wait(EC.visibilityOf(HomePage.Header.searchInputField), 5000)
        // await browser.wait(EC.visibilityOf(HomePage.Header.magnifierIcon), 5000);
        // let countOfNavigationButtons = await HomePage.Header.headerLinks.getCount();
        // expect(countOfNavigationButtons).to.be.equal(6);
    });
})