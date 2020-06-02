const BasePage = require('../base_page/basePage.js');
const Element = require('../base_elements/baseElement.js');
const Collection = require('../base_elements/baseCollection.js');

class HomePage extends BasePage {
    constructor() {
        super();
        this.content = new Element('.content-container.parsys');
    };
  open() {
        return super.open('https://www.epam.com/');
    };
    homePageShouldBeFullyDisplayed() {
        return this.content.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;
        });
    }
}
module.exports = new HomePage();