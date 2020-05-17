exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumServerJar: './selenium-server-standalone-3.141.59.jar',
  // seleniumPort: 5566,
  // seleniumArgs: [-help],
    // restartBrowserBetweenTests: true,
      directConnect: true,
      framework: 'mocha',
      specs: 'specs/*.js',
      capabilities: {
        browserName: 'chrome',
        maxInstances: 5,
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
            // chaiInViewport = require('chai-in-viewport');
        chai.use(chaiAsPromised);
        // chai.use(chaiInViewport);
        global.expect = chai.expect;
    }
    }