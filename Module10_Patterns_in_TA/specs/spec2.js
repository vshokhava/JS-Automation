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
      it("highlight elements and scroll search page", async function () {
          await HomePage.open();
          await browser.wait(EC.visibilityOf(HomePage.Header.magnifierIcon.element), 7000);
          browser.executeScript("arguments[0].style.backgroundColor = 'red'", HomePage.Header.magnifierIcon.element);
          browser.actions().click(HomePage.Header.magnifierIcon.element).perform();
          await browser.wait(EC.visibilityOf(HomePage.Header.searchInputField.element), 7000);
          browser.executeScript("arguments[0].style.backgroundColor = 'red'", HomePage.Header.searchInputField.element);
          browser.actions().click(HomePage.Header.searchInputField.element).perform(); 
          await browser.wait(EC.visibilityOf(HomePage.Header.searchInputField.element), 7000);
          browser.actions().sendKeys("testing").perform();
          browser.actions().sendKeys(protractor.Key.ENTER).perform();
          await browser.wait(EC.visibilityOf(SearchPage.searchLinks.collection.get(0)), 7000);
          await browser.wait(EC.elementToBeClickable(SearchPage.searchLinks.collection.get(0)), 7000);
          SearchPage.searchLinks.collection.get(0).click();
          await browser.wait(EC.visibilityOf(ReadPage.titleBox.element), 7000);
          browser.executeScript("arguments[0].style.backgroundColor = 'red'", ReadPage.titleBox.element);
          browser.executeScript("window.scrollTo(0, document.body.scrollHeight)");
          await browser.wait(EC.visibilityOf(ReadPage.Footer.footerFrame.element), 7000);
          browser.executeScript("arguments[0].style.backgroundColor = 'red'", ReadPage.Footer.footerFrame.element);
          expect(HomePage.Footer.footerFrame.element.isDisplayed()).to.be.eventually.true;
        });
  });
  