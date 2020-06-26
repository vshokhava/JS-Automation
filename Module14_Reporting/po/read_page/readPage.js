const BasePage = require('../base_page/basePage.js');
const Element = require('../base_elements/baseElement.js');
const Collection = require('../base_elements/baseCollection.js');

class ReadPage extends BasePage {
    constructor() {
        super();
        this.titleBox = new Element('.layout-box__wrapper');
        this.docTitles = new Collection('.title.section');
        this.floatingMenu = new Element('.floating-menu__container');
    };
}
module.exports = new ReadPage();