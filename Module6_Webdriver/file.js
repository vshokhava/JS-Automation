const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.epam.com/');
    await driver.findElement(By.css('.header-search__button.header__icon')) .click();
    await driver.findElement(By.css('.search-results__input-holder')) .isDisplayed();
    await driver.findElement(By.css('.header-search__input')) .click();
    await driver.findElement(By.css('.header-search__input.frequent-searches__input')) .sendKeys('testing');
    await driver.findElement(By.css('.header-search__submit')) .click();
    await driver.findElements(By.css('.search-results__title-link'));
    await driver.wait(until.elementLocated(By.partialLinkText("test IO"))).click();
    await driver.findElement(By.css('.title')) .isDisplayed();
  } finally {
    await driver.quit();
  }
})();