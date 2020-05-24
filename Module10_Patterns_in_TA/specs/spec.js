const HomePage = require('../po/home_page/homePage.js');
const SearchPage = require('../po/search_page/searchPage.js');
const CareersPage = require('../po/careers_page/careersPage.js')
const CareersResultsPage = require('../po/careers_results_page/careersResultsPage.js');
const ReadPage  = require('../po/read_page/readPage.js')
let EC = protractor.ExpectedConditions;
// let webDriver = require('selenium-webdriver');
// let driver = new webDriver.Builder()
// .usingServer('http://localhost:4444/wd/hub')
// .withCapabilities(webDriver.Capabilities.firefox())
// .withCapabilities(webDriver.Capabilities.chrome())
// .build();
describe ("TESTS", function () {
  this.beforeEach(function() {
  browser.ignoreSynchronization = true;
   });
    it("get search results after click on link in SRL", async function () {
      await HomePage.open();
      browser.actions().click(HomePage.Header.magnifierIcon.element).perform();
      await browser.wait(EC.visibilityOf(HomePage.Header.searchInputField.element), 7000);
      await browser.actions().click(HomePage.Header.searchInputField.element).perform(); 
      await browser.wait(EC.visibilityOf(HomePage.Header.searchInputField.element), 7000);
      await browser.actions().sendKeys("testing").perform();
      browser.actions().sendKeys(protractor.Key.ENTER).perform();
      await browser.wait(EC.visibilityOf(SearchPage.searchLinks.collection.get(0)), 7000);
      await browser.wait(EC.elementToBeClickable(SearchPage.searchLinks.collection.get(0)), 7000);
      await SearchPage.searchLinks.collection.get(0).click();
      await browser.wait(EC.visibilityOf(ReadPage.titleBox.element), 7000);
      await browser.sleep(5000);
      expect(ReadPage.floatingMenu).to.exist;
    });
    it("get results by filling in from for finding a job", async function () {
        await HomePage.open();
        await HomePage.Header.headerLinks.clickElementByText('CAREERS');
        await browser.wait(EC.elementToBeClickable(CareersPage.keywordField.element), 10000);
        browser.actions().click(CareersPage.keywordField.element).perform();
        browser.actions().sendKeys("testing").perform();
        await browser.wait(EC.elementToBeClickable(CareersPage.locationField.element), 10000);
        browser.actions().click(CareersPage.keywordField.element).perform();
        browser.actions().click(CareersPage.locationField.element).perform();
        await browser.wait(EC.elementToBeClickable(CareersPage.locationDropdown.element), 10000);
        browser.actions().click(CareersPage.locationDropdown.element).perform();
        await browser.wait(EC.elementToBeClickable(CareersPage.careersSearchSubmit.element), 10000);
        browser.actions().click(CareersPage.careersSearchSubmit.element).perform();
        await browser.wait(EC.visibilityOf(CareersResultsPage.searchResultsList.collection.get(0)), 10000);
        expect (CareersResultsPage.getPageTitle()).to.eventually.equal('Job Listings');
    });
});
