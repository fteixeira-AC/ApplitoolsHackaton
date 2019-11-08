exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        './specs/**/*.js'
    ],
    exclude: [
         './specs/**/VisualAITests.js',
         './specs/**/TraditionalTests.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless']
        }
    }],
    sync: true,
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://demo.applitools.com/hackathon.html',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    applitoolsKey: "9aUfuVNrcUdWHGqDE1Sn102EHQKnjS4DdbhVySEn61Azg110",

    
     before: function () {
         var chai = require('chai');
         global.expect = chai.expect;
         global.assert = chai.assert;
         chai.Should();
     }
}
