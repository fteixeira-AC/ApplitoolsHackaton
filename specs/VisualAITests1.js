/*Using the simpliest way of appling Applitools Eyes with WebDriverIO,
 by following the WebDriverIO documentation description:
 https: //webdriver.io/docs/applitools-service.html
*/
const {
    Eyes,
    Target
} = require('@applitools/eyes-webdriverio');
const eyes = new Eyes();
eyes.setApiKey("9aUfuVNrcUdWHGqDE1Sn102EHQKnjS4DdbhVySEn61Azg110")

describe('Test Scenarios using Applitools Eyes', () => {

    eyes.setBatch('Applitools Hackaton', 'Applitools Hackaton')
    beforeEach(async () => {
          await browser.url(browser.options.baseUrl)
          await browser.maximizeWindow();
          viewportSize = await browser.getWindowSize()
    });

     after(async () => {
         await eyes.abortIfNotClosed();
     });

    describe('Scenario 1 - Login Page UI Elements Test', function () {
        //eyes.setBatch();
        it('All the expected elements should exist on the page', async function () {
            try{
                await eyes.open(browser,'Applitools Hackaton', 'Scenario 1 - Login Page UI Elements Test', viewportSize);
                await eyes.check('Login Window', Target.window());
                await eyes.close();
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
        
        //eyes.setBatch('number 2', 'number 2');
        userCredencialsDataDriven.forEach( async function (userCredencials) {
            it('Sending the credentials', async function () {
                const usernameField = await $('#username');
                usernameField.setValue(userCredencials[0])
                const passwordField = await $('#password');
                passwordField.setValue(userCredencials[1]);
                const LoginButton = await $('#log-in');
                LoginButton.click()

                    await eyes.open(browser, 'Applitools Hackaton', 'Scenario 2 - Data-Driven Test - ' + userCredencials[2], viewportSize);
                    await eyes.check('Main Screen Window', Target.window());
                    await eyes.close();
            })
        })
    })
    

    describe('Scenario 3 - Test', function () {

        it('All the expected elements should exist on the page', async function () {
            //eyes.setBatch()
            try {
                await eyes.open(browser, 'Applitools Hackaton', 'Scenario 3 - Test', viewportSize);
                await eyes.check('Login Window', Target.window());
                await eyes.close();
            } finally {
                await eyes.abortIfNotClosed();
            }
        })
    })

})


