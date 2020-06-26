const HomePage = require('../../po/home_page/homePage.js');
const SearchPage = require('../../po/search_page/searchPage.js');
const CareersPage = require('../../po/careers_page/careersPage.js');
const InsightsPage = require('../../po/insights_page/insightsPage.js');
const AboutPage = require('../../po/about_page/aboutPage.js');
const CareersResultsPage = require('../../po/careers_results_page/careersResultsPage.js');
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
When(/^I click Careers button$/, function () {
    HomePage.Header.headerLinks.clickElementByText('CAREERS');
});
When(/^I click Insights button$/, function () {
    HomePage.Header.headerLinks.clickElementByText('INSIGHTS');
});
When(/^I click Our Work button$/, function () {
    HomePage.Header.headerLinks.clickElementByText('OUR WORK');
});
When(/^I click How We Do It button$/, function () {
    HomePage.Header.headerLinks.clickElementByText('HOW WE DO IT');
});
When(/^I click What We Do button$/, function () {
    HomePage.Header.headerLinks.clickElementByText('WHAT WE DO');
});

When(/^I click About button$/, function () {
    HomePage.Header.headerLinks.clickElementByText('ABOUT');
});

When(/^I wait until Keyword field is clickable$/, function () {
    browser.wait(EC.elementToBeClickable(CareersPage.keywordField.element), 10000)
});
When(/^I click Keyword field$/, function () {
    browser.actions().click(CareersPage.keywordField.element).perform();
});
When(/^I type "([^"]*)" in Keyword Input field$/, async function (text) {
    browser.actions().sendKeys(text).perform();
});
When(/^I wait until Location field is clickable$/, function () {
    browser.wait(EC.elementToBeClickable(CareersPage.locationField.element), 10000);
});
When(/^I click Location field$/, function () {
    browser.actions().click(CareersPage.locationField.element).perform();
});
When(/^I wait until Location dropdown is clickable$/, function () {
    browser.wait(EC.elementToBeClickable(CareersPage.locationDropdown.element), 10000);
});
When(/^I click Location dropdown$/, function () {
    browser.actions().click(CareersPage.locationDropdown.element).perform();
});
When(/^I wait until SearchSubmit button is clickable$/, function () {
    browser.wait(EC.elementToBeClickable(CareersPage.careersSearchSubmit.element), 10000);
});
When(/^I click SearchSubmit button$/, function () {
    browser.actions().click(CareersPage.careersSearchSubmit.element).perform();
});
When(/^I wait until CareersResultsPage is visible$/, function () {
    browser.wait(EC.visibilityOf(CareersResultsPage.searchResultsList.collection.get(0)), 10000);
});