/*Using the simpliest way of appling Applitools Eyes with WebDriverIO,
 by following the WebDriverIO documentation description:
 https: //webdriver.io/docs/applitools-service.html
*/
const {
    ClassicRunner,
    Eyes,
    Target
} = require('@applitools/eyes-webdriverio');
let eyes = new Eyes();
var viewportSize;
eyes.setApiKey("9aUfuVNrcUdWHGqDE1Sn102EHQKnjS4DdbhVySEn61Azg110")

describe('Test Scenarios using Applitools Eyes', () => {


    beforeEach(() => {
          browser.url(browser.options.baseUrl)
          browser.maximizeWindow();
          viewportSize = browser.getWindowSize()
    });

    describe('Scenario 1 - Login Page UI Elements Test', function () {

        it('All the expected elements should exist on the page', async function () {
            try{
                await eyes.open(browser,'Applitools Hackaton', 'Scenario 1 - Login Page UI Elements Test', viewportSize);
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
        //eyes.setBatch('Scenario 2 - Data - Driven Test');
        userCredencialsDataDriven.forEach(function (userCredencials) {
            it('Sending the credentials', function () {
                $('#username').setValue(userCredencials[0])
                $('#password').setValue(userCredencials[1])
                $('#log-in').click()
                it('Validating using applitools', async function () {
                    try {
                        await eyes.open(browser, 'Applitools Hackaton', 'Scenario 2 - Data-Driven Test' + userCredencials[3], viewportSize);
                        if (userCredencials[0] != "" && userCredencials[1] != "") {
                            //successful login and Main Screen displayed
                            await eyes.check('Main Screen Window', Target.window());
                            await eyes.closeAsync();
                        } else if (userCredencials[0] === "" || userCredencials[1] === "") {
                            //An error happened and a message was displayed
                            await eyes.check('Error alert displayed on Login Screen', Target.window());
                            await eyes.closeAsync();
                        }
                    } finally {
                        await eyes.abortIfNotClosed();
                    }
                })
            })
        })
    })
    
})


