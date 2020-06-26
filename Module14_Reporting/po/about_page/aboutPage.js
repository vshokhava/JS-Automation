const BasePage = require('../base_page/basePage.js');
const Element = require('../base_elements/baseElement.js');
const Collection = require('../base_elements/baseCollection.js');

class AboutPage extends BasePage {
  open() {
        return super.open('https://www.epam.com/about');
    };
};
module.exports = new AboutPage();