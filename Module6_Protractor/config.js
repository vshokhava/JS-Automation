exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      browserName: 'chrome',
      chromeOptions: 
      { 
         args: ['--start-maximized'] 
      } 
    },
    specs: './spec.js',
    jasmineNodeOpts: {
      showColors: true, 
    }
  };