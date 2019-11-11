exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        './specs/**/*.js'
    ],
    exclude: [
         './specs/**/VisualAITests1.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--fullscreen']
        }
    }],
    sync: true,
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://demo.applitools.com/hackathonV2.html',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver', 'applitools'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    applitoolsKey: "9aUfuVNrcUdWHGqDE1Sn102EHQKnjS4DdbhVySEn61Azg110",
    applitools: {
        viewport: {
            'width': 1440,
            'height': 900
        }
    },
    
     before: function () {
         var chai = require('chai');
         global.expect = chai.expect;
         global.assert = chai.assert;
         chai.Should();
     }
}
