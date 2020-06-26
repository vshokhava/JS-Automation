"use strict";

const path = require('path');
const yargs = require('yargs').argv;
const logger = require('./loggerConfig.js').logger;
const cucumberJunitConvert = require('cucumber-junit-convert');
const reporter = require('cucumber-html-reporter');
const options = {
    inputJsonFile: path.join(__dirname, '../reports/report.json'),
    outputXmlFile: path.join(__dirname, '../reports/report.xml')
};
const reportOptions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/report.json'),
    output: path.join(__dirname, '../reports/cucumber-report.html'),
    reportSuitsScenarios: true,
    launchReport: true
};

exports.config = {
 allScriptsTimeout: 60000,
 getPageTimeout: 60000,
 specs: [path.resolve('./test/features/**/*.feature')],
 framework: 'custom',
 frameworkPath: require.resolve('protractor-cucumber-framework'),
 capabilities: {
     shardTestFiles: yargs.instances > 1,
     maxInstances: yargs.instances || 1,
     browserName: 'chrome',
     chromeOptions: {
         args: ['--no-sandbox', '--start-maximized']
     },
 },
 disableChecks: true,
 directConnect: true,
 cucumberOpts: {
     require: [path.resolve('./test/step_definitions/*.js')],
     ignoreUncaughtExceptions: true,
     format: ['json:./test/reports/report.json', './node_modules/cucumber-pretty'],
     tags: yargs.tags || '@smoke'
 },
 onPrepare: () => {
     browser.ignoreSynchronization = true;
     return browser.waitForAngularEnabled(false);
 },
 afterLaunch: () => {
     return reporter.generate(reportOptions),
     cucumberJunitConvert.convert(options)
 }
};
