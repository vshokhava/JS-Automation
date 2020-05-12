const HomePage = require('./po/homePage.js');
const SearchPage = require('./po/searchPage.js');
const CareersPage = require('./po/careersPage.js')
const CareersResultsPage = require('./po/careersResultsPage.js');
const ReadPage  = require('./po/readPage.js')
let EC = protractor.ExpectedConditions;
describe ("TESTS", function () {
  this.beforeEach(function() {
  browser.ignoreSynchronization = true;
   });
    it("get search results after click on link in SRL", async function () {
      await HomePage.open();
      await HomePage.Header.magnifierIcon.click();
      browser.wait(EC.visibilityOf(HomePage.Header.searchInputField.element), 5000);
      await HomePage.Header.searchInputField.click(); 
      await HomePage.Header.searchInputField.element.sendKeys("testing");
      await HomePage.Header.searchInputSubmit.click();
      await browser.wait(EC.visibilityOf(SearchPage.searchLinks.collection.get(0)), 5000);
      await browser.wait(EC.visibilityOf(ReadPage.docTitles.collection), 5000);
      expect (ReadPage.getPageTitle()).to.eventually.equal('NelsonHall’s Strategy Update on Our Crowdtesting Business | EPAM');
    });
    it("get results by filling in from for finding a jo", async function () {
      await HomePage.open();
      await HomePage.Header.headerLinks.clickElementByText('CAREERS');
      browser.wait(EC.elementToBeClickable(CareersPage.keywordField.element), 5000);
      await CareersPage.keywordField.element.click();
      await CareersPage.keywordField.element.sendKeys("testing");
      browser.wait(EC.elementToBeClickable(CareersPage.locationField.element), 5000);
      await CareersPage.locationField.element.click();
      browser.wait(EC.elementToBeClickable(CareersPage.locationDropdown.element), 5000);
      await CareersPage.locationDropdown.element.click();
      browser.wait(EC.elementToBeClickable(CareersPage.careersSearchSubmit.element), 5000);
      await CareersPage.careersSearchSubmit.element.click();
      browser.wait(EC.visibilityOf(CareersResultsPage.searchResultsList.collection), 5000);
      expect (CareersResultsPage.getPageTitle()).to.eventually.equal('Job Listings');
    });
})