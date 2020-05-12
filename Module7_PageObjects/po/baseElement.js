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
    sendKeys() {
        return this.element.sendKeys();
    };
};
module.exports =  Element;