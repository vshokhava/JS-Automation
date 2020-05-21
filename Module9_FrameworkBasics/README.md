Steps to run GRID nodes:
open new terminal and run the following command:
java -jar .\selenium-server\selenium-server-standalone-3.141.59.jar -role hub 

open new terminal and run 1st node by the following command:
java -jar .\selenium-server\selenium-server-standalone-3.141.59.jar -role node -nodeConfig .\grid\nodeconfig.json 

open new terminal and run 2nd node by the following command:
java -jar .\selenium-server\selenium-server-standalone-3.141.59.jar -role node -nodeConfig .\grid\nodeconfig1.json 


to run tests open file spec.js, uncomment the following lines(7-12):
let webDriver = require('selenium-webdriver');
let driver = new webDriver.Builder()
.usingServer('http://localhost:4444/wd/hub')
.withCapabilities(webDriver.Capabilities.firefox())
.withCapabilities(webDriver.Capabilities.chrome())
.build();

new terminal and run tests by the following command:
npm test
