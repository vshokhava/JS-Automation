const HomePage = require('../../po/home_page/homePage.js');
const SearchPage = require('../../po/search_page/searchPage.js');
let EC = protractor.ExpectedConditions;
const {Then, setDefaultTimeout} = require('cucumber');
const {expect} = require('chai');
setDefaultTimeout(100000);

Then(/^Page title should (not )?be "([^"]*)"$/, async function (notArg, expectedTitle) {
    const pageTitle = await browser.getTitle();
    if (notArg) {
    expect(pageTitle).to.not.be.equal(expectedTitle);
    } else {
        expect(pageTitle).to.be.equal(expectedTitle);
    }
});

Then (/^I should see Search Input field$/, async function () {
    await browser.wait(EC.visibilityOf(HomePage.Header.searchInputField.element), 7000);
});

Then (/^I should be on Search page$/, async function () {
    await browser.wait(EC.visibilityOf(SearchPage.searchLinks.collection.get(0)), 7000);
    await browser.wait(EC.elementToBeClickable(SearchPage.searchLinks.collection.get(0)), 7000);
});

Then (/^I should see Footer$/, async function () {
    await browser.wait(EC.visibilityOf(HomePage.Footer.footerFrame.element), 7000);
        expect(await HomePage.Footer.footerFrame.element.isDisplayed()).to.be.true;
});