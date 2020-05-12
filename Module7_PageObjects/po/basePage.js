const Header = require('./headerComponent.js');

class BasePage {
    constructor() {
        this.Header = new Header();
    };
    open(url) {
        return browser.get(url);
    };
    getPageTitle() {
      return browser.getTitle();
    };
};

module.exports = BasePage;