const BasePage = require('./basePage.js');
const Element = require('./baseElement.js');
const Collection = require('./baseCollection.js');

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