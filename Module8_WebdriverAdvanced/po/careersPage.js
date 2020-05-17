const BasePage = require('./basePage.js');
const Element = require('./baseElement.js');
class CareersPage extends BasePage {
    constructor() {
        super();
        this.keywordField = new Element('#new_form_job_search_1445745853_copy-keyword');
        this.locationField = new Element('.select2-selection__rendered');
        this.locationDropdown = new Element('.select2-selection__arrow');
        this.careersSearchSubmit = new Element('.recruiting-search__submit');
    }
};

module.exports = new CareersPage;