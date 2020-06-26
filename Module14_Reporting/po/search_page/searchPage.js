const BasePage = require('../base_page/basePage.js');
const Element = require('../base_elements/baseElement.js');
const Collection = require('../base_elements/baseCollection.js');

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