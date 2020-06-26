const {After} = require('cucumber');
"use strict";
After(async function (scenario){
 const screenshot = await browser.takeScreenshot();
        const decodedImage = new Buffer.from (screenshot, 'base64');
        return this.attach(decodedImage, 'image/png');
});