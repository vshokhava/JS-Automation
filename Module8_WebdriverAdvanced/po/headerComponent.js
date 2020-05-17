const Element = require('./baseElement.js');
const Collection = require('./baseCollection.js');
class Header {
    constructor() {
        this.header = new Element('.header-ui');
        this.headerLinks = new Collection('.top-navigation__item');
        this.magnifierIcon = new Element('.header-search__button.header__icon');
        this.searchInputField = new Element('.header-search__input.frequent-searches__input');
        this.searchInputSubmit = new Element('.header-search__submit');
    }
    }
    module.exports = Header;