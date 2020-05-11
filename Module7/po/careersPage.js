const BasePage = require('./basePage.js');
const Element = require('./baseElement.js');
class CareersPage extends BasePage {
    constructor() {
        super();
        this.url = '/careers/';
        
    }
};

module.exports = CareersPage;