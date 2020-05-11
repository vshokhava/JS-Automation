class Element {
    constructor(selector) {
        this.element = element(by.css(selector));
    }
    click() {
        return this.element.click();
    };
    getText() {
        return this.element.getText();
    };
};
module.exports =  Element;