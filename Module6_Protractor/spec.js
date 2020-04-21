describe('Search by term', function() {
    it('get search results after click on link in SRL', async function() {
    browser.waitForAngularEnabled(false);
    await browser.get('https://www.epam.com/');
    await element(by.css('.header-search__button.header__icon')).click();
    await browser.wait(protractor.ExpectedConditions.visibilityOf($('.search-results__input-holder')), 5000);
    await element(by.css('.header-search__input')).click();
    await element(by.css('.header-search__input.frequent-searches__input')).sendKeys('testing');
    await element(by.css('.header-search__submit')).click();
    await browser.wait(protractor.ExpectedConditions.visibilityOf($('.search-results__title-link')), 5000);
    await element(by.partialLinkText('test IO:')).click();
    await browser.wait(protractor.ExpectedConditions.visibilityOf($('.title')), 5000);
    expect (browser.getTitle()).toEqual('NelsonHall’s Strategy Update on Our Crowdtesting Business | EPAM');
    });
  });
  
  describe('Careers', function() {
    it('get results by filling in from for finding a job', async function() {
    browser.waitForAngularEnabled(false);
    await browser.get('https://www.epam.com/careers');
    await browser.wait(protractor.ExpectedConditions.elementToBeClickable($('#new_form_job_search_1445745853_copy-keyword')), 5000);
    await element(by.css('#new_form_job_search_1445745853_copy-keyword')).click();
    await element(by.css('#new_form_job_search_1445745853_copy-keyword')).sendKeys('test');
    await browser.wait(protractor.ExpectedConditions.visibilityOf($('.select2-selection__rendered')), 5000);
    await element(by.css('.select2-selection__rendered')).click();
    await browser.wait(protractor.ExpectedConditions.elementToBeClickable($('.select2-selection__arrow')), 5000);
    await element(by.css('.select2-selection__arrow')).click();
    await element(by.css('.select2-selection__arrow')).click();
    await browser.wait(protractor.ExpectedConditions.elementToBeClickable($('.recruiting-search__submit')), 5000);
    await element(by.css('.recruiting-search__submit')).click();
    await browser.wait(protractor.ExpectedConditions.visibilityOf($('.search-result')), 5000);
    expect (browser.getTitle()).toEqual('Job Listings');
    });
  });
  