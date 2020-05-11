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
        timeout: 30000
      },
      onPrepare: () => {
        return browser.waitForAngularEnabled(false);
      }
    };