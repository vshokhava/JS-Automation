const BasePage = require('./basePage.js');
const Element = require('./baseElement.js');
const Collection = require('./baseCollection.js');

class ReadPage extends BasePage {
    constructor() {
        super();
        this.docTitles = new Collection('.title.section');
    };
}
module.exports = new ReadPage();