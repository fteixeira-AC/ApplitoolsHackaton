/*Using the simpliest way of appling Applitools Eyes with WebDriverIO,
 by following the WebDriverIO documentation description:
 https: //webdriver.io/docs/applitools-service.html
*/
const {
    ClassicRunner,
    Eyes,
    Target
} = require('@applitools/eyes-webdriverio');
const {
    Configuration
} = require('@applitools/eyes-selenium');
//let eyes = new Eyes();
let eyes;
var viewportSize;
//eyes.setApiKey("9aUfuVNrcUdWHGqDE1Sn102EHQKnjS4DdbhVySEn61Azg110")

describe('Test Scenarios using Applitools Eyes', () => {

    beforeEach(async () => {
          browser.url(browser.options.baseUrl)
          browser.maximizeWindow();
          viewportSize = browser.getWindowSize()
    });

     afterEach(async () => {
         await eyes.abortIfNotClosed();

         const results = await eyes.getRunner().getAllTestResults(true);
         console.log(results);
         console.log(results.getAllResults());
     });

    describe('Scenario 1 - Login Page UI Elements Test', function () {

        it('All the expected elements should exist on the page', async function () {
            const runner = new ClassicRunner();

            eyes = new Eyes(runner);

            const configuration = new Configuration();
            configuration.setAppName('Applitools Hackaton');
            configuration.setTestName('Scenario 1 - Login Page UI Elements Test');
            configuration.setApiKey("9aUfuVNrcUdWHGqDE1Sn102EHQKnjS4DdbhVySEn61Azg110");
            configuration.setBatch('Scenario 1 - Login Page UI Elements Test');
            eyes.setConfiguration(configuration);

            try{
                //await eyes.open(browser,'Applitools Hackaton', 'Scenario 1 - Login Page UI Elements Test', viewportSize);
                await eyes.open(browser);
                await eyes.check('Login Window', Target.window());
                await eyes.closeAsync();
            }
            finally{
                await eyes.abortIfNotClosed();
            }
        })
    })

    describe('Scenario 2 - Data-Driven Test', () => {

        const userCredencialsDataDriven = [
            ['', '', 'No Usermame and No Password'],
            ['fernando', '', 'No Password'],
            ['', '12345', 'No Username'],
            ['fernando', '12345', 'Username and Password filled']
        ];

        const runner = new ClassicRunner();

        eyes = new Eyes(runner);

        const configuration = new Configuration();
        configuration.setAppName('Applitools Hackaton');
        configuration.setTestName('Scenario 2 - Data - Driven Test');
        configuration.setApiKey("9aUfuVNrcUdWHGqDE1Sn102EHQKnjS4DdbhVySEn61Azg110");
        eyes.setConfiguration(configuration);
        //eyes.setBatch('Scenario 2 - Data - Driven Test');
        //userCredencialsDataDriven.forEach( async function (userCredencials) {
            it('Sending the credentials', function () {
                const usernameField = await $('#username');
                 usernameField.setValue(userCredencialsDataDriven[0][0])
                 const passwordField = await $('#password');
                 passwordField.setValue(userCredencialsDataDriven[1][1]);
                 const LoginButton = await $('#log-in');
                 LoginButton.click()

                it('Validating using applitools', async function () {
                    await eyes.open(browser);
                    await eyes.check('Main Screen Window', Target.window());
                    await eyes.closeAsync();
                })
            })
        //})
    })
    

    describe('Scenario 3 - Test', function () {

        it('All the expected elements should exist on the page', async function () {
            const runner = new ClassicRunner();

            eyes = new Eyes(runner);

            const configuration = new Configuration();
            configuration.setAppName('Applitools Hackaton');
            configuration.setTestName('Scenario 3 - Test');
            configuration.setApiKey("9aUfuVNrcUdWHGqDE1Sn102EHQKnjS4DdbhVySEn61Azg110");
            configuration.setBatch('Scenario 3 - Test');
            eyes.setConfiguration(configuration);

            try {
                await eyes.open(browser);
                await eyes.check('Login Window', Target.window());
                await eyes.closeAsync();
            } finally {
                await eyes.abortIfNotClosed();
            }
        })
    })

})


