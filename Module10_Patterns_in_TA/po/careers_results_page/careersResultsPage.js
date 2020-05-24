const BasePage = require('../base_page/basePage.js');
const Element = require('../base_elements/baseElement.js');
const Collection = require('../base_elements/baseCollection.js');

class CareersResultsPage extends BasePage {
    constructor() {
        super();
        this.searchResultsList = new Collection('.search-result__list');
    };
  open() {
        return super.open('https://www.epam.com/careers/job-listings');
    };
};
module.exports = new CareersResultsPage();