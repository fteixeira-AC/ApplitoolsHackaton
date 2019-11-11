const {
    Eyes,
    Target
} = require('@applitools/eyes-webdriverio');
const eyes = new Eyes();
eyes.setApiKey("9aUfuVNrcUdWHGqDE1Sn102EHQKnjS4DdbhVySEn61Azg110")

describe('Test Scenarios using Applitools Eyes', () => {

    eyes.setBatch('Applitools Hackaton', 'Applitools Hackaton')
    eyes.setForceFullPageScreenshot(true);
   
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
                  $('#username').setValue(userCredencials[0])
                  $('#password').setValue(userCredencials[1]);
                  $('#log-in').click()
                if (userCredencials[0] != '' && userCredencials[1] != ''){
                    const TransactionTable = await $('#transactionsTable')
                    TransactionTable.waitForExist(5000);
                }                      
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
             TransactionTable.waitForDisplayed(5000);
           
            try {
                await eyes.open(browser, 'Applitools Hackaton', 'Scenario 3 - Table Sort Test', viewportSize);
                await eyes.checkElementBySelector('#transactionsTable');
                await eyes.close();
            } finally {
                await eyes.abortIfNotClosed();
            }
        })
    })

    describe('Scenario 4 - Canvas Chart Test', function () {

        it('Verifying the different values in 2017 and 2018', async function () {
             const usernameField = await $('#username');
             usernameField.setValue('admin')
             const passwordField = await $('#password');
             passwordField.setValue('admin');
             const LoginButton = await $('#log-in');
             LoginButton.click()
             const MenuItemCompareExpenses = await $('#showExpensesChart');
             MenuItemCompareExpenses.click()
             const ExpensesCanvas = await $('#canvas')
             ExpensesCanvas.waitForDisplayed(5000);
           
            try {
                await eyes.open(browser, 'Applitools Hackaton', 'Scenario 4 - Canvas Chart Test', viewportSize);
                await eyes.checkElementBySelector('#canvas')
                const ButtonShowData = await $('#addDataset');
                ButtonShowData.click()
                await eyes.checkElementBySelector('#canvas');
                await eyes.close();
            } finally {
                await eyes.abortIfNotClosed();
            }
        })
    })

    describe('Scenario 5 - Dynamic Content Test', function () {
        browser.url(browser.options.baseUrl + '?showAd=true')

        it('Verifying the Ads gifs', async function () {
             const usernameField = await $('#username');
             usernameField.setValue('admin')
             const passwordField = await $('#password');
             passwordField.setValue('admin');
             const LoginButton = await $('#log-in');
             LoginButton.click()

             const firstGif = await $('#flashSale');
             const secondGif = await $('#flashSale2');
           
            try {
                await eyes.open(browser, 'Applitools Hackaton', 'Scenario 5 - Dynamic Content Test', viewportSize);
                await eyes.setMatchLevel("Layout");
                await eyes.checkElementBySelector('#flashSale > img');
                await eyes.checkElementBySelector('#flashSale2 > img');
                await eyes.close();
            } finally {
                await eyes.abortIfNotClosed();
            }
        })
    })

})


