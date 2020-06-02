const HomePage = require('../../po/home_page/homePage.js');
const SearchPage = require('../../po/search_page/searchPage.js');
let EC = protractor.ExpectedConditions;
const {When, setDefaultTimeout} = require('cucumber');
setDefaultTimeout(100000);
When(/^I open "([^"]*)" url$/, function(url) {
 return browser.get(url);
});

When(/^I wait "([^"]*)" seconds$/, function (timeInSeconds) {
    return browser.sleep(timeInSeconds * 1000);
});

When(/^I click Magnifier Glass Icon$/, function () {
    browser.actions().click(HomePage.Header.magnifierIcon.element).perform();
});

When(/^I click Search Input field$/, async function () {
    await browser.actions().click(HomePage.Header.searchInputField.element).perform();
});
When(/^I type "([^"]*)" in Search Input field$/, async function (text) {
    await browser.actions().sendKeys(text).perform();
});
When(/^I click Search button$/, function () {
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

When(/^I wait until page element is visible$/, async function () {
    await browser.wait(EC.visibilityOf(HomePage.Header.magnifierIcon.element), 7000);
});
When(/^I scroll to the bottom of the page$/, function () {
    browser.executeScript("window.scrollTo(0, document.body.scrollHeight)");
});
