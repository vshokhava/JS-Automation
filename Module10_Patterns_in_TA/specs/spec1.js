const HomePage = require('../po/home_page/homePage.js');
const SearchPage = require('../po/search_page/searchPage.js');
const CareersPage = require('../po/careers_page/careersPage.js')
const CareersResultsPage = require('../po/careers_results_page/careersResultsPage.js');
const ReadPage  = require('../po/read_page/readPage.js')
let EC = protractor.ExpectedConditions;
describe ("TESTS", function () {
    this.beforeEach(function() {
    browser.ignoreSynchronization = true;
     });
      it("scroll to see Footer", async function () {
          await HomePage.open();
          await browser.wait(EC.visibilityOf(HomePage.Header.magnifierIcon.element), 7000);
          browser.executeScript("window.scrollTo(0, document.body.scrollHeight)");
          await browser.wait(EC.visibilityOf(HomePage.Footer.footerFrame.element), 7000);
          expect(await HomePage.Footer.footerFrame.element.isDisplayed()).to.be.true;
      });
  });
  