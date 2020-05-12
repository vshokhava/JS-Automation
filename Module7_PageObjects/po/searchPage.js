const BasePage = require('./basePage.js');
const Element = require('./baseElement.js');
const Collection = require('./baseCollection.js');

class SearchPage extends BasePage {
    constructor() {
        super();
        this.searchLink = new Element('.search-results__title-link');
        this.linkToClick = element(by.partialLinkText('test IO:'));
    };
  open() {
        return super.open('https://www.epam.com/search');
    };
};
module.exports = new SearchPage();