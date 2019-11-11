describe('Test Scenarios using Applitools Eyes', () => {

    beforeEach(() => {
          browser.url(browser.options.baseUrl)
          browser.maximizeWindow();
          viewportSize = browser.getWindowSize()
    });

    describe('Scenario 1 - Login Page UI Elements Test', function () {

        it('All the expected elements should exist on the page', function () {         
           browser.takeSnapshot('login page')
        })
    })

    describe('Scenario 2 - Data-Driven Test', () => {

        const userCredencialsDataDriven = [
            ['', '', 'No Usermame and No Password'],
            ['fernando', '', 'No Password'],
            ['', '12345', 'No Username'],
            ['fernando', '12345', 'Username and Password filled']
        ];

       
        userCredencialsDataDriven.forEach( function (userCredencials) {
            it('Sending the credentials: '+userCredencials[2], function () {
                 $('#username').setValue(userCredencials[0])
                 $('#password').setValue(userCredencials[1])
                 $('#log-in').click()

                browser.takeSnapshot('login trials: ' + userCredencials[2])
            })
        })
    })

     describe('Scenario 3 - Table Sort Test', function () {

         it('Verifying Amount Column sort', function () {
            $('#username').setValue('admin')
            $('#password').setValue('admin')
            $('#log-in').click()
            $('#amount').click()
            browser.takeRegionSnapshot('Verify transactions table', '#transactionsTable')
         })
     })

     describe('Scenario 4 - Canvas Chart Test', function () {

         it('Verifying the different values in 2017 and 2018', function () {
             $('#username').setValue('admin')
             $('#password').setValue('admin')
             $('#log-in').click()
             $('#showExpensesChart').click()
             browser.takeRegionSnapshot('Verify Canvas 2017 and 2018', '#canvas')
             $('#addDataset').click()
             browser.takeRegionSnapshot('Verify Canvas 2017, 2018 and 2019', '#canvas')
         })
     })

     describe('Scenario 5 - Dynamic Content Test', function () {
         it('Verifying the Ads gifs', function () {
            $('#username').setValue('admin')
            $('#password').setValue('admin')
            $('#log-in').click()

            browser.url(browser.getUrl() + '?showAd=true')
            
            browser.takeRegionSnapshot('Verify the Gifs', 'div.element-box-tp')

         })
     })
    
})


