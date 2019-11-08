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
        
        userCredencialsDataDriven.forEach( async function (userCredencials) {
            it('Sending the credentials', async function () {
                const usernameField = await $('#username');
                usernameField.setValue(userCredencials[0])
                const passwordField = await $('#password');
                passwordField.setValue(userCredencials[1]);
                const LoginButton = await $('#log-in');
                LoginButton.click()
                const TransactionTable = await $('#transactionsTable')
                TransactionTable.waitForExist(5000);
                
                try {
                    await eyes.open(browser, 'Applitools Hackaton', 'Scenario 2 - Data-Driven Test - ' + userCredencials[2], viewportSize);
                    await eyes.check('Login Credentials Trials', Target.window());
                    await eyes.close();
                }
                finally {
                     await eyes.abortIfNotClosed();
                }
            })
        })
    })
    
    describe('Scenario 3 - Table Sort Test', function () {

        it('Verifying Amount Column sort', async function () {
             const usernameField = await $('#username');
             usernameField.setValue('admin')
             const passwordField = await $('#password');
             passwordField.setValue('admin');
             const LoginButton = await $('#log-in');
             LoginButton.click()
             const AmountColumn = await $('#amount');
             AmountColumn.click()
             const TransactionTable = await $('#transactionsTable')
             TransactionTable.waitForExist(5000);
           
            try {
                await eyes.open(browser, 'Applitools Hackaton', 'Scenario 3 - Table Sort Test', viewportSize);
                await eyes.check('Transactions Table Sort', Target.window());
                await eyes.close();
            } finally {
                await eyes.abortIfNotClosed();
            }
        })
    })

})


