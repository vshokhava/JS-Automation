const BasePage = require('./basePage.js');
const Element = require('./baseElement.js');
const Collection = require('./baseCollection.js');

class SearchPage extends BasePage {
    constructor() {
        super();
        this.searchLinks = new Collection('.search-results__title-link');
    };
  open() {
        return super.open('https://www.epam.com/search');
    };
};
module.exports = new SearchPage();