const Header = require('./headerComponent.js');
const Footer = require('./footerComponent.js')

class BasePage {
    constructor() {
        this.Header = new Header();
        this.Footer = new Footer();
    };
    open(url) {
        return browser.get(url);
    };
    getPageTitle() {
      return browser.getTitle();
    };
};

module.exports = BasePage;