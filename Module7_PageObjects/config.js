exports.config = {
    // restartBrowserBetweenTests: true,
      directConnect: true,
      framework: 'mocha',
      specs: './spec.js',
      capabilities: {
        browserName: 'chrome',
        chromeOptions: 
        { 
           args: ['--start-maximized'] 
        } 
      },
      baseUrl: 'localhost',
      mochaOpts: {
        reporter:'spec',
        timeout: 700000
      },
      onPrepare: () => {
        return browser.waitForAngularEnabled(false);
      },
      onPrepare: function() {
        var chai = require('chai'),
            chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;
    }
    }